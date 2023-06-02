import pkg from '@jest/globals';
import  { app } from '../api/app'
const {expect, test} = pkg;

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const appMocked = app;

test('Get user events - user has no events', async ()=> {
});

test('Get user Name - user Name field is not part of user information ', async ()=> {
});