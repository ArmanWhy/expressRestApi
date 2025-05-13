import express from 'express'
import ShopController from '../controllers/shopControllers.js';
const router =express.Router();


//creating riutes
router.get('/', ShopController.getAllShop)  //Working fine and tested
router.post('/', ShopController.createShop)  //Working fine and tested
router.get('/:id', ShopController.getSingleShopId)  //Working fine and tested
router.put('/:id', ShopController.updateShopById)   //Working fine and tested
router.delete('/:id', ShopController.deleteShop)    //Working fine and tested
router.patch('/:id', ShopController.partialUpdateShop) //Working fine and tested


export default router
