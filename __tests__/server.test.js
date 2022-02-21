'use strict'

const server=require('../server.js');

const supertest=require('supertest');//require fake server

const request =supertest(server.app);//server.app this is what we send it from the server.js using module.export&& fake running server to test my app 


/*make sure to edit ("scripts": {
    "test": "jest --coverage --verbose",)*/
describe('testing api server',()=>{
  //describe is a module to test somthing and we can create more than describe to test something else 

  //this (it) takes long time so we use (async + await) 
  //(it) its just a senario of the result that we will get 
  it('testing /',async()=>{
    const response=await request.get('/');
    expect(response.text).toEqual('home route');//
  })
})