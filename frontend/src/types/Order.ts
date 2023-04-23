type ProductDetails = {
  name: string;
  price: number;
  imagePath: string;
}

type Product = {
  _id: string;
  quantity: number;
  product: ProductDetails;
}

export type Order = {
  _id: string;
  table: string;
  status: 'WAITING'| 'IN_PRODUCTION'| 'DONE',
  products: Product[];
}
