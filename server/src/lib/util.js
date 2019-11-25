'use strict'

const crypto = require('crypto')

const md5 = crypto.createHash('md5')

module.exports = {
    md5: str => md5.update(str).digest('hex')
}