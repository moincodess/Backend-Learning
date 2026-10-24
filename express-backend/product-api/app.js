const express = require('express')
const app = express()

app.use(express.json());

const products = [
    { id: 1, name: 'Table', price: 3500 },
    { id: 2, name: 'Chair', price: 1500 }
]

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id)

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    res.json(product);

})

app.post('/api/products/' , (req, res)=>{

    const { id, name, price } = req.body; //he informs that this thing will be included
    const newProduct = { id, name, price };

    products.push(newProduct);

     res.status(201).json({ 

        product: newProduct,
        success: true, 
        message: 'User created successfully' 
    });

})

app.put('/api/products/:id', (req, res)=>{

    const id = Number(req.params.id)
    const product = products.find(p => p.id === id)

    if(!product){
        return res.status(404).json({
            message : 'Product not found'
        })
    }

    const { name, price } = req.body;
    product.name = name;
    product.price = price;

    res.status(200).json({ 
        product: product,
        message : "Edited the product"
    });

})

app.delete("/api/products/:id", (req, res)=>{
    const id = Number(req.params.id)
    const product = products.find(p=>p.id === id);
    const startIndex = products.findIndex(p=>p.id === id);



    if(!product || startIndex === -1){
         return res.status(404).json({
            message : 'Product not found'
        })
    }

    products.splice(startIndex, 1);

    return res.status(200).json({

        message : "Product deletion successfully done!"
    })
})

app.listen(3000, () => {
    console.log('Running on port 3000');

})