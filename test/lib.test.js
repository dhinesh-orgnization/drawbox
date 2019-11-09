'use strict';

const data = require('./data.json')
const { draw } = require('../lib');
const { expect } = require('chai');

describe('Draw', () => {

  data.forEach(({ input, pixelArrayJson })=> {
    
    it(`Draw test for the input: ${input}`, () => {
      const [ width, height, padding ] = input.split(',');
      const pixelArray = draw(parseInt(width), parseInt(height), parseInt(padding));

      expect(pixelArrayJson).eql(JSON.stringify(pixelArray));
    });

  });

});
