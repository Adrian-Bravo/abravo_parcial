import { Request, Response} from "express";
import { Mantenimiento } from '../models/mantenimiento';

export class MantenimientoController {

    public async getMantenimiento(req: Request, res: Response){

        try {
            const mantenimientos = await Mantenimiento.findAll()
            if(!mantenimientos){
                res.status(400).json({msg: 'Mantenimiento invalido'})
            }

            return res.status(200).json(mantenimientos)
        } catch (error) {
            res.status(500).json({msg: 'Error interno'});
        }

    }
}