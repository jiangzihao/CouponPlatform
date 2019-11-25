'use strict'

const db = require('../lib/db').default
const { Schema } = require('mongoose')

const schema = new Schema({
    _id: String,
    kind: String,
    password: String
})

schema.set('toJSON', { versionKey: false })
schema.set('toObject', { versionKey: false })

module.exports = db.model('User', schema)