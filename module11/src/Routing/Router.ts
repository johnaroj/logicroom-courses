import { inject, injectable } from "inversify";
import { makeObservable, computed, action } from "mobx";
import { RouterRepository } from "./RouterRepository";

@injectable()
export class Router {
  @inject(RouterRepository)
  routerRepository;

  get currentRoute() {
    return this.routerRepository.currentRoute;
  }

  constructor() {
    makeObservable(this, {
      currentRoute: computed,
      updateCurrentRoute: action,
    });
  }

  updateCurrentRoute = async (
    newRouteId: string,
    params?: string,
    query?: string
  ) => {
    let oldRoute = this.routerRepository.findRoute(this.currentRoute.routeId);
    let newRoute = this.routerRepository.findRoute(newRouteId);

    let hasToken: boolean = true;
    const routeChanged = oldRoute.routeId !== newRoute.routeId;
    const protectedOrUnauthenticatedRoute =
      (newRoute.routeDef.isSecure && !hasToken) ||
      newRoute.routeDef.path === "*";
    const publicOrAuthenticatedRoute =
      (newRoute.routeDef.isSecure && hasToken) ||
      newRoute.routeDef.isSecure === false;

    if (routeChanged) {
      this.routerRepository.onRouteChanged();

      if (protectedOrUnauthenticatedRoute) {
        this.routerRepository.goToId("booksLink");
      } else if (publicOrAuthenticatedRoute) {
        if (oldRoute.onLeave) oldRoute.onLeave();
        if (newRoute.onEnter) newRoute.onEnter();
        this.routerRepository.currentRoute.routeId = newRoute.routeId;
        this.routerRepository.currentRoute.routeDef = newRoute.routeDef;
        this.routerRepository.currentRoute.params = params;
        this.routerRepository.currentRoute.query = query;
      }
    }
  };

  registerRoutes = (onRouteChange) => {
    this.routerRepository.registerRoutes(
      this.updateCurrentRoute,
      onRouteChange
    );
  };

  goToId = async (routeId: string, params?: string, query?: string) => {
    this.routerRepository.goToId(routeId);
  };
}
