import { productsService } from "../services/products.service.js";
import { cartsService } from "../services/carts.service.js";

console.log("entro al view.controllers");
//////////////////////////////////////////////////////////////////////////////////////////////

export function login(req, res) {
  console.log("entro al view.router + login");
  res.render("login");
};

//////////////////////////////////////////////////////////////////////////////////////////////
export function register(req, res) {
  res.render("register");
};
//////////////////////////////////////////////////////////////////////////////////////////////
export function current(req, res) {
  res.render("profile", { user: req.session.user });
};

//////////////////////////////////////////////////////////////////////////////////////////////
export function restore(req, res) {
  res.render("restore");
};
//////////////////////////////////////////////////////////////////////////////////////////////
export function inicio(req, res) {
  res.render("login");
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//muestra todo los productos 
export async function getProducts(req, res) {
  console.log("entro view controller a mostrar todo los productos");


   let {limit =2 , page =  1, pCategory, pStatus, sort} = req.query; 
   
  let query ={
    pCategory: pCategory || { $exists: true },
    pStatus: pStatus || { $exists: true },
  }; 
    
  if (sort===1)
  sort={ pPrice:-1};
else
  sort={ pPrice:-1};  

 const { docs: productos,  hasPrevPage,  hasNextPage,  nextPage,  prevPage,  totalPages,
} =  await productsService.getProducts(query,limit,page,pCategory,pStatus,sort);  

return res.render("products", { user:req.session.user , productos,  page,  hasPrevPage,  hasNextPage,  prevPage,  nextPage,  totalPages,});
};

///////////////////////////////////////////////////////////////////////////////////
//muestra un producto
export async function getProductsById(req, res) {
  console.log("detalle de un producto view controllor");
  const pId = req.params.pId;
  console.log("user" + req.user.cart);
  const cId = req.user.cart; 
    const prod =   await productsService.getProductsById(pId);
    console.log("tendria que mostar en la pantalla " + prod);
    res.render("product", { prod, cId });
};


/////////////////////////////////////////////////////////////////////////////////////
export async function getCartsById(req, res) {
  const { cId } = req.params;
  console.log("view router cart",cId);  
    const cart =  await cartsService.getCartsById(cId);
  res.render("cart", { cart: cart});
};


