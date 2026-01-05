"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilisateur_1 = require("../controllers/utilisateur");
const router = (0, express_1.Router)();
router.get("/", utilisateur_1.UserController.list);
router.get("/:id", utilisateur_1.UserController.get);
router.post("/", utilisateur_1.UserController.create);
exports.default = router;
