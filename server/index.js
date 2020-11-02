const customExpress = require('./config/customExpress');
const connection = require('./infraestructure/connection');

//tables
const Product = require('./infraestructure/tables/Product');
const Orders = require('./infraestructure/tables/Orders');
const Category = require('./infraestructure/tables/Category');
const Promo = require('./infraestructure/tables/Promo');
const Payments = require('./infraestructure/tables/Payments');
const Admins = require('./infraestructure/tables/Admins')

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão com banco feita com sucesso');
        const app = customExpress();

        app.listen(4000, () => console.log('Servidor rodando na porta 4000'));

    })
    .catch((error) => {
        console.log(error);
    });
