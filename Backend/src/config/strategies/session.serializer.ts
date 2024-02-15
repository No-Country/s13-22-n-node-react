import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../../modules/auth/auth.service";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
       @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ){
        super();
    }

    async serializeUser(user: any, done: Function) {
       done(null, { email: user.email, id: user.id });
    }

    async deserializeUser(payload: any, done: Function) {
       done(null, payload);
    }
}