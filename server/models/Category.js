const Categories = require('../infraestructure/tables/Category');
const Products = require('../infraestructure/tables/Product');

class Category {
    create(category, res){
        Categories.create(category)
            .then(() => {
                res.status(201).json(category);
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    };

    find(id, res){
        Categories.findOne({
            where: {
                id: id
            }
        })
        .then(category => {
            if(category){
                Products.findAll({
                    where: {
                        CategoryId: category.id
                    }
                }).then(products => {
                    const categoryFound = {category: category, products: products}
                    res.status(200).json(categoryFound);
                }).catch(error => {
                    res.status(400).json(error);
                });
            } else {
                res.status(404).send("categoria não foi encontrada");
            }
        })
        .catch(error => {
            res.status(404).json(error);
        });
    };

    list(res){
        Categories.findAll()
            .then(categories => {
                res.status(200).json(categories);
            })
            .catch(error => {
                res.status(404).json(error);
            });
    };

    update(id, values, res){
        Categories.update(values, {
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).json(values);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    delete(id, res){
        Categories.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send("Category deleted");
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    };
};

module.exports = new Category;