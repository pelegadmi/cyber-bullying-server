import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { AdminLoginDto } from '@dtos/admin-login.dto';

class AdminService {
  public async AdminLogin(adminLoginDto: AdminLoginDto) {
    if (isEmpty(adminLoginDto)) throw new HttpException(400, 'adminLoginDto is empty');

    if (adminLoginDto.password !== 'Aa123456') throw new HttpException(400, 'password is incorrect');
  }
}

export default AdminService;
