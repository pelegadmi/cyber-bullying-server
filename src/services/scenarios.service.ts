import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { Scenario } from '@interfaces/scenario.interface';
import scenarioModel from '@models/scenario.model';
import { CreateScenarioDto } from '@dtos/scenario.dto';
import { ScenarioMessage } from '@interfaces/scenario-message.interface';

class ScenarioService {
  public scenarios = scenarioModel;

  public async findAllScenarios(): Promise<Scenario[]> {
    return this.scenarios.find();
  }

  public async findScenarioById(scenarioId: string): Promise<Scenario> {
    if (isEmpty(scenarioId)) throw new HttpException(400, 'Scenario id is empty');

    const findScenario: Scenario = await this.scenarios.findOne({ _id: scenarioId });
    if (!findScenario) throw new HttpException(409, "Scenario doesn't exist");

    return findScenario;
  }

  public async createScenario(createScenarioDto: CreateScenarioDto): Promise<Scenario> {
    if (isEmpty(createScenarioDto)) throw new HttpException(400, 'Scenario Data is empty');

    return await this.scenarios.create({
      ...createScenarioDto,
    });
  }

  public async updateScenario(scenarioId: string, createScenarioDto: CreateScenarioDto): Promise<Scenario> {
    if (isEmpty(createScenarioDto)) throw new HttpException(400, 'createScenarioDto is empty');

    const updateUserById: Scenario = await this.scenarios.findByIdAndUpdate(scenarioId, {
      ...createScenarioDto,
    });

    if (!updateUserById) throw new HttpException(409, "Scenario doesn't exist");

    return updateUserById;
  }

  public async deleteScenario(scenarioId: string): Promise<Scenario> {
    const deleteScenarioById: Scenario = await this.scenarios.findByIdAndDelete(scenarioId);
    if (!deleteScenarioById) throw new HttpException(409, "User doesn't exist");

    return deleteScenarioById;
  }
}

export default ScenarioService;
