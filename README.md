# interval-playground

## Pre-requisites

- [Brew](https://brew.sh/)
- [Docker](https://docs.docker.com/get-docker/)
- [asdf](https://asdf-vm.com/)

```shell
$ brew install gcc readline zlib curl ossp-uuid icu4c pkg-config
$ asdf plugin-add nodejs
$ asdf plugin-add postgres
$ PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c/lib/pkgconfig" asdf install
```

## Useful commands

### Start Services
```shell
$ docker compose --profile db up -d
$ asdf reshim nodejs
$ npm i -g yarn
$ npm i -g @interval/server@1.0.3
$ DATABASE_URL=postgresql://postgres:postgres@localhost:5432/interval interval-server db-init
$ docker compose --profile db --profile interval-server up -d

# to see logs
$ docker logs -f $(docker ps --filter "ancestor=alexarena/interval-server:1.0.3" -q)
```

### Stop Services
```shell
$ docker compose --profile db --profile interval-server down

# to reset
$ docker compose --profile db --profile interval-server down --volumes --rmi all --remove-orphans
```

## Apps
- PG adminer: http://localhost:8080
- Interval Server: http://localhost:3000 
