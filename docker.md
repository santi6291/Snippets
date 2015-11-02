# Docker helper commands

## Remove all containers

```
docker rm $(docker ps -a -q)
```

## Remove all images

```
docker rmi $(docker images -a -q)
```
