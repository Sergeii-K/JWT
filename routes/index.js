const express = require('express');
const authCtrl = require('../contr/auth');
const jws = require('jws');
const router = express.Router();


const user = {
  id: 20,
  profil: { name: 'Sergei' },
}

/* GET home page. */

router.get('/login', async (req, res, next) => {
  
const token = await authCtrl.CreateAccessT({ userId: user.id, name: user.profil.name });


res.json ({
  tokens: {
    access: token
  }
});   

const decode = jws.decode(token);
console.log(decode);

});

module.exports = router;
