import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ScenariosController from '@controllers/scenarios.controller';

class ScenarioRoute implements Routes {
  public path = '/scenarios';
  public router = Router();
  public usersController = new ScenariosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getScenarios);
    this.router.get(`${this.path}/:id`, this.usersController.getScenarioById);
    this.router.post(`${this.path}`, this.usersController.createScenario);
    this.router.put(`${this.path}/:id`, this.usersController.updateScenario);
    this.router.delete(`${this.path}/:id`, this.usersController.deleteScenario);
  }
}

export default ScenarioRoute;
