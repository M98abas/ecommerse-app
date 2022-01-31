import notFound from "../middleware/notFound";
import cors from "cors";
import express from "express";
import productsRoute from "../routes/activties/products";
import categoriesRoute from "../routes/activties/categories";
import adminRoute from "../routes/web/admin";
import customersRoute from "../routes/web/customers";
import ordersRoute from "../routes/activties/orders";
import * as cors from "cors";
const route = express.Router();
const app = express();

app.use(cors());
app.use(express.json());


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
