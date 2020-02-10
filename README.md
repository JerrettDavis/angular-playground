# Playground

## Description

I was looking for a way to delve into some of core Angular and RxJS concepts in a 
simple, straightforward, and real-world way. Unfortunately, it seems like many of the 
examples out on the web are great from a conceptual standpoint, but they can be cumbersome
to implement yourself.

This is my attempt to tackle as many of the concepts as possible, and hopefully end up
with a collection of little toys, test, experiments, and learning experiences.

## Installation

### Clone

Clone this repo to your local machine using: 

```shell script
git clone https://github.com/JerrettDavis/angular-playground.git
```

### Setup

If you haven't navigated to the project directory, run:

```shell script
cd angular-playground
```

From there, you'll need to install the node modules by running:

```shell script
npm install
```

## Running

To get started hacking away, in the root directory, simply run:

```shell script
ng serve
```

This will start up the development server at `http://localhost:4200`. The change-watcher
will pick up most changes, and provide you with live refreshes in the browser.

## Deployment

To deploy, from the root directory, run the following:

```shell script
ng build --prod
```

This will result in the project being built and placed in the `dist` directory in the project
root.

## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE.md)**
