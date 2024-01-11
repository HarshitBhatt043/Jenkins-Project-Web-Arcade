#!/bin/bash

projectKey=$(grep '^sonar.projectKey=' "$CIRCLE_WORKING_DIRECTORY/sonar-project.properties" | cut -d'=' -f2 | tr -d '[:space:]')
value=$(curl -s "${SONARURL}api/measures/component?component=${projectKey}&branch=circleci-project-setup&metricKeys=alert_status" | grep -o '"value":"[^"]*"' | cut -d':' -f2 | tr -d '"')

if [ "$value" == "OK" ]; then
    echo "Quality gate passed"
    exit 0
else
    echo "Quality gate failed"
    exit 1
fi
