import { Express, Request, Response } from "express";

const backendTest = (req: Request, res: Response<{ message: string }>) => {
  res.send({ message: "Hello from TypeScript Express!" });
};

export const routes = (app: Express) => {
  app.get("/backend-test", backendTest);
};

export default routes;
