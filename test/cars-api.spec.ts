import request from "supertest";
import app from "../app";
import estCarValue from "../components/estCarValue";

// Cars API Endpoint Tests cover common use cases and special cases
describe("Cars API Endpoint Tests", () => {
  // Test Case: Basic functionality check (Hello World! response)
  it("should return Hello World! on GET /", async () => {
    //Arrange
    const expected = "Hello World!";
    //Act
    const actual = await request(app).get("/");
    //Assert
    expect(actual.text).toBe(expected);
  });

  // Test Case: Verify that the number of cars returned is correct
  it("should return 7 cars on GET /cars", async () => {
    //Arrange
    const expected = 7;
    //Act
    const actual = await request(app).get("/cars");
    //Assert
    expect(JSON.parse(actual.text).length).toBe(expected);
  });

  // Test Case: Validate the car value response for different scenarios
  it("the test is obliged to bring in results of car value at /cars/:carValue", async () => {
    //Arrange
    const expected = 7;
    //Act
    const actual = await request(app).get("/cars/:Value");
    //Assert
    expect(actual.body).toEqual([
      { "Car Value": "$6614" },
      { "Car Value": "$12605" },
      { "Car Value": "$6607" },
      { "Car Value": "$8017" },
      { "Car Value": "$58907" },
      { error: "Negative year" },
      { error: "Year cannot be greater than 2023" },
    ]);
  });

  // Cars Value API Endpoint Tests focus on specific car values, including edge cases
  describe("Cars Value API Endpoint Tests", () => {
    it("Sunny day scenario", async () => {
      //Arrange
      const expected = estCarValue("Civic", 2014);
      //Act
      const actual = await request(app).get("/cars/value/1"); // The Correct test would result in $6614
      //Assert
      expect(actual.body).toEqual(expected);
    });

    it("Numbers only is okay for 2", async () => {
      //Arrange
      const expected = estCarValue("SSV8Ute", 2005);
      //Act
      const actual = await request(app).get("/cars/value/2"); // The Correct test would result in $12605
      //Assert
      expect(actual.body).toEqual(expected);
    });

    it("Numbers only is okay for 3", async () => {
      //Arrange
      const expected = estCarValue("Demio", 2007);
      //Act
      const actual = await request(app).get("/cars/value/3"); // The Correct test would result in $6607
      //Assert
      expect(actual.body).toEqual(expected);
    });

    it("Numbers only is okay for 4", async () => {
      //Arrange
      const expected = estCarValue("Alphard", 2017);
      //Act
      const actual = await request(app).get("/cars/value/4"); // The Correct test would result in $8017
      //Assert
      expect(actual.body).toEqual(expected);
    });

    it("Numbers only is okay for 5", async () => {
      //Arrange
      const expected = estCarValue(
        //Act
        "Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic",
        2007
      );
      //Assert
      const actual = await request(app).get("/cars/value/5"); // The Correct test would result in $58907
      expect(actual.body).toEqual(expected);
    });

    // Test Case: Handling negative year value
    it("Negative Number", async () => {
      //Arrange
      const expected = estCarValue("Task-Force", -987);
      //Act
      const actual = await request(app).get("/cars/value/6"); // The Correct test would result in  { "error": "Negative year" }
      //Assert
      expect(actual.body).toEqual(expected);
    });

    // Test Case: Handling year value greater than 2023
    it("should return the value for the car with id 7", async () => {
      //Arrange
      const expected = estCarValue("C200", 9999);
      //Act
      const actual = await request(app).get("/cars/value/7"); // The Correct test would result in { "error": "Year cannot be greater than 2023" }
      //Assert
      expect(actual.body).toEqual(expected);
    });
  });
});

// Test Case: Handling of Non-Existent Data
describe("GET /cars/value/:id", () => {
  it("should return a 404 error if the car ID does not exist", async () => {
    const nonExistentId = 999; // Choose an ID that doesn't exist in your data
    const response = await request(app).get(`/cars/value/${nonExistentId}`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Car not found" });
  });
}); //Happy days
