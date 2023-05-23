import { cartsrepository } from "../repositories/carts.repository.js";
import { productsrepository } from "../repositories/products.repository.js";

class ViewsService {
  constructor() {}

////////////////////////////////////////////////////////////////////////
getProducts(query,limit,page,pCategory,pStatus,sort) {
    
    return productsrepository.getProducts(query,limit,page,pCategory,pStatus,sort); 
  }

  
 //////////////////////////////////////////////////////////////////////////
 getProductsById(pId) {
    const product = productsrepository.getProductsById(pId);
    return product;
  }
 //////////////////////////////////////////////////////////////////////////
  getCartsById(cId) {
    const cart = cartsrepository.getCartsById(cId);
    return cart;
  }
  //////////////////////////////////////////////////////////////////////////

}
export const viewsService = new ViewsService();