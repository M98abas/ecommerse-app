import notFound from "../middleware/notFound";
import cors from "cors";
import express from "express";
import productsRoute from "../routes/activties/products";
import categoriesRoute from "../routes/activties/categories";
import adminRoute from "../routes/web/admin";
import customersRoute from "../routes/web/customers";
import ordersRoute from "../routes/activties/orders";

const route = express.Router();
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, 
     Content-Type, Accept");
    next();
});
// product route
route.use("/product", productsRoute);
// orders
route.use("/orders", ordersRoute);
// category
route.use("/category", categoriesRoute);
// admin
route.use("/admin", adminRoute);
// customers
route.use("/customer", customersRoute);
// not found route
app.use(notFound);

export default app;
