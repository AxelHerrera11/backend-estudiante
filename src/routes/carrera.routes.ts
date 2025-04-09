import { Router } from "express";
import { getCarreras, getCarrera, createCarrera, updateCarrera, deleteCarrera} from "../controllers/carrera.controller";

const router = Router();


router.get('/', getCarreras);
router.get('/:id', getCarrera);
router.put('/', createCarrera);
router.post('/:id', updateCarrera);
router.delete('/:id', deleteCarrera);

export default router;
