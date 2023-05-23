import { productsrepository } from "../repositories/products.repository.js";

class ProductsService {
  constructor() {}

///////////////////////////////////////////////////////////

getProducts(query,limit,page,pCategory,pStatus,sort) {
    const products = productsrepository.getProducts(query,limit,page,pCategory,pStatus,sort);
    return products;
  }

////////////////////////////////////////////////////////////////////////
getProductsById(pId) {
    const product = productsrepository.getProductsById(pId);
    return product;
  }
////////////////////////////////////////////////////////////////////////

addProduct(product) {
    const result = productsrepository.addProduct(product);
    return result;
  }
////////////////////////////////////////////////////////////////////////

updateProducto(pId,productonuevo) {
    const createdProduct = productsrepository.updateProducto(pId,productonuevo);
    return createdProduct;
  }
////////////////////////////////////////////////////////////////////////

deleteProduct(pId) {
    const result = productsrepository.deleteProduct(pId);
    return result;
  }



/////////////////////////////////////////////////////////////////////////////////////
}

export const productsService = new ProductsService();
