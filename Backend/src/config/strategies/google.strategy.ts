import { Inject, Injectable } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from "../../modules/auth/auth.service";

ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
})

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService
    ){
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.REDIRECT_URL,
            scope: process.env.SCOPE.split(',')
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback){
        console.log('Access token: ', accessToken);
        console.log('Refresh token: ', refreshToken);
        console.log('Profile: ', profile);

        const user = {
            name: profile._json.name,
            email: profile._json.email,
            image: profile._json.picture,
            refreshToken: refreshToken
        }

       const userRegistered = await this.authService.register(user);

        done(null, {...user, accessToken});

    }
}