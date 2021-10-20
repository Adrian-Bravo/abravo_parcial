import { Application } from "express";
import { EquipoController } from "../controller/Equipo.controller";

export class EquipoRouters {
    public equipoController: EquipoController = new EquipoController(); 

    public routes(app: Application): void {
        app.route('/equipos').get(this.equipoController.getEquipo);
    }
}