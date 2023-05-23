import { cartsrepository } from "../repositories/carts.repository.js";

class CartsService {
  constructor() {}

////////////////////////////////////////////////////////////////////////
getCartId(id) {
    const cart = cartsrepository.getCartsById(id);
    return cart;
  }
////////////////////////////////////////////////////////////////////////
 createCart(cart) {
    const createCart = cartsrepository.createCart(cart);
    return createCart;
  }
  ////////////////////////////////////////////////////////////////////////

  addProductToCart(cId,pId,pquantity) {
    const cart = cartsrepository.addProductToCart(cId,pId,pquantity);
    return cart;
  }
 ////////////////////////////////////////////////////////////////////////

 deleteCart(cId) {
    const deleteCart = cartsrepository.deleteCart(cId);
    return deleteCart;
  }

 ////////////////////////////////////////////////////////////////////////
deleteProductToCart(cId,pId) {
    const deleteCart = cartsrepository.deleteProductToCart(cId,pId);
    return deleteCart;
  }


////////////////////////////////////////////////////////////////////////

updateQuantitytoProductToCart(cId,pId,pquantity) {
  const cart = cartsrepository.updateQuantitytoProductToCart(cId,pId,pquantity);
  return cart;
}

////////////////////////////////////////////////////////////////////////

updatetoListProducToCart(cId,listproduc) {
  const cart = cartsrepository.updatetoListProducToCart(cId,listproduc);
  return cart;
}
////////////////////////////////////////////////////////////////////////

}

export const cartsService = new CartsService();