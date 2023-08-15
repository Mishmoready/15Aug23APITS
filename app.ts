import express, { Request, Response } from "express";
import cars from "./components/carData";
import estCarValue from "./components/estCarValue";

const app = express();
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/cars", (_: Request, res: Response) => {
  res.send(cars);
});

app.get("/cars/:carValue", (_: Request, res: Response) => {
  const result = cars.map((car) => estCarValue(car.make, car.year));
  res.send(result);
});

export default app;
