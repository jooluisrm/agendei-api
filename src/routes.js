import { Router } from "express";

const router = Router();

router.get("/doctors", (req, res) => {
    res.status(200).send("Aqui vamos listar os medicos");
});

export default router;