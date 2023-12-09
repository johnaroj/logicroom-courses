import { Container } from "inversify";
import { MessagesRepository } from "./Core/Messages/MessagesRepository";
import { RouterRepository } from "./Routing/RouterRepository";
import { BooksRepository } from "./Books/BooksRepository";
import { AuthorsRepository } from "./Authors/AuthorsRepository";

export class BaseIOC {
  container: Container;

  constructor() {
    this.container = new Container({
      autoBindInjectable: true,
      defaultScope: "Transient",
    });
  }

  buildBaseTemplate = () => {
    this.container
      .bind(MessagesRepository)
      .to(MessagesRepository)
      .inSingletonScope();
    this.container
      .bind(RouterRepository)
      .to(RouterRepository)
      .inSingletonScope();
    this.container
      .bind(AuthorsRepository)
      .to(AuthorsRepository)
      .inSingletonScope();
    this.container.bind(BooksRepository).to(BooksRepository).inSingletonScope();
    return this.container;
  };
}
