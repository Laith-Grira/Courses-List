//the express router
const express = require('express');

//create the router variable
const router = express.Router();

//Item Model: bringing our item model
const Item = require('../../models/Item');



/*Now we create some routers */

//@route GET api/items
//@desc Get All Items
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

//@route Post api/items
//@desc create an item
//@access Public
router.post('/', (req, res) => {
    //we want to construct an object to insert into the database
    const newItem = new Item({
        name: req.body.name
    });

    //now we want to save this item in the database
    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Delete an item
//@access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ sucess: true })))
        .catch(err => res.status(404).json({ sucess: false }));
});


module.exports = router;