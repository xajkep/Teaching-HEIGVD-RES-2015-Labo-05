#!/bin/bash

docker rm -f my-front-end1
docker rm -f my-front-end2
docker rm -f my-front-end3

./front_end/createDockerImage.sh
./front_end/startContainer.sh

docker rm -f my-back-end1     
docker rm -f my-back-end2
docker rm -f my-back-end3

./back_end/createDockerImage.sh
./back_end/startContainer.sh


