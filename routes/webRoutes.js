const webController = require("../controllers/webController");

module.exports = function(app) {
  app.get("/", webController.home);

  app.get("/products", webController.products);
  app.get("/product/:id", webController.product);
  app.get("/scrape", webController.scrape);

  app.post("/comment/:id", webController.addComment);
  app.delete("/comment/:id", webController.deleteComment);
  app.get("*", function(req, res) {
    res.render("404");
  });
};
