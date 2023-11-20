import { injectable, inject } from "inversify";
import TYPES from "./dependencies/Types";
import IDependency from "./dependencies/IDependency";

@injectable()
export default class Repository {
  dependency: IDependency;
  constructor(@inject(TYPES.IDependency) dependency: IDependency) {
    this.dependency = dependency;
  }

  load() {
    return this.dependency.message();
  }
}
