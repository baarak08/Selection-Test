const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/multer");
const userController = require("../controllers").userController;

router.post("/v1", userController.login);
router.get("/v2", userController.getByToken, userController.getUserByToken);
router.post("/", userController.register);
router.get("/image/render/:id", userController.renderAvatar);

// router.post(
//   "/image/v2/:id",
//   upload("uploads", "POST").single("avatar"),
//   userController.uploadAvatarv2
// );
router.get("/getall", userController.getAll);
router.get("/v4", userController.getUserByName);

router.get("/username", userController.getByUserName);
router.get("/email", userController.getByEmail);

router.delete("/del/:id", userController.deleteUser);
router.get("/token", userController.getByToken);

router.patch("/update/:id", userController.updateProfile);
router.patch("/v3", userController.getByToken, userController.changePassword);

router.get("/generate-token/email", userController.generateTokenByEmail);

module.exports = router;
