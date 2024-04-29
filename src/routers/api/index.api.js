import { Router } from "express";
import cartsRouter from "./cart.router.api.js";
import usersRouter from "./user.api.js";
import productsRouter from "./products.api.js";


const apiRouter = Router();

apiRouter.use("/carts", cartsRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/products", productsRouter);

export default apiRouter;