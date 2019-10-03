# Docker helper commands

## Stop all proccesses 

```
docker stop $(docker ps -q);
```

## Remove all containers

```
docker rm $(docker ps -aq);
```

## Remove stopped containers

```
docker rm $(docker ps -qf "status=exited");
```

## Remove all images

```
docker rmi $(docker images -aq)
```

## Remove images with tag `<none>`

```
docker rmi $(docker images -f "dangling=true" -q)
```
