const Product = require("../models/Product.js");
const Comment = require("../models/Comment.js");
const mongoose = require("mongoose");
const scrapper = require("./scrapper");

module.exports = {
  home: (req, res) => {
    // Get all products
    Product.find({}, (err, data) => {
      let hbsObjects = {
        products: data
      };
      res.render("index", hbsObjects);
    });
  },
  scrape: (req, res) => {
    scrapper().then(data => {
      Product.create(data).then(res.redirect("/"));
    });
  },
  addComment: (req, res) => {
    let _id = req.body.id;
    let body = req.body.body;
    let comment = Comment.create({ body: body });
    comment.then(comment => {
      Product.findByIdAndUpdate(
        { _id },
        { $push: { comment: comment._id } },
        { new: true }
      )
        .populate("comment")
        .then(data => {
          let hbsObjects = {
            product: data
          };
          res.render("product", hbsObjects);
        });
    });

    // Add comment to db
  },
  deleteComment: (req, res) => {
    let _id = req.body.id;
    Comment.findByIdAndDelete({ _id }).then(
      Product.findOneAndUpdate({ comment: _id }, { $pull: { comment: _id } })
        .populate("comment")
        .then(data => {
          let hbsObjects = {
            product: data
          };
          res.render("product", hbsObjects);
        })
    );
  },
  products: (req, res) => {
    Product.find({}).then(data => {
      res.json(data);
    });
  },
  product: (req, res) => {
    let _id = req.params.id;
    Product.findById({ _id })
      .populate("comment")
      .then(data => {
        let hbsObjects = {
          product: data
        };
        res.render("product", hbsObjects);
      });
  }
};
