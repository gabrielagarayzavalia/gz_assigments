import pkg from '@jest/globals';
import  { app } from '../api/app'
const {test} = pkg;

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const appMocked = app;

test('Get example user fails returning 400', async ()=>{
   await request(appMocked)
        .get('/')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(400)
    })

test('Get user id not found returning 400', async ()=>{
    await request(appMocked)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '15')
        .expect(400)
})

test('Get user login not found returning 400 ', async ()=> {
});

test('Get user id not found returning 400 ', async ()=> {
});

test('Get user type is admin: user is not admin ', async ()=> {
});

test('Get user is site-admin: user is not admin ', async ()=> {
});