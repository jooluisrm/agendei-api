import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

const router = Router();

// Doctors
router.get("/doctors", controllerDoctor.Listar);
router.post("/doctors", controllerDoctor.Inserir);

// Users


// Reservas


// Services

export default router;