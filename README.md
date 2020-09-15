# IBM-FS-Interview

CIO FullStack Role

## Building and running in production

To run in production (this will also create the production build):

```sh
npm start
```

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm run dev
```

To create a development build:

```sh
npm run build-dev
```

## Docker Commands

To build/update the image:

```sh
docker build -t [docker-username]/[app-name]:[version] .
```

To run the docker image:

```sh
docker run -p 3000:3000 -d --name ibm-todo-app dkayzee/ibm-todo-app:1.0
```

To stop the docker image:

```sh
docker stop ibm-todo-app
```

To delete the docker image:

```sh
docker rm [--force] ibm-todo-app
```

## Testing

To run unit tests:

```sh
npm test
```

## Developer's Notes

The application is running on `Express/Node` to serve the `React` application all on a single `Docker` container.

For development, there is a package, `lint-staged`, that runs the `Jest` test suite and `eslint` for all staged items prior to a `git commit`.

Instead of using `create-react-app`, this application is bundled and compiled with `babel` and `webpack` to allow more flexibility and efficiency.
