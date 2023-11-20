import { Container } from "inversify";
import { createContainer } from "./dependencies/IOC";
import { beforeEach, expect, test } from "@jest/globals";
import Presenter from "./presenter";

let container: Container | null = null;
beforeEach(() => {
  container = createContainer("fake");
});

test("Main should write out the string 'fake message'", () => {
  const presenter = container!.get(Presenter);
  const message = presenter.load().message;
  expect(message).toBe("fake message");
});
