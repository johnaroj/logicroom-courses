import { inject, injectable } from "inversify";
import { makeObservable, computed } from "mobx";
import { MessagesRepository } from "./Core/Messages/MessagesRepository";
import { Router } from "./Routing/Router";

@injectable()
export class AppPresenter {
  @inject(Router)
  router: any;

  @inject(MessagesRepository)
  messagesRepository: any;

  get currentRoute() {
    return this.router.currentRoute;
  }

  constructor() {
    makeObservable(this, {
      currentRoute: computed,
    });
  }

  load = (onRouteChange: any) => {
    const onRouteChangeWrapper = () => {
      this.messagesRepository.appMessages = [];
      onRouteChange();
    };
    this.router.registerRoutes(onRouteChangeWrapper);
  };
}
