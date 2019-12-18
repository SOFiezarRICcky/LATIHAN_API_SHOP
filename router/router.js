const productsController = require("../controller/productsController")
const userController = require("../controller/userController")
const cartController = require("../controller/cartController")

module.exports = app => {
    app.get("/", productsController.home)


    // API Untuk CRUD Produk
    app.get("/products", productsController.listProduct)
    app.get("/products/:id", productsController.detailProduct)
    app.post("/products/", productsController.tambahProduct)
    app.put("/products/:id", productsController.ubahProduct)
    app.delete("/products/:id", productsController.hapusProduct)


    // API Untuk CRUD User
    app.get("/user", userController.listUser)
    app.get("/user/:id", userController.detailUser)
    app.post("/user/", userController.tambahUser)
    app.put("/user/:id", userController.ubahUser)
    app.delete("/user/:id", userController.hapusUser)
    // Jalankan api untuk addtocart dengan userCart 
    // merupakan id dari collection users dan productCart 
    // merupakan id dari collection products


    // API Untuk CRUD CART (Keranjang)
    app.post("/cart/:id", cartController.addToCart)
    app.get("/cart/:id", cartController.showCart)
    app.put("/cart/:id", cartController.editCart)
    app.delete("/cart/:id", cartController.deleteCart)
    app.get("/cart/remove/:id", cartController.removeCart)
    // Jalankan api untuk showCart dengan parameter 
    // id yang di dapatkan dari user id


    // CheckOut
    app.get("/cart/checkout/:id", cartController.checkOut)

}