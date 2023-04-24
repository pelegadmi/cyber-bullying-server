import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import SilentUsersController from '@controllers/silent-users.controller';

class SilentUsersRoute implements Routes {
  public path = '/silent-users';
  public router = Router();
  public silentUsersController = new SilentUsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.silentUsersController.getSilentUsers);
    this.router.put(`${this.path}/:id`, this.silentUsersController.addSilentUser);
  }
}

export default SilentUsersRoute;
