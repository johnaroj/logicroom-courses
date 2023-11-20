import { injectable } from "inversify";
import IDependency from "./IDependency";

@injectable()
export default class FakeDependency implements IDependency {
  message() {
    return "fake message";
  }
}
