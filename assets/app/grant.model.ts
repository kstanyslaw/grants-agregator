export class Grant {
  constructor (
    public name: string,
    public description: string,
    public price: number,
    public url: string,
    public categories: string[],
    public duration: Date,
    public id?: string,
  ) {  }
}
