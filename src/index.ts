const secp256k1 = require('secp256k1')
const puffsjsUtil = require('puffsjs-util')
import BN = require('bn.js')
import rlp = require('rlp')
Object.assign(exports, puffsjsUtil)

/**
 * [`BN`](https://github.com/indutny/bn.js)
 */
export { BN }

/**
 * [`rlp`](https://github.com/puffscoin/rlp)
 */
export { rlp }

/**
 * [`secp256k1`](https://github.com/cryptocoinjs/secp256k1-node/)
 */
export { secp256k1 }

/**
 * Constants
 */
export * from './constants'

/**
 * Public-key cryptography (secp256k1) and addresses
 */
export * from './account'

/**
 * Hash functions
 */
export * from './hash'

/**
 * ECDSA signature
 */
export * from './signature'

/**
 * Utilities for manipulating Buffers, byte arrays, etc.
 */
export * from './bytes'

/**
 * Function for definining properties on an object
 */
export * from './object'
