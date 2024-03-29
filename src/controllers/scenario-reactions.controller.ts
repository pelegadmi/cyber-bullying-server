import ScenarioService from '@services/scenarios.service';
import UsersService from '@services/users.service';
import { NextFunction, Request, Response } from 'express';
import { Scenario } from '@interfaces/scenario.interface';
import { User } from '@interfaces/users.interface';
import { ScenarioReactionsDto } from '@dtos/scenario-reactions.dto';

class ScenarioReactionsController {
  public scenarioService = new ScenarioService();
  public usersService = new UsersService();

  public getScenarioReactions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsers: User[] = await this.usersService.findAllUser();
      const scenarioId = req.params.id;

      const scenarioReaction: ScenarioReactionsDto = await this.toScenarioReaction(scenarioId, allUsers);

      res.status(200).json({ data: scenarioReaction, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public getScenariosReactions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarios: Scenario[] = await this.scenarioService.findAllScenarios();
      const allUsers: User[] = await this.usersService.findAllUser();

      const scenariosReactions = new Array<ScenarioReactionsDto>();
      for (const scenario of scenarios) {
        const scenarioId = scenario._id.toString();
        const scenarioReaction: ScenarioReactionsDto = await this.toScenarioReaction(scenarioId, allUsers);
        scenariosReactions.push(scenarioReaction);
      }

      res.status(200).json({ data: scenariosReactions, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  private toScenarioReaction = async (scenarioId, allUsers) => {
    try {
      const scenario: Scenario = await this.scenarioService.findScenarioById(scenarioId);
      const participants: User[] = allUsers.filter(user => user.scenario_id == scenarioId);

      return { scenario: scenario, participants: participants };
    } catch (error) {
      throw error;
    }
  };
}

export default ScenarioReactionsController;
