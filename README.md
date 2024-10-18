# interval-playground

## Pre-requisites

- [Brew](https://brew.sh/)
- [Docker](https://docs.docker.com/get-docker/)

```shell
$ brew bundle
$ task
$ task --list
```


## Start

### Up interval server
```shell
$ task run
```

### Apps
- Interval Server: http://localhost:3000 
- PG adminer: http://localhost:8080

### Down interval server
```shell
$ task down
```


## Useful commands

```shell
# debug interval-server
$ docker logs -f $(docker ps --filter "ancestor=alexarena/interval-server:1.0.3" -q)
```
