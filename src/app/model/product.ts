export class Product {
  id!: number;
  name!: string;
  price!: number;
  status!: boolean;
  img!: string;

  constructor(id: number, name: string, price: number, status: boolean, img: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.status = status;
    this.img = img;
  }
}
