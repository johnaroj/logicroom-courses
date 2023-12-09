import { injectable, inject } from "inversify";
import { Config } from "../Core/Config";
import { makeObservable, action, toJS, observable } from "mobx";
import { Types } from "../Core/Types";

@injectable()
export class BooksRepository {
  booksPm: {
    name: string;
    id: string;
  }[] = [];

  @inject(Types.IDataGateway)
  dataGateway;

  constructor() {}

  load = async () => {
    const booksDto = await this.dataGateway.get("/books");
    this.booksPm = booksDto.result.map((bookDto) => {
      return { name: bookDto.name, id: bookDto.bookId };
    });
  };
}
