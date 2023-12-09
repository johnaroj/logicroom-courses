import { injectable } from 'inversify'

interface IConfig {
  apiUrl: string;
}

@injectable()
class Config implements IConfig {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'https://api.logicroom.co/api/pete@logicroom.co';
  }
}

export { Config }
