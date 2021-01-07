const Order = require("../models/Order");

module.exports = (app) => {
  app.post("/orders", (req, res) => {
    const order = req.body;
    Order.create(order, res);
  });

  app.get("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Order.find(id, res);
  });

  app.get("/orders-await", (req, res) => {
    Order.findAwaitOrders(res);
	});
	
	app.get("/orders-confirmed", (req, res) => {
    Order.findConfirmedOrders(res);
  });

	app.get("/orders-all", (req, res) => {
    Order.list(res);
  });

  app.get("/orders-canceled", (req, res) => {
    Order.findCanceledOrders(res);
  });

  app.patch("/ordersUpdate/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;
    Order.update(id, values, res);
  });

  app.delete("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Order.delete(id, res);
  });
};
