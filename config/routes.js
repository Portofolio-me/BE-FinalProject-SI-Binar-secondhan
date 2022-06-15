const express = require("express");
// const controllers = require("../app/controllers");
const apiRouter = express.Router();

//API

//get product list
apiRouter.get("/api/v1/products",);

//get filtered product list
apiRouter.get(
  "/api/v1/products/filter/:category",
);

//get offered product list
apiRouter.get(
  "/api/v1/products/offered/:id",
);

//get transaction list
apiRouter.get(
  "/api/v1/products/transaction/:id",
);

//login
apiRouter.post("/api/v1/login",);

//register
apiRouter.post("/api/v1/register",);

//login or register using Google account
apiRouter.post("/api/v1/auth/google",);

//authenticate user
apiRouter.get("/api/v1/whoami",);

//logout
apiRouter.get("/api/v1/logout",);

//add product
apiRouter.post("/api/v1/products/add",);

//update product description
apiRouter.post("/api/v1/items/update/:id",);

//update user profile
apiRouter.post("/api/v1/profile/update/:id",);

//route not found
apiRouter.use();
apiRouter.use();

module.exports = apiRouter;