#!/bin/bash

docker run -d --name my-reverse-proxy-apache -p 80:80 -v /vagrant/docker/httpd-reverse-proxy/shared_volume/httpd-vhosts.conf:/usr/local/apache2/conf/extra/httpd-vhosts.conf apache-reverse-proxy
