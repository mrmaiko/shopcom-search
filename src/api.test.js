import { describe, expect, test } from "@jest/globals";
import "isomorphic-fetch";
import { GET_PRODUCT, GET_ALL_PRODUCTS } from "./Services";

describe("Test API Integration", () => {
  let apiResponse;
  let apiResponsePromise = new Promise((resolve) => (apiResponse = resolve));

  describe("Test Shop.com /products Endpoint", () => {
    test("Returns Product List and Filtering Options", async () =>
      GET_ALL_PRODUCTS()
        .then((response) => response.json())
        .then((result) => {
          apiResponse(result);
          return expect(result).toHaveProperty("products");
        }));
  });

  describe("Test Shop.com /product/{product_id} Call", () => {
    let product;

    beforeAll(async () => {
      let data = await apiResponsePromise;
      product = data.products[0];
    });

    test("Returns Product Details", async () =>
      GET_PRODUCT(product.id)
        .then((response) => response.json())
        .then((result) => expect(result.id).toBe(product.id)));
  });
});
