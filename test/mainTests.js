"use strict"

const expect = require("chai").expect
const Block = require("../main")
const BlockChain = require("../main")

describe(("testing Block class"), function(){
  let myBlock

  beforeEach(function(){
    myBlock = new Block()
  })

  afterEach(function(){
    myBlock = undefined
  })

  // myBlock class tests:
  it(("myBlock should be an object"), function(){
    expect(myBlock).to.be.a("object")
  })

  // calculateHash() should be a function
  it(("calculateHash() should be a function"), function(){
    expect(myBlock.calculateHash).to.be.a("function")
  })
})

describe(("testing BlockChain class"), function(){
  let myBlockChain

  beforeEach(function(){
    myBlockChain = new BlockChain()
  })

  afterEach(function(){
    myBlockChain = undefined
  })

  // myBlock class tests:
  it(("myBlockChain should be an object"), function(){
    expect(myBlockChain).to.be.a("object")
  })
  
  it(("chainIsValid() should return true is chain is valid"), function(){
    expect(myBlockChain.chainIsValid()).to.equal(true)
  })

  it(("chainIsValid() should return false is chain is Invalid"), function(){
    expect(myBlockChain.chainIsValid()).to.equal(false)
  })
})
