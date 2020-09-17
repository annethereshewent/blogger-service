import {Configuration, Inject, PlatformApplication} from '@tsed/common'
import {GlobalAcceptMimesMiddleware} from '@tsed/platform-express'
import '@tsed/passport'
import '@tsed/platform-express'
import * as bodyParser from 'body-parser'

const rootDir = __dirname

@Configuration({
  rootDir,
  acceptMimes: ['application/json'],
  passport: {},
  componentsScan: [
    `${rootDir}/protocols/**/*.ts`
  ],
  mount: {
    '/api/v1': [
        `${rootDir}/controllers/v1/**/*.ts` // Automatic Import, /!\ doesn't works with webpack/jest, use  require.context() or manual import instead
    ]
  }
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
