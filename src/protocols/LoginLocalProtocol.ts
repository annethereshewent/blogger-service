import {BodyParams, Req} from '@tsed/common'
import {OnInstall, OnVerify, Protocol} from '@tsed/passport'
import {IStrategyOptions, Strategy} from 'passport-local'
import { User } from '../models/User'
import { Credentials } from '../request'

@Protocol<IStrategyOptions>({
  name: 'login',
  useStrategy: Strategy,
  settings: {
    usernameField: 'email',
    passwordField: 'password'
  }
})

export class LoginLocalProtocol implements OnVerify, OnInstall {
  async $onVerify(@Req() request: Req, @BodyParams() credentials: Credentials) {
    const {email, password} = credentials

    const user = await User.findOne({
        where: {
            email,
            password
        }
    })

    if (!user) {
      return false
      // OR throw new NotAuthorized('Wrong credentials')
    }

    if (await !user.verifyPassword(password)) {
      return false
      // OR throw new NotAuthorized('Wrong credentials')
    }

    return user
  }

  $onInstall(strategy: Strategy): void {
    // intercept the strategy instance to adding extra configuration
  }
}
