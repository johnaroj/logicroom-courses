import { injectable, inject } from "inversify";
import { Config } from "../Core/Config";
import { makeObservable, observable } from "mobx";
import { Types } from "../Core/Types";

@injectable()
export class AuthorsRepository {
  authorsPm: {
    name: string;
    id: string;
  }[] = [];

  @inject(Types.IDataGateway)
  dataGateway;

  @inject(Config)
  config;

  constructor() {}

  load = async () => {
    const authorsDto = await this.dataGateway.get("/authors");
    this.authorsPm = authorsDto.result.map((authorsDto) => {
      return { name: authorsDto.name, id: authorsDto.bookId };
    });
  };
}
