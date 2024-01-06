#!/bin/bash
set -e

if [ -d "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH" ]; then
    filesCount=$(ls -1 "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH" | wc -l | tr -d '[:space:]')

    if [ "$filesCount" -gt 0 ]; then
        echo "Asset already available."
    else
        mkdir -p "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"
        wget -q "$ASSET" -P "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"
        mv "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"/* "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME"

        downloadedFilesCount=$(ls -1 "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME" | wc -l | tr -d '[:space:]')

        if [ "$downloadedFilesCount" -gt 0 ]; then
            echo "Asset download successful."
        else
            echo "Pipeline aborted due to failure: Link changed or Expired"
            exit 1
        fi
    fi
else
    mkdir -p "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"
    wget -q "$ASSET" -P "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"
    mv "$CIRCLE_WORKING_DIRECTORY/$ASSETPATH"/* "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME"

    downloadedFilesCount=$(ls -1 "$CIRCLE_WORKING_DIRECTORY/$ASSETNAME" | wc -l | tr -d '[:space:]')

    if [ "$downloadedFilesCount" -gt 0 ]; then
        echo "Asset download successful."
    else
        echo "Pipeline aborted due to failure: Link changed or Expired"
        exit 1
    fi
fi