import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import AdminController from '@controllers/admin.controller';

class AdminRoute implements Routes {
  public path = '/admin';
  public router = Router();
  public adminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.adminController.AdminLogin);
  }
}

export default AdminRoute;
