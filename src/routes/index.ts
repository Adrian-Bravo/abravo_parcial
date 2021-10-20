import { MantenimientoRouters } from './mantenimiento';
import { EquipoRouters } from './equipo';


export class Routes {
    public mantenimientoRoutes: MantenimientoRouters = new MantenimientoRouters();
    public equipoRoutes: EquipoRouters = new EquipoRouters();
}