#!/bin/bash

project_dir="Jenkins-Project-Web-Arcade/circleci"

if [ -d "$project_dir" ]; then

    if [ -e "$project_dir/docker-compose.yml" ]; then
        cd "$project_dir" || exit
        docker compose down
        docker compose pull
        docker compose up -d

        appUrl="http://localhost:5000"
        maxRetries=3
        retryInterval=10
        retries=0
        healthy=false

        while [ $retries -lt $maxRetries ]; do
            if curl -sSf "$appUrl" -o /dev/null; then
                healthy=true
                break
            else
                ((retries++))
                sleep "$retryInterval"
            fi
        done

        if [ "$healthy" = true ]; then
            echo 'Health checks passed, the application is healthy'
        else
            echo 'Health checks failed, the application may be unhealthy'
            exit 1
        fi

        docker system prune -af
    else
        echo "docker-compose.yml not found in $project_dir"
        exit 1
    fi
else
    git clone --single-branch --depth 1 -b main https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git

    if [ -e "$project_dir/docker-compose.yml" ]; then
        cd "$project_dir" || exit
        docker compose down
        docker compose pull
        docker compose up -d

        appUrl="http://localhost:5000"
        maxRetries=3
        retryInterval=10
        retries=0
        healthy=false

        while [ $retries -lt $maxRetries ]; do
            if curl -sSf "$appUrl" -o /dev/null; then
                healthy=true
                break
            else
                ((retries++))
                sleep "$retryInterval"
            fi
        done

        if [ "$healthy" = true ]; then
            echo 'Health checks passed, the application is healthy'
        else
            echo 'Health checks failed, the application may be unhealthy'
            exit 1
        fi

        docker system prune -af
    else
        echo "docker-compose.yml not found in $project_dir after cloning"
        exit 1
    fi
fi
