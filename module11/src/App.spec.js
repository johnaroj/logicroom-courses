import { when } from 'mobx'
import { Types } from './Core/Types'
import { BaseIOC } from './BaseIOC'
import { Router } from './Routing/Router'
import { RouterRepository } from './Routing/RouterRepository'
import { NavigationPresenter } from './Navigation/NavigationPresenter'
import { AppPresenter } from './AppPresenter'
import { AuthorsPresenter } from './Authors/AuthorsPresenter'
import { BooksPresenter } from './Books/BooksPresenter'
import { BooksRepository } from './Books/BooksRepository'
import { AuthorsRepository } from './Authors/AuthorsRepository'
import { SingleBooksResultStub } from './TestTools/SingleBooksResultStub'
import { SingleAuthorsResultStub } from './TestTools/SingleAuthorsResultStub'
import { FakeRouterGateway } from './Routing/FakeRouterGateway'
import { FakeHttpGateway } from './Core/FakeHttpGateway'

let container = null
let appPresenter = null
let navigationPresenter = null
let router = null
let routerRepository = null
let booksPresenter = null
let authorsPresenter = null
let booksRepository = null
let authorsRepository = null

describe('navigation', () => {
  beforeEach(() => {
    container = new BaseIOC().buildBaseTemplate()
    container.bind(Types.IDataGateway).to(FakeHttpGateway)
    container.bind(Types.IRouterGateway).to(FakeRouterGateway)
    appPresenter = container.get(AppPresenter)
    navigationPresenter = container.get(NavigationPresenter)
    router = container.get(Router)
    routerRepository = container.get(RouterRepository)
    booksRepository = container.get(BooksRepository)
    authorsRepository = container.get(AuthorsRepository)
    booksPresenter = container.get(BooksPresenter)
    authorsPresenter = container.get(AuthorsPresenter)

    // booksRepository.dataGateway.get = jest.fn().mockImplementation((pathArg) => {
    //   return Promise.resolve(SingleBooksResultStub())
    // })
    // authorsRepository.dataGateway.get = jest.fn().mockImplementation((pathArg) => {
    //   return Promise.resolve(SingleAuthorsResultStub())
    // })

    // routerRepository.routerGateway.goToId = jest.fn().mockImplementation((routeIdArg) => {
    //   router.updateCurrentRoute(routeIdArg, null, null)
    // })

    // appPresenter.load(() => {})
  })

  it('abstract routing and navigation test', async () => {})

  function whenPromise(condition) {
    return new Promise((resolve, reject) => {
      when(condition, resolve)
    })
  }
})
