import request from "supertest";
import app from "../app";
import estCarValue from "../components/estCarValue";

describe("Cars API Endpoint Tests", () => {
  it("should return Hello World! on GET /", async () => {
    //Arrange
    const expected = "Hello World!";
    //Act
    const actual = await request(app).get("/");
    //Assert
    expect(actual.text).toBe(expected);
  });

  it("should return 7 cars on GET /cars", async () => {
    //Arrange
    const expected = 7;
    //Act
    const actual = await request(app).get("/cars");
    //Assert
    expect(JSON.parse(actual.text).length).toBe(expected);
  });

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
      { "Car Value": "$10299" },
    ]);
  });

  describe("Cars Value API Endpoint Tests", () => {
    it("Sunny day scenario", async () => {
      const expected = estCarValue("Civic", 2014);
      const actual = await request(app).get("/cars/value/1");
      expect(actual.body).toEqual(expected);
    });
    it("Numbers only is okay for 2", async () => {
      const expected = estCarValue("SSV8Ute", 2005);
      const actual = await request(app).get("/cars/value/2");
      expect(actual.body).toEqual(expected);
    });
    it("Numbers only is okay for 3", async () => {
      const expected = estCarValue("Demio", 2007);
      const actual = await request(app).get("/cars/value/3");
      expect(actual.body).toEqual(expected);
    });
    it("Numbers only is okay for 4", async () => {
      const expected = estCarValue("Alphard", 2017);
      const actual = await request(app).get("/cars/value/4");
      expect(actual.body).toEqual(expected);
    });
    it("Numbers only is okay for 5", async () => {
      const expected = estCarValue(
        "Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic",
        2007
      );
      const actual = await request(app).get("/cars/value/5");
      expect(actual.body).toEqual(expected);
    });
    it("Negative Number", async () => {
      const expected = estCarValue("Task-Force", -987);
      const actual = await request(app).get("/cars/value/6");
      expect(actual.body).toEqual(expected);
    });
    it("should return the value for the car with id 7", async () => {
      const expected = estCarValue("C200", 9999);
      const actual = await request(app).get("/cars/value/7");
      expect(actual.body).toEqual(expected);
    });
  });
});

describe("GET /cars/value/:id", () => {
  it("should return a 404 error if the car ID does not exist", async () => {
    const nonExistentId = 999; // Choose an ID that doesn't exist in your data
    const response = await request(app).get(`/cars/value/${nonExistentId}`);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Car not found" });
  });
});
