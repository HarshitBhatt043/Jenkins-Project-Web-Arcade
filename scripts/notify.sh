#!/bin/bash

GIT_COMMIT=$(git rev-parse HEAD)
GIT_MESSAGE=$(git log -n 1 --format=%s "${GIT_COMMIT}")
GIT_COMMIT_SHORT=$(git rev-parse --short "${GIT_COMMIT}")
COMMIT_URL="https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade/commit/$CIRCLE_SHA1"
BRANCH_URL="https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade/tree/$CIRCLE_BRANCH"

projectKey=$(grep '^sonar.projectKey=' "./sonar-project.properties" | cut -d'=' -f2 | tr -d '[:space:]')
metricKeys='bugs,vulnerabilities,security_hotspots,code_smells,duplicated_lines_density,ncloc,cognitive_complexity,critical_violations,major_violations,sqale_index,alert_status'
sonarQubeResult=$(curl -s "${SONARURL}api/measures/component?component=${projectKey}&branch=circleci-project-setup&metricKeys=${metricKeys}")
metricsMap=$(echo "$sonarQubeResult" | jq -r '.')

text_break='------------------------------------------------------------------------'
info_break='------------------------------------'
notificationMessage=$(
    cat <<EOF
${text_break}
*Build Information:*
CircleCi: [$CIRCLE_PROJECT_REPONAME]($CIRCLE_BUILD_URL)
Build Number: $CIRCLE_BUILD_NUM
${info_break}
*SCM Information:*
Branch: [$CIRCLE_BRANCH](${BRANCH_URL})
Commit: [${GIT_COMMIT_SHORT}](${COMMIT_URL})
Last Message: ${GIT_MESSAGE}
Author: $CIRCLE_USERNAME
${info_break}
*SonarCloud Information:*
Quality Gate: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "alert_status") | .value' || echo 'N/A')
Code Lines: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "ncloc") | .value' || echo 'N/A')
Bugs: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "bugs") | .value' || echo 'N/A')
Duplications: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "duplicated_lines_density") | .value' || echo 'N/A')%
Vulnerabilities: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "vulnerabilities") | .value' || echo 'N/A')
Security Hotspots: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "security_hotspots") | .value' || echo 'N/A')
Critical Violations: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "critical_violations") | .value' || echo 'N/A')
Major Violations: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "major_violations") | .value' || echo 'N/A')
Code Smells: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "code_smells") | .value' || echo 'N/A')
Code Complexity: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "cognitive_complexity") | .value' || echo 'N/A')
Technical debt: $(echo "${metricsMap}" | jq -r '.component.measures[] | select(.metric == "sqale_index") | .value' || echo 'N/A') minutes
Project URL: [${projectKey}](${SONARURL}dashboard?id=${projectKey})
${text_break}
EOF
)

curl -sL --request POST "https://api.telegram.org/bot$TOKEN/sendMessage" \
    --form text="${notificationMessage}" \
    --form chat_id="$CHAT_ID" \
    --form parse_mode='Markdown'
