const Category = require('../models/Category');
const adminAuth = require("../middleware/adminAuth");

module.exports = app => {
    app.post('/categories', adminAuth, (req, res) => {
        const category = req.body;
        Category.create(category, res);
    });

    app.get('/categories/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Category.find(id, res)
    });

    app.get('/categories/', (req, res) => { 
        Category.list(res)
    });

    app.patch('/categories/:id', adminAuth, (req, res) => {
        const values = req.body;
        const id = parseInt(req.params.id);
        Category.update(id, values, res);
    });

    app.delete('/categories/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        Category.delete(id, res);
    });
};