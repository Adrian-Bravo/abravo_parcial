import { Application } from "express";
import { MantenimientoController } from "../controller/Mantenimiento.controller";

export class MantenimientoRouters {
    public mantenimientoController: MantenimientoController = new MantenimientoController(); 

    public routes(app: Application): void {
        app.route('/mantenimientos').get(this.mantenimientoController.getMantenimiento);
    }
}