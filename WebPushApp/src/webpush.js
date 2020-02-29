const webpush = require('web-push')

webpush.setVapidDetails('mailtc:boodah21@protonmail.com', process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

module.exports = webpush;