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
      const scenarioId = req.params.id;

      const scenarioReaction = this.toScenarioReaction(scenarioId);

      res.status(200).json({ data: scenarioReaction, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getScenariosReactions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarios: Scenario[] = await this.scenarioService.findAllScenarios();
      const scenariosReactions = new Array<ScenarioReactionsDto>();
      for (const scenario of scenarios) {
        const scenarioReaction = await this.toScenarioReaction(scenario._id);
        scenariosReactions.push(scenarioReaction);
      }

      res.status(200).json({ data: scenariosReactions, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  private toScenarioReaction = async scenarioId => {
    const scenario: Scenario = await this.scenarioService.findScenarioById(scenarioId);
    const allUsers: User[] = await this.usersService.findAllUser();

    const participants: User[] = allUsers.filter(user => user.scenario_id == scenarioId);

    const scenarioReaction: ScenarioReactionsDto = { scenario: scenario, participants: participants };
    return scenarioReaction;
  };
}

export default ScenarioReactionsController;
