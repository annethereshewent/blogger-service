import {Configuration, Inject, PlatformApplication} from '@tsed/common'
import {GlobalAcceptMimesMiddleware} from '@tsed/platform-express'
import * as bodyParser from 'body-parser'

const rootDir = __dirname

@Configuration({
  rootDir,
  acceptMimes: ['application/json']
})
export class Server {
  @Inject()
  app: PlatformApplication

  @Configuration()
  settings: Configuration

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app
      .use(GlobalAcceptMimesMiddleware) // optional
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
  }
}
