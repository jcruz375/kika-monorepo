const Products = require('../infraestructure/tables/Product');

class Product {
    create(product, res) {
        Products.create(product)
            .then(() => {
                res.status(201).json(product)
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    };

    find(id, res) {
        Products.findOne({
            where: {
                id: id
            }
        })
            .then(product => {
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).send('Produto não encontrado!')
                }
            })
            .catch(error => {
                res.status(404).json(error);
            });
    };

    list(res) {
        Products.findAll()
            .then(products => {
                res.status(200).json(products);
            })
            .catch(error => {
                res.status(404).json(error);
            });
    };

    listProductCategory(categoryId, res) {
        Products.findAll({
            where: {
                CategoryId: categoryId
            }
        })
            .then(products => {
                res.status(200).json(products);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    }

    update(id, values, res) {
        Products.update(values, {
            where: {
                id: id
            }
        })
            .then((product) => {
                res.status(200).json(values);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    delete(id, res) {
        Products.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send('Product deleted');
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };
};

module.exports = new Product;