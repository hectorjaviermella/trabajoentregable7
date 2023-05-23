
import { Router } from "express";


import { getCardId, createCart,addProductToCart,deleteCardId,deleteProductToCard,updateQuantitytoProductToCart,updatetoListProducToCart } from "../controllers/carts.controller.js";


export const cartsrouter = Router();

//////////////////////////////////////////////////////////////////////////////////////////////

cartsrouter.get("/:cId", getCardId);

//////////////////////////////////////////////////////////////////////////////////////////////
cartsrouter.post("/", createCart);
  
/////////////////////////////////////////////////////////////////////////////////////////////
cartsrouter.post("/:cId/product/:pId", addProductToCart);

//////////////////////////////////////////////////////////////////////////////////////
//elimina un carrito
cartsrouter.delete("/:cId", deleteCardId);
////////////////////////////////////////////////////////////////////////////////////////////////
//elimina un producto del carrito especifico
cartsrouter.delete("/:cId/product/:pId", deleteProductToCard);

  ////////////////////////////////////////////////////////////////////////////////////////////////
//actualizar la cantidad de unidades de un producto que se encuentra en el carrito
cartsrouter.put("/:cId/product/:pId", updateQuantitytoProductToCart);

 //////////////////////////////////////////////////////////////////////////////////////
//PUT actualiza el carrito con un arreglo de productos
cartsrouter.put("/:cId", updatetoListProducToCart);

export default cartsrouter;