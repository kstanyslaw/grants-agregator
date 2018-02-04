export class Grant {
  name: string;
  description: string;
  price: number;
  url: string;
  categories: string[];
  duration: Date;

  constructor (
    name: string,
    description: string,
    price: number,
    url: string,
    categories: string[],
    duration: Date,
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
    this.categories = categories;
    this.duration = duration;
  }
}
