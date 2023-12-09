import { injectable, inject } from "inversify";
import { AuthorsRepository } from "./AuthorsRepository";

@injectable()
export class AuthorsPresenter {
  @inject(AuthorsRepository)
  authorsRepository;

  constructor() {}
}
