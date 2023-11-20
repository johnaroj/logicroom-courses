import { injectable } from "inversify";
import IDependency from "./IDependency";

@injectable()
export default class RealDependency implements IDependency {
  message() {
    return "real message";
  }
}
