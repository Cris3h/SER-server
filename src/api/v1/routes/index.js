const { Router } = require("express");
const {
  getByQueryOrAll,
  postPackageAndClientController,
  registerUserController,
  loginUserController,
  deletePackageController,
  updatePackageController,
} = require("../controllers");

const router = Router();

// ADMIN
//this route is only for administrators.
router.post('/signup', registerUserController); 
//login for users
router.post('/login', loginUserController);

router.get("/client", getByQueryOrAll); // busca por query o todos. 
router.post("/newPackage", postPackageAndClientController); //verifica si existe el mismo cliente.
router.patch("/package", updatePackageController); // envia dentro de data todos los campos a modificar (BUG: MODIFICA TODOS LOS PAQUETES DEL USUARIO. SI TIENE 5 PAQUETES Y CAMBIA A 1 EL "TO" VA A CAMBIAR EN TODOS. ARREGLAR RAPIDO!)
router.delete("/package/:id", deletePackageController); // usa el id del paquete

module.exports = router;