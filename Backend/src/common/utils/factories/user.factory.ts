import { ERole } from "../../../common/enum";
import { CreateUserDto } from "../../../modules/users/dto/create-user.dto";

export const users: CreateUserDto[] = [
  {
    name: "Dani",
    last_name: "Perez",
    email: "dani@gmail.com",
    password: "secret123",
    phone: "3333333",
    role: ERole.ADMIN,
  },
  {
    name: "Ferwin",
    last_name: "Arias",
    email: "ferwin@admin.com",
    password: "secret123",
    phone: "555555",
    role: ERole.SUPERADMIN,
  },
  {
    name: "Deivis",
    last_name: "Jimenez",
    email: "deivis@admin.com",
    password: "Abcd1234",
    phone: "555555",
    role: ERole.SUPERADMIN,
  },
];
