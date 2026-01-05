import { Request, Response } from "express";
import { Utilisateur} from "../models/models";

let users: Utilisateur[] = [];
let nextId = 1;

export class UserController {
  static list(req: Request, res: Response) {
    res.json(users);
  }

  static get(req: Request, res: Response) {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouver" });
    res.json(user);
  }

  static create(req: Request, res: Response) {
    const { nom, email } = req.body;
    const user: Utilisateur = { id: nextId++, nom, email };
    users.push(user);
    res.status(201).json(user);
  }
}
