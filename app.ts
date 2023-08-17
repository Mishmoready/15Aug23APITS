import express, { Request, Response } from "express";
import cars from "./components/carData";
import estCarValue from "./components/estCarValue";

const app = express();
app.use(express.json());

// Root endpoint: Just returns a string message.
app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

// Endpoint to get all the cars from the data.
app.get("/cars", (_: Request, res: Response) => {
  res.send(cars);
});

// Endpoint to get the estimated value of a car by its ID.
app.get("/cars/value/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const car = cars.find((car) => car.id === id);

  // If the car with the given ID is not found, return a 404 error.
  if (!car) {
    res.status(404).send({ error: "Car not found" });
    return;
  }

  // Calculate and send the estimated value of the car.
  const value = estCarValue(car.make, car.year);
  res.send(value);
});

// Endpoint to get the estimated value of all cars.
app.get("/cars/:carValue", (_: Request, res: Response) => {
  const result = cars.map((car) => estCarValue(car.make, car.year));
  res.send(result);
});

export default app;
