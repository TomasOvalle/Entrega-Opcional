import { Router } from "express";
import productsRouter from "./products.view.js";
import usersRouter from "./profile.view.js";
import productsDetailRouter from "./details.view.js";
import registerRouter from "./register.view.js";

const viewsRouter = Router();

viewsRouter.use("/products", productsRouter);
viewsRouter.use("/products", productsDetailRouter);
viewsRouter.use("/users", usersRouter);
viewsRouter.use("/register", registerRouter);
viewsRouter.get("/", (req, res , next) => {
    try {
        return res.render("index", { title: "HOME" });
    } catch (error) {
        return next(error);
    }
});

viewsRouter.get("/chat", async (req, res , next) => {
    try {
        return res.render("chat", { title: "CHAT" })
    } catch (error) {
        return next(error)
    }
})

export default viewsRouter;