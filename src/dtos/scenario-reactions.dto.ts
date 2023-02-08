import { Scenario } from '@interfaces/scenario.interface';
import { User } from '@interfaces/users.interface';

export class ScenarioReactionsDto {
  public scenario: Scenario;
  public participants: Array<User>;
}
