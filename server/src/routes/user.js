'use strict'

const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { md5 } = require('../lib/util')
const config = require('../config')
const Router = require('koa-router')
const { emptyResponse } = require('../lib/response')
const { AuthorizationError } = require('../lib/errors')

const router = new Router()

router.post('/users', async (ctx, next) => {
    const { username, kind, password } = ctx.request.body
    
    const user = new User({ _id: username, kind, password: md5(password) })

    await user.save()

    ctx.result = emptyResponse

    return next()
})

router.post('/auth', async (ctx, next) => {
    const { username, password } = ctx.request.body

    const result = await User.findOne({ _id: username, password: md5(password) })

    if (!result) {
        ctx.response.header['Authorization'] = 'Bearer ' + jwt.sign({ sub: result.username }, config.secret, { expiresIn: '1 hours' })
    } else throw new AuthorizationError('Authorization error')
    
    return next()
})

module.exports = router