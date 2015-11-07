# Docker helper commands

## Remove all containers

```
docker rm $(docker ps -a -q)
```

## Remove all images

```
docker rmi $(docker images -a -q)
```

## [Apache - php container](https://medium.com/dev-tricks/apache-and-php-on-docker-44faef716150)

```
FROM ubuntu

RUN apt-get update
RUN apt-get -y upgrade

RUN sudo apt-get -y install apache2 php5 libapache2-mod-php5

# Install apache, PHP, and supplimentary programs. curl and lynx-cur are for debugging the container.
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install apache2 libapache2-mod-php5 php5-mysql php5-gd php-pear php-apc php5-curl curl lynx-cur

# Enable apache mods.
RUN a2enmod php5
RUN a2enmod rewrite

EXPOSE 80

# Copy site into place.
ADD html /var/www/html

# Update the default apache site with the config we created.
ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf

# By default, simply start apache.
CMD /usr/sbin/apache2ctl -D FOREGROUND
```
