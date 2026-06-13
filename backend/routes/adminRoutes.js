const express = require("express");
const router = express.Router();

const auth =
require("../middleware/authMiddleware");

const admin =
require("../middleware/adminMiddleware");

const {
 dashboard
} = require(
 "../controllers/adminController"
);

router.get(
 "/dashboard",
 auth,
 admin,
 dashboard
);

module.exports = router;