import App from '@/app';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ScenarioRoute from '@routes/scenario.route';

validateEnv();

const app = new App([new UsersRoute(), new ScenarioRoute()]);

app.listen();
