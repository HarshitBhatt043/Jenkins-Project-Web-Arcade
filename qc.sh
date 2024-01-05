#!/bin/bash
value=$(curl -s 'https://sonarcloud.io/api/measures/component?component=HarshitBhatt043_Jenkins-Project-Web-Arcade&metricKeys=alert_status' | grep -o '"value":"[^"]*"' | cut -d':' -f2 | tr -d '"')

if [ "$value" == "OK" ]; then
    echo "Quality gate passed"
    exit 0
else
    echo "Quality gate failed"
    exit 1
fi
