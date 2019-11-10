'use strict';

const data = require('./data.json')
const { draw, print } = require('../lib');
const { expect } = require('chai');
const sinon = require('sinon');

describe('Drawbox', () => {

  describe('draw method', () => {

    describe('From data file', () => {

      data.forEach(({ input, pixelArrayJson })=> {
      
        it(`Draw test for the input: ${input}`, () => {
          const [ width, height, padding ] = input.split(',');
          const pixelArray = draw(parseInt(width), parseInt(height), parseInt(padding));
    
          expect(pixelArrayJson).eql(JSON.stringify(pixelArray));
        });
    
      });

    });
    
    describe('Validation', () => {
  
      it('Should throw exception when invalid width was supplied', () => {
        expect(() => draw(10, 20, 4)).to.throw('width should be even and greater or equal to 20, but 10 was given');
      });
  
      it('Should throw exception when odd width was supplied', () => {
        expect(() => draw(5, 20, 4)).to.throw('width should be even and greater or equal to 20, but 5 was given');
      });
  
      it('Should throw exception when invalid height was supplied', () => {
        expect(() => draw(20, 10, 4)).to.throw('height should be even and greater or equal to 20, but 10 was given');
      });
  
      it('Should throw exception when odd height was supplied', () => {
        expect(() => draw(20, 5, 4)).to.throw('height should be even and greater or equal to 20, but 5 was given');
      });
  
      it('Should throw exception when invalid padding was supplied', () => {
        expect(() => draw(20, 20, 2)).to.throw('padding should be even and greater or equal to 4, but 2 was given');
      });
  
      it('Should throw exception when odd padding was supplied', () => {
        expect(() => draw(20, 20, 9)).to.throw('padding should be even and greater or equal to 4, but 9 was given');
      });
  
    });
  
  });

  describe('print method', () => {

    beforeEach(function() {
      sinon.spy(console, "log");
    });

    afterEach(() => {
      console.log.restore();
    })

    it('Validate print method', () => {
      const expectedBox = [
        '--------------------',
        '|                  |',
        '|                  |',
        '|                  |',
        '|   ------------   |',
        '|   |          |   |',
        '|   |          |   |',
        '|   |          |   |',
        '|   |   ----   |   |',
        '|   |   |  |   |   |',
        '|   |   |  |   |   |',
        '|   |   ----   |   |',
        '|   |          |   |',
        '|   |          |   |',
        '|   |          |   |',
        '|   ------------   |',
        '|                  |',
        '|                  |',
        '|                  |',
        '--------------------'
      ];
      print(draw(20, 20, 6));

      expectedBox.forEach((row, index) => {
        expect(console.log.getCall(index).args[0]).equal(row);
      });
    });

  });

});
