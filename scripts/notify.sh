#!/bin/bash

GIT_COMMIT=$(git rev-parse HEAD)
GIT_MESSAGE=$(git log -n 1 --format=%s "${GIT_COMMIT}")
GIT_AUTHOR=$(git log -n 1 --format=%ae "${GIT_COMMIT}")
GIT_COMMIT_SHORT=$(git rev-parse --short "${GIT_COMMIT}")
GIT_INFO="Branch(Version): main\nLast Message: ${GIT_MESSAGE}\nAuthor: ${GIT_AUTHOR}\nCommit: ${GIT_COMMIT_SHORT}"

projectKey=$(grep '^sonar.projectKey=' "./sonar-project.properties" | cut -d'=' -f2 | tr -d '[:space:]')
metricKeys='bugs,vulnerabilities,security_hotspots,code_smells,duplicated_lines_density,ncloc,cognitive_complexity,critical_violations,major_violations,sqale_index,alert_status'
sonarQubeResult=$(curl -s "${SONARURL}api/measures/component?component=${projectKey}&branch=circleci-project-setup&metricKeys=${metricKeys}")
metricsMap=$(echo "$sonarQubeResult" | jq -r '.')
text_break='------------------------------------------------------------------------'
info_break='------------------------------------'
notificationMessage=$(cat <<EOF
${text_break}
*Build Information:*
Job: $CIRCLE_JOB
Build Number: $CIRCLE_BUILD_NUM
Build URL: [$CIRCLE_JOB]($CIRCLE_BUILD_URL)
${info_break}
*SCM Information:*
${GIT_INFO}
${info_break}
*SonarCloud Information:*
Quality Gate: ${metricsMap.component.measures.find { it.metric == 'alert_status' }?.value ?: 'N/A'}
Code Lines: ${metricsMap.component.measures.find { it.metric == 'ncloc' }?.value ?: 'N/A'}
Bugs: ${metricsMap.component.measures.find { it.metric == 'bugs' }?.value ?: 'N/A'}
Duplications: ${metricsMap.component.measures.find { it.metric == 'duplicated_lines_density' }?.value ?: 'N/A'}%
Vulnerabilities: ${metricsMap.component.measures.find { it.metric == 'vulnerabilities' }?.value ?: 'N/A'}
Security Hotspots: ${metricsMap.component.measures.find { it.metric == 'security_hotspots' }?.value ?: 'N/A'}
Critical Violations: ${metricsMap.component.measures.find { it.metric == 'critical_violations' }?.value ?: 'N/A'}
Major Violations: ${metricsMap.component.measures.find { it.metric == 'major_violations' }?.value ?: 'N/A'}
Code Smells: ${metricsMap.component.measures.find { it.metric == 'code_smells' }?.value ?: 'N/A'}
Code Complexity: ${metricsMap.component.measures.find { it.metric == 'cognitive_complexity' }?.value ?: 'N/A'}
Technical debt: ${metricsMap.component.measures.find { it.metric == 'sqale_index' }?.value ?: 'N/A'} minutes
SonarQube URL: [${projectKey}](${SONARURL}dashboard?id=${projectKey})
${text_break}
EOF
)

curl -sL --request POST 'https://api.telegram.org/bot${TOKEN}/sendMessage' \
    --form text="${notificationMessage}" \
    --form chat_id="${CHAT_ID}" \
    --form parse_mode='Markdown'

