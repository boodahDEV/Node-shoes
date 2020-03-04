const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
  res.status(200).render("index");
});

router.post("/register", async (req, res) => {
    console.log(req.body)
    // req.session.user_data = req.body
    req.flash('user', req.body) //mayormente usado para enviar mensajes de validaciones

    console.log('Recibido!')
    res.redirect('/profile')
});

router.get("/profile", async (req, res) => {
    // const user = req.session.user_data;  // de una forma mas rudementaria, el datoe es guardado atravex de una session
    const user = req.flash('user')[0]
    // delete req.session.user_data; 
    console.log(user)
    res.status(200).render("profile", {
        user
    });


});

module.exports = router;
