export class ShoeModel {
  public maker: string;
  public model: string;
  public gender: string;
  public imageUrl: string;
  public price: number;

  public description: string;
  public sizesAvailable: string[];

  constructor(maker: string, model: string,gender: string, imageUrl: string, price: number, description: string,  sizesAvailable: string[]){
    this.maker = maker;
    this.model = model;
    this.gender = gender;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this.sizesAvailable = sizesAvailable;
  }
}
