function estCarValue(make: string, year: number) {
  // Calculate the sum of the positions of the alphabets in the make name model
  const alphaNumValue = [...make.toUpperCase()]
    .filter((alphabets) => alphabets >= "A" && alphabets <= "Z")
    .reduce(
      (sum, alphabets) => sum + alphabets.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    );

  // Return an error if the year is greater than 2023
  if (year > 2023) {
    return { error: "Year cannot be greater than 2023" };
  }
  // Return an error if the year is negative
  if (year < 0) {
    return { error: "Negative year" };
  }
  // Calculate the car value based on the sum of the positions of the alphabets
  // in the make name and the year of the car
  const carValue = alphaNumValue * 100 + year;

  return { "Car Value": `$${carValue}` };
}

export default estCarValue;
