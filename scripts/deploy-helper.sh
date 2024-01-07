#!/bin/bash

script_url="https://raw.githubusercontent.com/HarshitBhatt043/Jenkins-Project-Web-Arcade/circleci-project-setup/scripts/deploy.sh"
local_script_path="./deploy.sh"

if [ -e "$local_script_path" ]; then
    echo "Script file exists. Running it..."
    bash "$local_script_path"

    if [ $? -eq 0 ]; then
        echo "Script execution successful. Deleting the script file."
        rm "$local_script_path"
    else
        echo "Script execution failed."
    fi
else
    echo "Script file not found. Downloading it with curl..."
    curl -o "$local_script_path" "$script_url"

    if [ $? -eq 0 ]; then
        echo "Script file downloaded successfully. Running it..."
        bash "$local_script_path"

        if [ $? -eq 0 ]; then
            echo "Script execution successful. Deleting the script file."
            rm "$local_script_path"
        else
            echo "Script execution failed."
        fi
    else
        echo "Failed to download the script file."
    fi
fi
