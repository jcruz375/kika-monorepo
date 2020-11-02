const Payments = require('../infraestructure/tables/Payments');

class Payment {
    create(payment, res){
        Payments.create(payment)
            .then(() => {
                res.status(201).json(payment);
            })
            .catch(eror => {
                res.status(400).json(eror);
            });
    };

    find(id, res){
        Payments.findOne({
            where: {
                id: id
            }
        })
            .then(payment => {
                if(payment){
                    res.status(200).json(payment);
                } else {
                    res.status(404).send('Nada encontrado por aqui!!!');
                }
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    list(res){
        Payments.findAll()
            .then(payments => {
                res.status(200).json(payments);
            })
            .catch(error => {
                res.status(400).json(error);
            });
    };

    update(id, values, res){
        Payments.update(values, {
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
        Payments.destroy({
            where: {
                id: id
            }
        })
            .then(() => {
                res.status(200).send('payment deleted!!');
            })
            .catch(error => {
                res.status(400).json(error);
            })
    }
};


module.exports = new Payment;