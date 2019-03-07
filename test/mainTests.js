"use strict"

const expect = require("chai").expect
const MyBlock = require("../main")

describe(("testing my simple blockchain in JS"), function(){
  // myBlock class tests:
  it(("myBlock should be an object"), function(){
    let myBlock = new MyBlock()
    expect(myBlock).to.be.a("object")
  })

  // calculateHash() should be a function
})
