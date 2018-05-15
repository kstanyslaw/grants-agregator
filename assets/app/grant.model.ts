export class Grant {
  constructor (
    public name: string,
    public grantor: string,
    public url: string,
    public dateStart: Date,
    public deadline: Date,
    public price: number,
    public geoScale: string,
    public grantee: string[],
    public description?: string,
    public categories?: string[],
    public id?: string,
  ) {  }
}
