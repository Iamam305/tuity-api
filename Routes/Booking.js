const { Router } = require("express");
const cartController = require("../controllers/cartControllers");
const router = Router();
const auth = require("../middleware/auth");
router.get("/booking/:id", auth, cartController.get_cart_items);
router.post("/booking/:id", auth, cartController.add_cart_item);
router.delete("/booking/:userId/:itemId", auth, cartController.delete_item);

module.exports = router;
