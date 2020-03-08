const Product = require ('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then((rows,fieldData) => {
    res.render('shop', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: (rows == null) ? rows.length > 0 : false,
      activeShop: true,
      productCSS: true
    });
  }).catch((err) => console.log(err));
};
