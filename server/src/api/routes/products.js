const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (request, response, next) => {
    response.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productId', (request, response, next) => {
    const id = request.params.productId;
    if (id === '420') {
        response.status(200).json({
            message: 'I see what you did there',
            id: id
        });
    } else {
        response.status(200).json({
            message: 'ID passed'
        });
    }
});

router.patch('/:productId', (request, response, next) => {
    response.status(200).json({
        message: 'Updated product'
    });
});

router.delete('/:productId', (request, response, next) => {
    response.status(200).json({
        message: 'Deleted product'
    });
});

module.exports = router;