const Promos = require('../infraestructure/tables/Promo');

class Promo {
    create(promo, res){
        Promos.create(promo)
            .then(()=> {
                res.status(201).json(promo)
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    };
    
    find(id, res){
        Promos.findAll({
            where: {
                id: id
            }
        })
            .then((promos) => {
                res.status(200).json(promos);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    list(res){
        Promos.findAll()
            .then((promos) => {
                res.status(200).json(promos);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    update(id, values, res){
        Promos.update(values, {
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
        Promos.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send('Combo deleted');
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };
};


module.exports = new Promo;