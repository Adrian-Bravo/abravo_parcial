import { Request, Response} from "express";
import { Equipo } from '../models/equipo';

export class EquipoController {

    public async getEquipo(req: Request, res: Response){

        try {
            const equipos = await Equipo.findAll()
            if(!equipos){
                res.status(400).json({msg: 'Mantenimiento invalido'})
            }

            return res.status(200).json(equipos)
        } catch (error) {
            res.status(500).json({msg: 'Error interno'});
        }

    }
}