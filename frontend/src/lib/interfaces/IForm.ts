export interface IFormInput {
  name: string;
  price: number;
  brand: string;
  slug: string;
  tag: string;
  category: ICategory;
  description: string;
  featuredImg: string;
  rating: number;
  numReviews: string;
  countInStock: string;
}

export interface ICategory {
  Male: "Male";
  Female: "Female";
  Top: "Top";
  Shoes: "Shoes";
  GroupOne: "Male Top";
  GroupTwo: "Female Top";
  GroupThree: "Male Shoes";
  GroupFour: "Female Shoes";
}
