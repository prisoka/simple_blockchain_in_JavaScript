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

  // check the validty of the chain:
  isChainValid(){
    // loop over chain, skipping chain[0] because it's the source.
    for (let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i-1]

      // actually check the chaining:
      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false
      }

      if(currentBlock.previousHash !== previousBlock.hash){
        return false
      }
    }
    return true
  }
}

let prisCoin = new BlockChain()
prisCoin.addBlock(new Block(1, "03/08/2019", {amount : 15}))
prisCoin.addBlock(new Block(2, "03/09/2019", {amount : 7}))
prisCoin.addBlock(new Block(3, "03/10/2019", {amount : 90}))
// console.log(JSON.stringify(prisCoin, null, 4))

// logging isChainValid()
console.log("Is this blockchain valid? >>>", prisCoin.isChainValid()) // true

// now, trying to temper with the data:
prisCoin.chain[1].data = {amount: 100}
console.log("Is this blockchain valid? >>>", prisCoin.isChainValid()) // false

prisCoin.chain[1].hash = prisCoin.chain[1].calculateHash()
console.log("Is this blockchain valid? >>>", prisCoin.isChainValid()) // false


module.exports = Block, BlockChain
