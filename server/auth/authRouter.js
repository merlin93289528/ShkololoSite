const Router = require('express')
const router = new Router()
const controller = require('../auth/authController')
const {check} = require('express-validator')
router.post('/registration',[
    check("username", "Ім'я користувача не може бути порожнім").notEmpty(),
    check("password" , "Пароль має складатися з 4 або більше символів").isLength({min:4})
] ,  controller.registration)
router.post('/login' ,controller.login)
router.get('/users', controller.getUsers)

module.exports = router