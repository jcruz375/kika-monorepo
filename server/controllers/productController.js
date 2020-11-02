const Product = require("../models/Product");
const adminAuth = require("../middleware/adminAuth");

module.exports = (app) => {
  app.post("/product", adminAuth, (req, res) => {
    const product = req.body;
    Product.create(product, res);
  });

  app.get("/product", (req, res) => {
    Product.list(res);
  });

  app.get("/product/category/:categoryId", (req, res) => {
    const categoryId = parseInt(req.params.categoryId);
    Product.listProductCategory(categoryId, res);
  });

  app.get("/product/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Product.find(id, res);
  });

  app.patch("/product/:id", adminAuth, (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    Product.update(id, values, res);
  });

  app.delete("/product/:id", adminAuth, (req, res) => {
    const id = parseInt(req.params.id);
    Product.delete(id, res);
  });
};
