import ScenarioService from '@services/scenarios.service';
import { Scenario } from '@interfaces/scenario.interface';

class ScenarioIdRetriever {
  public scenarioService = new ScenarioService();
  static dict: { [id: string]: { scenario: Scenario; numberOfUse: number } } = {};

  public async retrieve() {
    await this.updateDictionary();

    return this.getMinimalUsedScenario();
  }

  private getMinimalUsedScenario() {
    const minimalUsedScenarioKey = this.calculateMinimalUsedScenario();
    ScenarioIdRetriever.dict[minimalUsedScenarioKey].numberOfUse++;
    return minimalUsedScenarioKey;
  }

  private calculateMinimalUsedScenario(): string {
    let minimalNumberOfUseKey: string = Object.keys(ScenarioIdRetriever.dict)[0];
    for (const key in ScenarioIdRetriever.dict) {
      if (ScenarioIdRetriever.dict[key].numberOfUse < ScenarioIdRetriever.dict[minimalNumberOfUseKey].numberOfUse) {
        minimalNumberOfUseKey = key;
      }
    }

    return minimalNumberOfUseKey;
  }

  private async updateDictionary() {
    const scenarios: Scenario[] = await this.scenarioService.findAllScenarios();

    for (const scenario of scenarios) {
      if (ScenarioIdRetriever.dict[scenario._id.toString()] == null) {
        ScenarioIdRetriever.dict[scenario._id.toString()] = { scenario: scenario, numberOfUse: 0 };
      }
    }
  }
}

export default ScenarioIdRetriever;
