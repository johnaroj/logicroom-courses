import { makeObservable, observable } from "mobx";
import { inject, injectable } from "inversify";
import { Types } from "../Core/Types";
import { BooksRepository } from "../Books/BooksRepository";
import { AuthorsRepository } from "../Authors/AuthorsRepository";

@injectable()
export class RouterRepository {
  currentRoute = { routeId: null };

  @inject(BooksRepository)
  booksRepository;

  @inject(AuthorsRepository)
  authorsRepository;

  @inject(Types.IRouterGateway)
  routerGateway;

  onRouteChanged = null;

  routes = [
    {
      routeId: "default",
      routeDef: {
        path: "*",
        isSecure: false,
      },
      onEnter: () => {},
      onLeave: () => {},
    },
    {
      routeId: "loginLink",
      routeDef: {
        path: "/app/login",
        isSecure: false,
      },
      onEnter: () => {},
      onLeave: () => {},
    },
    {
      routeId: "authorsLink",
      routeDef: {
        path: "/app/authors",
        isSecure: false,
      },
      onEnter: () => {},
      onLeave: () => {},
    },
    {
      routeId: "booksLink",
      routeDef: {
        path: "/app/books",
        isSecure: false,
      },
      onEnter: () => {},
      onLeave: () => {},
    },
  ];

  constructor() {
    makeObservable(this, {
      currentRoute: observable,
    });
  }

  registerRoutes = (updateCurrentRoute, onRouteChanged) => {
    this.onRouteChanged = onRouteChanged;
    let routeConfig = {};
    this.routes.forEach((routeArg) => {
      const route = this.findRoute(routeArg.routeId);
      routeConfig[route.routeDef.path] = {
        as: route.routeId,
        uses: (match) => {
          updateCurrentRoute(
            route.routeId,
            route.routeDef,
            {},
            match.queryString
          );
        },
      };
    });
    this.routerGateway.registerRoutes(routeConfig);
  };

  findRoute(routeId: string) {
    const route = this.routes.find((route) => {
      return route.routeId === routeId;
    });
    return route || { routeId: "loadingSpinner", routeDef: { path: "" } };
  }

  goToId = async (routeId: string, params?: string, query?: string) => {
    this.routerGateway.goToId(routeId);
  };
}
