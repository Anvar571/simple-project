## First
Create .env file copy .env.example
then you need to write your own database configs default postges

```bash
$ docker compose up -d
```

## Installation

```bash
$ pnpm install
```

## Running the app with docker

```bash
# development
$ pnpm run start:docker:dev

# watch mode
$ pnpm run start:docker:prod

```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

```

## Author

- Author - Anvar Abdurashidov
