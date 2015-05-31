#!/bin/bash

docker run -d --name container_office_sensor heigvd/res-sensors node /opt/res/09-Thermometers/thermometer.js office 20 3
docker run -d --name container_bedroom_sensor heigvd/res-sensors node /opt/res/09-Thermometers/thermometer.js bedroom 17 2
docker run -d --name container_station heigvd/res-sensors node /opt/res/09-Thermometers/station.js 
