FROM httpd:2.4
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY shared_volume/httpd-vhosts.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf
EXPOSE 80
CMD ["httpd-foreground"]

