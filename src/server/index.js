const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/getProduct', (req, res) => {
    res.send([
        {
            "id": 1,
            "product": "Milk chocolate Mint",
            "description": "",
            "price": 15,
            "count": 1,
            "image": "/static/images/img1.jpg"
        },
        {
            "id": 2,
            "product": "Chocolate Truffles",
            "description": "",
            "price": 30,
            "count": 1,
            "image": "/static/images/img2.jpg"
        },
        {
            "id": 3,
            "product": "Reduced sugar Malt balls",
            "description": "",
            "price": 10,
            "count": 1,
            "image": "/static/images/img3.jpg"
        },
        {
            "id": 4,
            "product": "Caramel Popcorn varieties",
            "description": "",
            "price": 15,
            "count": 1,
            "image": "/static/images/img4.jpg"
        },
        {
            "id": 5,
            "product": "Peanut Butter Buckeyes",
            "description": "",
            "price": 15,
            "count": 1,
            "image": "/static/images/img5.jpg"
        },
        {
            "id": 6,
            "product": "Signature Chocolate",
            "description": "",
            "price": 20,
            "count": 1,
            "image": "/static/images/img6.jpg"
        },
        {
            "id": 7,
            "product": "Gift boxes",
            "description": "",
            "price": 30,
            "count": 1,
            "image": "/static/images/img7.jpg"
        },
        {
            "id": 8,
            "product": "Dark Chocolate Sea",
            "description": "Coblentz Signature Selection Bite-Sized Treats (individually wrapped)",
            "price": 150,
            "count": 1,
            "image": "/static/images/img8.jpg"
        }
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })