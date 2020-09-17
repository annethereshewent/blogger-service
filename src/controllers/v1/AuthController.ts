import { BodyParams, Controller, Get, Post, Req, Status, Returns } from '@tsed/common'
import { Authenticate, Authorize } from '@tsed/passport'
import { User } from '../../models/User'
import { Credentials } from '../../request'
import { ErrorCode } from '../../response'

@Controller('/auth')
export class PassportCtrl {
  @Post('/login')
  @Authenticate('login', { failWithError: true })
  @Returns(200, User)
  @Returns(400, { code: ErrorCode.Unauthenticated })
  login(@Req() req: Req) {
    return req.user
  }
}
