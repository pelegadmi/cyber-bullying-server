import App from '@/app';
import UsersRoute from '@routes/users.route';
// import ScenariosRoute from '@routes/scenarios.route';
import IndexRoute from '@routes/index.route';
import AuthRoute from '@routes/auth.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute() /*, new ScenariosRoute()*/, new AuthRoute()]);

app.listen();
