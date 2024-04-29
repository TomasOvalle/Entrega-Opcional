import { Router } from "express";
import productsManager from "../../data/fs/ProductsManager.fs.js";

const productsDetailRouter = Router();

productsDetailRouter.get("/:pid", async (req, res, next) => {
    try {
        const { pid } = req.params;
        const details = await productsManager.readOne(pid);
        return res.render("details", { title: "Details" , details })
    } catch (error) {
        return next(error)
    }
})

export default productsDetailRouter;