import pkg from '@jest/globals';
import  { app } from '../api/app'
const {expect, test} = pkg;

const requestest = require('supertest');
const assert = require('assert');
const express = require('express');

const appMocked = app;

/*beforeEach(() => {
    app.init();
});

afterEach(() => {
    app.stop;
});*/
test('Get example user with status 200', async () =>{
    await requestest(appMocked)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(200)
})



test('Get mocked users list expects 200 status and object type', async ()=>{
    requestest(appMocked)
                .get('/users')
                .expect(200)
                .then(result=>{
                    expect(result && result.body && typeof result.body === 'object')
                })
        });


test('Get users list ', async () => {

    let result;
    result = requestest(appMocked).get("/users");
    console.log(result.toString())
    expect(result.body).toEqual([])
});




test('Get user login', async ()=> {
});

test('Get user id', async ()=> {
});

test('Get user type', async ()=> {
});

test('Get user site admin status ', async ()=> {
});

test('Get user events ', async ()=> {
});