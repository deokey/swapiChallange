export class SwapiChar {
  id: number;
  name: any;
  url: any;
  complete: boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
