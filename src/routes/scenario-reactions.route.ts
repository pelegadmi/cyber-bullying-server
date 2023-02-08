import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ScenarioReactionsController from '@controllers/scenario-reactions.controller';

class ScenarioReactionsRoute implements Routes {
  public path = '/scenario-reactions';
  public router = Router();
  public scenariosController = new ScenarioReactionsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.scenariosController.getScenariosReactions);
    this.router.get(`${this.path}/:id`, this.scenariosController.getScenarioReactions);
  }
}

export default ScenarioReactionsRoute;
