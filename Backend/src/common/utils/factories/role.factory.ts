import { ERole } from "../../../common/enum";
import { RoleDto } from "../../../modules/auth/dto/role.dto";

export const roles: RoleDto[] = [
  {
    name: ERole.ADMIN,
  },
  {
    name: ERole.CUSTOMER,
  },
  {
    name: ERole.SUPERADMIN,
  },
];
