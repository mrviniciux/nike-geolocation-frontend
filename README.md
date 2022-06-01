# Geolocation Frontend


## Requirements

* Node >= 16.14.2
* NPM or Yarn


## Production mode
Build all the assets and validate the files

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All the precompiled files will be generated under `.next` folder.

## Developer mode

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

There are two main lib's executing the tests: Jest and Cypress.

Jest is currently testing integration and unit tests and cypress is for end-to-end.


### End-to-end testing

Just trigger

```bash
npm run start
```

open a new terminal and run

```bash
npm run cypress:open
```

That should open the cypress assistant along a browser showing all the tests.

I recommend that approach than `cypress:run`

### Unit and integration testing

```bash
npm run test
```

## Main tecnologies

* Cypress
* Jest
* Sass
* Axios
* Babel
* NextJS
