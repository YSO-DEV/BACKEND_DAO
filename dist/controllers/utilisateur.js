"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
let users = [];
let nextId = 1;
class UserController {
    static list(req, res) {
        res.json(users);
    }
    static get(req, res) {
        const id = Number(req.params.id);
        const user = users.find(u => u.id === id);
        if (!user)
            return res.status(404).json({ error: "Utilisateur non trouver" });
        res.json(user);
    }
    static create(req, res) {
        const { nom, email } = req.body;
        const user = { id: nextId++, nom, email };
        users.push(user);
        res.status(201).json(user);
    }
}
exports.UserController = UserController;
