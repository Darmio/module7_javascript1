//import test from 'ava';
//import * as script from './js_practical_task.js';
var assert = require('chai').assert;

const taskFunc = require('./js_practical_task');
const secondsToDate = taskFunc.secondsToDate;
const toBase2Converter = taskFunc.toBase2Converter;
const substringOccurrencesCounter = taskFunc.substringOccurrencesCounter;
const repeatingLitters = taskFunc.repeatingLitters;
const redundant = taskFunc.redundant;
const towerHanoi = taskFunc.towerHanoi;
const matrixMultiplication = taskFunc.matrixMultiplication;
const gather = taskFunc.gather;

describe('secondsToDate function', () => {
it('Seconds to date test', () => {
    assert.deepEqual(secondsToDate(31536000), new Date('2021-06-01T00:00:00Z'));
    assert.deepEqual(secondsToDate(0), new Date('2020-06-01T00:00:00Z'));
    assert.deepEqual(secondsToDate(86400), new Date('2020-06-02T00:00:00Z'));
 });
}); 

describe('toBase2Converter function', () => {
it('toBase2Converter test', () => {
    assert.deepEqual(toBase2Converter(5), '101')
    assert.deepEqual(toBase2Converter(10), '1010')
    assert.deepEqual(toBase2Converter(0), '0')
});
});

describe('substringOccurrencesCounter function', () => {
it('substringOccurrencesCounter function', () => {
    assert.deepEqual(substringOccurrencesCounter('a', 'test it'), 0);
    assert.deepEqual(substringOccurrencesCounter('t', 'test it'), 3);
    assert.deepEqual(substringOccurrencesCounter('T', 'test it'), 3);
});
});

describe('repeatingLitters function', () => {
it('repeatingLitters function', () => {
    assert.deepEqual(repeatingLitters('Hello'), 'HHeelloo');
    assert.deepEqual(repeatingLitters('Hello world'), 'HHeello  wworrldd');
});

describe('redundant function', () => {
it('redundant function', () => {
});
    const f1 = redundant('apple');
    assert.deepEqual(f1(), 'apple');
    const f2 = redundant('pear');
    assert.deepEqual(f2(), 'pear');
    const f3 = redundant('');
    assert.deepEqual(f3(), '');
});
});

describe('towerHanoi function', () => {
it('towerHanoi function', () => {
    assert.deepEqual(towerHanoi(2), 3);
    assert.deepEqual(towerHanoi(5), 31);
    assert.deepEqual(towerHanoi(0), 0);
});
});

describe('matrixMultiplication function', () => {
it('matrixMultiplication function', () => {
    const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    assert.deepEqual(matrixMultiplication(matrix1, matrix2), [[30, 36, 42], [66, 81, 96], [102, 126, 150]]);
});
});

describe('gather function', () => {
it('gather function', () => {
    assert.deepEqual(gather("a")("b")("c").order(0)(1)(2).get(), "abc");
    assert.deepEqual(gather("a")("b")("c").order(2)(1)(0).get(), "cba");
    assert.deepEqual(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get(), "hello!");
});
}); 