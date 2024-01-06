#!/bin/bash

directory_path="$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"

if [ -d "$directory_path" ]; then
    filesCount=$(ls -1 "$directory_path" | wc -l | tr -d '[:space:]')

    if [ "$filesCount" -gt 0 ]; then
        echo "Asset already available."
    else
        mkdir -p "$directory_path"
        wget -q "$ASSET" -P "$directory_path"
        mv "$directory_path"/* "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME"

        downloadedFilesCount=$(ls -1 "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME" | wc -l | tr -d '[:space:]')

        if [ "$downloadedFilesCount" -gt 0 ]; then
            echo "Asset download successful."
        else
            echo "Pipeline aborted due to failure: Link changed or Expired"
            exit 1
        fi
    fi
else
    mkdir -p "$directory_path"
    wget -q "$ASSET" -P "$directory_path"
    mv "$directory_path"/* "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME"

    downloadedFilesCount=$(ls -1 "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME" | wc -l | tr -d '[:space:]')

    if [ "$downloadedFilesCount" -gt 0 ]; then
        echo "Asset download successful."
    else
        echo "Pipeline aborted due to failure: Link changed or Expired"
        exit 1
    fi
fi