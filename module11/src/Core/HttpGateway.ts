import { injectable, inject } from "inversify";
import { Config } from "./Config";

@injectable()
export class HttpGateway {
  userModel: {
    token: string;
  } = { token: "" };
  @inject(Config)
  config;

  delay = (ms) => new Promise((res) => setTimeout(res, ms));

  get = async (path) => {
    const response = await fetch(this.config.apiUrl + "/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });

    if (path === "/books") await this.delay(3000);
    if (path === "/authors") await this.delay(5000);

    const dto = response.json();
    return dto;
  };

  post = async (path, requestDto) => {
    const response = await fetch(this.config.apiUrl + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });
    const dto = response.json();
    return dto;
    return dto;
  };

  delete = async (path) => {
    const response = await fetch(this.config.apiUrl + path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.userModel.token,
      },
    });
    const dto = response.json();
    return dto;
  };
}
