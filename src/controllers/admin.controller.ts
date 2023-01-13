import { NextFunction, Request, Response } from 'express';
import AdminService from '@services/admin.service';
import { AdminLoginDto } from '@dtos/admin-login.dto';

class AdminController {
  public adminService = new AdminService();

  public AdminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const adminLoginDto: AdminLoginDto = req.body;
      await this.adminService.AdminLogin(adminLoginDto);

      res.status(201).json({ data: adminLoginDto, message: 'logged in' });
    } catch (error) {
      res.status(400).json({ message: 'Password incorrect' });
    }
  };
}

export default AdminController;
