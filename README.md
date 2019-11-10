Drawbox
=======

[![Build Status](https://travis-ci.com/dhinesh-orgnization/drawbox.svg?branch=master)](https://travis-ci.com/dhinesh-orgnization/drawbox)
[![Dependency Status](https://david-dm.org/dhinesh-orgnization/drawbox.svg?style=flat-square)](https://david-dm.org/dhinesh-orgnization/drawbox)

Simple test project to recursive box shape.

### Installation
- Clone the repo.
- Run `$ npm install`
- To run test `$ npm run test`

### Sample code
```javascript
const { draw, print } = require('./lib');

const pixelArray = draw(60, 20, 4);

print(pixelArray);
```

### Sample output
#### Scenario 1: (Width: 20, Height:40, padding: 6)
![](https://github.com/dhineshpandiyan/drawbox/blob/master/doc/20-40-6.png)

#### Scenario 2: (Width: 60, Height:60, padding: 10)
![](https://github.com/dhineshpandiyan/drawbox/blob/master/doc/60-60-10.png)

