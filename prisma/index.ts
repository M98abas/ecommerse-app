import notFound from "../middleware/notFound";
const express = require("express");
import productsRoute from "../routes/activties/products";
import categoriesRoute from "../routes/activties/categories";
import adminRoute from "../routes/web/admin";
import customersRoute from "../routes/web/customers";
import ordersRoute from "../routes/activties/orders";
import { PrismaClient } from "@prisma/client";
import cors from "cors"; 
const prisma = new PrismaClient();

async function main() {
  const app = express();
  const port = process.env.PORT || 4000;
  app.use(cors());

  app.use(express.json());
  // product route
  app.use("/product", productsRoute);
  // orders
  app.use("/orders", ordersRoute);
  // category
  app.use("/category", categoriesRoute);
  // admin
  app.use("/admin", adminRoute);
  // customers
  app.use("/customer", customersRoute);
  // not found route
  app.use(notFound);

  app.listen(port, () =>
    console.log("REST API server ready at: http://localhost:3000/v1")
  );
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
