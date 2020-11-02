const Orders = require('../infraestructure/tables/Orders');

class Order {
    create(order, res) {
        Orders.create(order)
            .then((order) => {
                return res.status(201).json(order);
            })
            .catch(error => {
                res.status(400).send(error)
            });
    };

    find(id, res) {
        Orders.findOne({
            where: {
                id: id
            }
        })
            .then(order => {
                if (order) {
                    res.status(200).json(order);
                } else {
                    res.status(404).send('Pedido Não encontrado!');
                };
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    list(res) {
        Orders.findAll()
            .then(orders => {
                res.status(200).json(orders);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    update(id, values, res) {
        Orders.update(values, {
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).json(values);
            })
            .catch(error => {
                res.status(400).json(error);
            })
    };

    delete(id, res) {
        Orders.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send("Pedido deletado!!");
            })
            .catch(error => { 
                res.status(400).json(error);
            });
    };
};

module.exports = new Order;