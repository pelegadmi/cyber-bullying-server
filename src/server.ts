import App from './app';
import UsersRoute from '@routes/users.route';
import ScenariosRoute from '@routes/scenarios.route';
import validateEnv from '@utils/validateEnv';
import AdminRoute from '@routes/admin.route';

validateEnv();

const app = new App([new UsersRoute(), new ScenariosRoute(), new AdminRoute()]);

app.listen();
