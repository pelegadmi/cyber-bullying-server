import { Router } from 'express';
import ScenariosController from '@controllers/scenarios.controller';
import { Routes } from '@interfaces/routes.interface';

class ScenariosRoute implements Routes {
  public path = '/scenarios';
  public router = Router();
  public scenariosController = new ScenariosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.scenariosController.getScenarios);
    this.router.get(`${this.path}/:id`, this.scenariosController.getScenarioById);
    this.router.post(`${this.path}`, this.scenariosController.createScenario);
    this.router.put(`${this.path}/:id`, this.scenariosController.updateScenario);
    this.router.delete(`${this.path}/:id`, this.scenariosController.deleteScenario);
  }
}

export default ScenariosRoute;
