import "reflect-metadata";
import TYPES from "./Types";
import Repository from "../repository";
import IDependency from "./IDependency";
import FakeDependency from "./FakeDependency";
import RealDependency from "./RealDependency";
import { Container } from "inversify";

let container = null;
const createContainer = (context: "fake" | "real") => {
  let container = new Container({
    defaultScope: "Transient",
    autoBindInjectable: true,
  });

  if (context === "fake") {
    container.bind<IDependency>(TYPES.IDependency).to(FakeDependency);
  } else {
    container.bind<IDependency>(TYPES.IDependency).to(RealDependency);
  }
  container.bind(Repository).to(Repository).inSingletonScope();

  return container;
};

export { container, createContainer };
