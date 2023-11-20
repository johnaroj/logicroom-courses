import { inject, injectable } from "inversify";
import Repository from "./repository";

export interface IPresenter<T> {
  load(): T;
}

@injectable()
class Presenter implements IPresenter<{ message: string }> {
  repository: Repository;
  constructor(@inject(Repository) repository: Repository) {
    this.repository = repository;
  }

  load = () => {
    return { message: this.repository.load() };
  };
}

export default Presenter;
