const express = require('express')
const Errors = require('./Errors')

module.exports = (app, passport) => {
  app.post('/api/sign-up', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        if (!req.body.email) {
          return next(Errors.missingEmail(info))
        }
        if (!req.body.password) {
          return next(Errors.missingPassword(info))
        }
        return next(Errors.missingCredentials(info))
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          message: 'Sign Up Successful',
          data: user
        })
      })
    })(req, res, next)
  })

  app.get('/api/get_user', (req, res) => {
    res.status(200)
      .json({
        message: req.user ? 'User Session Exists' : 'User Session Does Not Exists',
        data: req.user
      })
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    return res.status(200)
      .json({
        message: 'Logout Successfull'
      })
  })
}
