import { Car } from "./carList";

// A sample dataset containing details of various cars including make and year.
// This data represents normal scenarios, edge cases (such as negative year), and special cases.
let cars: Car[] = [
  // Standard car entries with valid make and year.
  {
    id: 1,
    make: "Civic",
    year: 2014,
  },
  {
    id: 2,
    make: "SSV8Ute",
    year: 2005,
  },
  {
    id: 3,
    make: "Demio",
    year: 2007,
  },
  {
    id: 4,
    make: "Alphard",
    year: 2017,
  },
  {
    id: 5,
    make: "Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic",
    year: 2007,
  },
  // Edge Case: A car with a negative year.
  {
    id: 6,
    make: "Task-Force",
    year: -987,
  },
  // Special Case: A car with a year value greater than the current year.
  {
    id: 7,
    make: "C200",
    year: 9999,
  },
];

export default cars;
