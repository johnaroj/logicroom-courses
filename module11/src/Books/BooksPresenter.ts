import { injectable, inject } from 'inversify'
import { makeObservable, observable, computed, action } from 'mobx'
import { BooksRepository } from './BooksRepository'
import { Router } from '../Routing/Router'

@injectable()
export class BooksPresenter {
  @inject(BooksRepository)
  booksRepository

  @inject(Router)
  router

  constructor() {}
}
