const express = require('express');

const router = express.Router();



router.get('/:categoriesid/products/:productsid', (req, res)=>{
  const {categoriesid, productsid} = req.params;
  res.json({
    productsid,
    categoriesid
  })
})

module.exports = router;
