#!/bin/bash

GIT_COMMIT=$(git rev-parse HEAD)
GIT_MESSAGE=$(git log -n 1 --format=%s "${GIT_COMMIT}")
GIT_AUTHOR=$(git log -n 1 --format=%ae "${GIT_COMMIT}")
GIT_COMMIT_SHORT=$(git rev-parse --short "${GIT_COMMIT}")
GIT_INFO="Branch(Version): main\nLast Message: ${GIT_MESSAGE}\nAuthor: ${GIT_AUTHOR}\nCommit: ${GIT_COMMIT_SHORT}"

echo -e "${GIT_INFO}"
