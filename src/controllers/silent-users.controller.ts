import { NextFunction, Request, Response } from 'express';
import ScenarioService from '@services/scenarios.service';
import { UpdateUserDto } from '@dtos/users.dto';
import { Scenario } from '@interfaces/scenario.interface';
import { SilentUserDto } from "@dtos/silentUser.dto";

class SilentUsersController {
  public scenarioService = new ScenarioService();

  public getSilentUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarioId: string = req.params.id;
      const silentUsers: Array<string> = await this.scenarioService.getSilentUsers(scenarioId);
      console.log(silentUsers);
      res.status(200).json({ data: silentUsers, message: 'getSilentUsers' });
    } catch (error) {
      next(error);
    }
  };
  public addSilentUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scenarioId: string = req.params.id;
      const silentUser: SilentUserDto = req.body;

      const scenario: Scenario = await this.scenarioService.addSilentUsers(silentUser.nickname, scenarioId);
      console.log(scenario);
      res.status(200).json({ data: scenario, message: 'addSilentUsers' });
    } catch (error) {
      next(error);
    }
  };
}

export default SilentUsersController;
