import express from 'express'
import ShopController from '../controllers/shopControllers.js';
const router =express.Router();


//creating riutes
router.get('/', ShopController.getAllShop)
router.post('/', ShopController.createShop)
router.get('/:id', ShopController.getSingleShopId)
router.put('/:id', ShopController.updateShopById)
router.delete('/:id', ShopController.deleteShop)
router.patch('/:id', ShopController.partialUpdateShop)


export default router
