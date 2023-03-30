import BigNumber from "bignumber.js";
import { ParsedUrlQuery } from "querystring";
import { products } from "./products";

export default function calculatePrice(query: ParsedUrlQuery): BigNumber {
  let amount = new BigNumber(0);
  let [id, quantity] = Object.entries(query)[1];
  amount = new BigNumber(quantity as string);

  //for (let [id, quantity] of Object.entries(query)) {
    //const product = products.find(p => p.id === id)
    // if (!product) continue;

    // const price = product.priceSol
    // const productQuantity = new BigNumber(quantity as string)
    // amount = amount.plus(productQuantity.multipliedBy(price))
  

  return amount
}
