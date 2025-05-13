import shopModel from '../models/shop.js'

class ShopController {
    static getAllShop = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const total = await shopModel.countDocuments();
        const shops = await shopModel.find().skip(skip).limit(limit);

        res.json({
            data: shops,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}

    static createShop =async (req, res) =>{
        try {
            const {name, shop_address, product_category, product_price} = req.body
            const  result = new shopModel({
                name : name,
                shop_address : shop_address,
                product_category: product_category,
                product_price: product_price
            })
            await result.save()
            // console.log(result)
            res.status(201).json({message: 'Shop Created'})
            // res.send('Shop Created')
            
        } catch (error) {
            
        }
    };
    static getSingleShopId = async (req, res) =>{
        try {
            const id = req.params.id
            console.log(id)
            const result = await shopModel.findById(id)
            if(!result){
                return res.status(404).json({error: 'Shop Not Found with this id'})
            }
            res.json(result)
        } catch (error) {
            res.status(400).json({error: "Invalid shop Id/Not Found"})
        }
        res.send('Get Single Shop by id')
    }
    static updateShopById = async (req, res) =>{
        try {
            const updateData = req.body
            const id = req.params.id
            const result = await shopModel.findByIdAndUpdate(id, updateData)
            if(!result){
                return res.status(404).json({message: 'shop not exist or already deleated...'})
            }
            res.status(200).send('Shop Updated', result)
        } catch (error) {
            console.log(error.message)
        }
        
    }
    static deleteShop =async (req, res) =>{
        try {
            const result = await shopModel.findByIdAndDelete(req.params.id)
            if(!result){
                return res.status(404).json({message: 'shop not exist or already deleated...'})
            }
            res.status(200).send('Shop Deleted', result)
        } catch (error) {
            console.log(error.message)
        }
        // res.send('Delete Shop by Id')
    }
    static partialUpdateShop = async (req, res) =>{
        try {
            const updateShop = await shopModel.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true , runvalidators: true }
            )
            if(!updateShop){
                return res.status(404).send('Shop Not Found')
            }
            res.send(updateShop)
        } catch (error) {
            console.log(error.message)
        }
        res.send('Updating Partially')
    }
}
export default ShopController;