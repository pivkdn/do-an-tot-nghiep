var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const engines = require("consolidate");
const paypal = require("paypal-rest-sdk");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const brandRouter = require('./routes/brands')
const newsRouter = require('./routes/news')
const walletRouter = require('./routes/wallets')
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders')
var app = express();

// view engine setup
app.engine("ejs", engines.ejs);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
      "AWJDwPbJQgEoSG2S7mubLMuqNPjZ28XcxkSsDGTkxc4fVDcdDQ5zFRgpF4xwqG9xCukZTXIIox089fRw",
  client_secret:
      "EG_aLlPXRrNl74c6JnDwZjZHl8syPmNs7w1iMq-dYn3CHrQg2ysK5-nlaV0AgAK77tAbXiIhZPe5Vcge"
});
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/paypal", (req, res) => {
  var create_payment_json = {
      intent: "sale",
      payer: {
          payment_method: "paypal"
      },
      redirect_urls: {
          return_url: "http://192.168.1.7:3000/success", // thay địa chỉ ip của máy để có thể sài paypal
          cancel_url: "http://192.168.1.7:3000/cancel" // thay địa chỉ ip của máy để có thể sài paypal
      },
      transactions: [
          {
              item_list: {
                  items: [
                      {
                          name: "item",
                          sku: "item",
                          price: "1.00",
                          currency: "USD",
                          quantity: 1
                      }
                  ]
              },
              amount: {
                  currency: "USD",
                  total: "1.00"
              },
              description: "This is the payment description."
          }
      ]
  };

  paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
          throw error;
      } else {
          console.log("Create Payment Response");
          console.log(payment);
          res.redirect(payment.links[1].href);
      }
  });
});

app.get("/success", (req, res) => {
  // res.send("Success");
  var PayerID = req.query.PayerID;
  var paymentId = req.query.paymentId;
  var execute_payment_json = {
      payer_id: PayerID,
      transactions: [
          {
              amount: {
                  currency: "USD",
                  total: "1.00"
              }
          }
      ]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function(
      error,
      payment
  ) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log("Get Payment Response");
          console.log(JSON.stringify(payment));
          res.render("success");
      }
  });
});

app.get("cancel", (req, res) => {
  res.render("cancel");
});
app.use('/users', usersRouter);
app.use('/brands',brandRouter);
app.use('/news',newsRouter);
app.use('/wallets',walletRouter)
app.use('/products',productRouter)
app.use('/orders',orderRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
