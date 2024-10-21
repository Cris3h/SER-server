const express = require("express");
const {
  allClientsController,
  clientPackagesController,
  newClientController,
  newPackageController,
  registerUserController,
  loginUserController,
  deletePackageController,
  allPackagesController
} = require("../controllers");


const router = express.Router();

// ADMIN
//this route is only for administrators.
router.post('/signup', registerUserController); 


// USERS
//login for users
router.post('/login', loginUserController);


// CLIENTS
//get all the user clients
router.get("/client", allClientsController);
router.get("/package", allPackagesController);

//get all the packages of one single client
router.get("/:id/packages", clientPackagesController);

//create a new client. This route is only for verified users
// router.post("/client/:id", newClientController);
router.post("/client", newClientController);

//create a new package for one single client.
router.post("/package/:id", newPackageController);

//delete a package
router.delete("/package/:id", deletePackageController);



module.exports = router;


// // --- TEST FOR USERS ---

// const { errorResponse } = require("../../../utils");
// const { User } = require("../../../schemas");

// router.get("/user", async (req, res, next)=> {
//     try {
//         const user = await User.find();
//         res.status(200).json(user); 
//     } catch (error) {
//         console.log(error);
//     }
// })
// // --- Working fine ---