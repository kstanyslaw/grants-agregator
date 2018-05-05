export class Grant {
  constructor (
    public id: string,
    public name: string,
    public price: number,
    public description?: string,
    public url?: string,
    public categories?: string[],
    public duration?: Date,
  ) {  }
}
