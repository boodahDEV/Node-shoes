import { Request, Response } from "express";

class IndexControllers {
  constructor() {}

  public index (req: Request, res: Response) {
    res.render('index', {
        title:"Welcome to Book App"
    })
  }
}

export const indexController = new IndexControllers();