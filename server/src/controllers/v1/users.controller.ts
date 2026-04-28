import type { Request, Response } from "express";
class UsersController {
  getUserss = async (_req: Request, res: Response) => {
    // TODO: Call service layer when needed.
    const data: unknown[] = [];
    res.status(200).json(data);
  };

  getUsersById = async (req: Request, res: Response) => {
    // TODO: Call service layer when needed.
    const data = { id: req.params.id };
    res.status(200).json(data);
  };

  createUsers = async (req: Request, res: Response) => {
    // TODO: Call service layer when needed.
    const data = req.body;
    res.status(201).json(data);
  };

  updateUsers = async (req: Request, res: Response) => {
    // TODO: Call service layer when needed.
    const data = { id: req.params.id, ...req.body };
    res.status(200).json(data);
  };

  deleteUsers = async (_req: Request, res: Response) => {
    // TODO: Call service layer when needed.
    res.status(204).send();
  };
}

export const usersController = new UsersController();
