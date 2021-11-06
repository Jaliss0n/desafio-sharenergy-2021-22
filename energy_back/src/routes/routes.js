const express = require('express');
const clientes = require ('../controllers/clientes.js');

const router = express.Router();


// rotas para Cliente 
router.post('/cliente', clientes.Insert);
router.get('/cliente', clientes.SelectAll);
router.get('/cliente/:numeroCliente', clientes.SelectDetail);
router.put('/cliente/:numeroCliente', clientes.Update);
router.delete('/cliente/:numeroCliente', clientes.Delete);


module.exports = router;