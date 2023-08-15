import request from "supertest";
import app from "../app";

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
});
