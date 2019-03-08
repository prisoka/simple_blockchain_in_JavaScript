const SHA256 = require("crypto-js/sha256")

class Block {
  constructor(index, timestamp, data, previousHash = ""){
    this.index = index,
    this.timestamp = timestamp,
    this.data  = data,
    this.previousHash = previousHash,
    this.hash = this.calculateHash()
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString()
  }
}

class BlockChain {
  constructor(){
    this.chain = [this.createOriginBlock()]
  }

  createOriginBlock(){
    return new Block(0, "03/07/2019", 'Origin block', "0")
  }

  // getLatestBlock() should return the last element in the chain
  getLatestBlock(){
    return this.chain[this.chain.length -1]
  }

  // should create a new Block
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}

module.exports = Block, BlockChain
