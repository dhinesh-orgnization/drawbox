# Drawbox

[![Build Status](https://travis-ci.com/dhinesh-orgnization/drawbox.svg?branch=master)](https://travis-ci.com/dhinesh-orgnization/drawbox)
[![Dependency Status](https://david-dm.org/dhinesh-orgnization/drawbox.svg?style=flat-square)](https://david-dm.org/dhinesh-orgnization/drawbox)
[![Coverage Status](https://coveralls.io/repos/github/dhinesh-orgnization/drawbox/badge.svg?branch=master)](https://coveralls.io/github/dhinesh-orgnization/drawbox?branch=master)

Library to generate infinite recursive shape.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Samples](#samples)
  - [Sample 1: (Width: 20, Height:40, padding: 6)](#sample-1-width-20-Height40-padding-6)
  - [Sample 2: (Width: 60, Height:60, padding: 10)](#sample-2-width-60-Height60-padding-10)
  - [Sample 3: (Width: 80, Height:100, padding: 20)](#sample-3-width-80-Height100-padding-20)
- [Methods Exposed](#methods-exposed)
  - [.draw(width, height, padding)](#drawwidth-height-padding)
    - [Notation Represenations](#notation-represenations)
    - [Validations](#validations)
    - [Sample Return Value](#sample-return-value)
  - [.print(2DArray)](#print2DArray)
    - [Sample Output](#sample-output)
- [References](#references)


## About

Once upon a time, King Hatshepsut decided to build a garden in his palace, and so he summoned his best engineer to design a magical shape that impress his people at his time and for years to come. I created this library to generate infinite recursive shape to give overall idea about garden design.

## Installation
- Clone the repo.
- Run `$ npm install`
- To run test `$ npm run test`

## Usage
```javascript
const { draw, print } = require('./lib');

const pixelArray = draw(60, 20, 4);

print(pixelArray);
```

## Samples

Here is some generated output samples

### Sample 1: (Width: 20, Height:40, padding: 6)
![](https://github.com/dhinesh-orgnization/drawbox/blob/master/doc/20-40-6.png)

### Sample 2: (Width: 60, Height:60, padding: 10)
![](https://github.com/dhinesh-orgnization/drawbox/blob/master/doc/60-60-10.png)

### Sample 3: (Width: 80, Height:100, padding: 20)
![](https://github.com/dhinesh-orgnization/drawbox/blob/master/doc/80-100-20.png)

## Methods Exposed

Two methods (`draw`, `print`) are exposed as part of this library.

### .draw(width, height, padding)

Generate 2D array with 0,1,2 notations which represents infinate shape.

#### Notation Represenations

- `0` means empty space (` `)
- `1` means dash symbol (`-`)
- `2` means pipe symbol (`|`)

#### Validations
- `width` should be even and >=20
- `height` should be even and >=20
- `padding` should be even and >=4

#### Sample Return Value
```javascript
11111111111111111111
20000000000000000002
20000000000000000002
20000000000000000002
20001111111111110002
20002000000000020002
20002000000000020002
20002000000000020002
20002000111100020002
20002000200200020002
20002000200200020002
20002000111100020002
20002000000000020002
20002000000000020002
20002000000000020002
20001111111111110002
20000000000000000002
20000000000000000002
20000000000000000002
11111111111111111111
```

### .print(2DArray)

Replaces the `0`, `1`, `2` notations with respective values ` `, `-`, `|` and print the generated infinate shape.

#### Sample Output
```javascript
--------------------
|                  |
|                  |
|                  |
|   ------------   |
|   |          |   |
|   |          |   |
|   |          |   |
|   |   ----   |   |
|   |   |  |   |   |
|   |   |  |   |   |
|   |   ----   |   |
|   |          |   |
|   |          |   |
|   |          |   |
|   ------------   |
|                  |
|                  |
|                  |
--------------------
```

## References

- [Question](https://infinite-peaceful-stream.herokuapp.com/)
