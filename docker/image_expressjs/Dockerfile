#
# This image is based on another image
#
FROM node:0.10.38

#
# For information: who maintains this Dockerfile?
#
MAINTAINER Olivier Liechti

#
# When we create the image, we copy files from the host into
# the image file system. This is NOT a shared folder!
#
COPY file_system /opt/res/

#
# With RUN, we can execute commands when we create the image. Here,
# we install the PM2 process manager
#
RUN npm install -g pm2@0.12.9

WORKDIR /opt/res/
RUN npm install

#
# With CMD, we start the PM2 process manager. The process manager is responsible
# for starting the node.js script (the express.js app)
#
CMD pm2 start -x /opt/res/bin/www --no-daemon
