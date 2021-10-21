const express= require('express')

const router = express.Router();


router.get('/:id', (req,res)=>{
  const {id} = req.params;

  res.json({
    id,
    name: 'marco',
    account: 'tonymejial'
  })
})
router.get('/:peopleid/pedidos/:pedidosid', (req,res)=>{
  const {peopleid, pedidosid} = req.params;

  res.json({
    peopleid,
    pedidosid

  })

});

module.exports = router;
