#!/usr/bin/env bash
cd /home/ubuntu/build
sudo nohup java -jar build/libs/backend-0.0.1-SNAPSHOT.jar > logging.log 2>&1 &