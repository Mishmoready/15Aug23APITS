function estCarValue(make: string, year: number) {
  // use for-loop to Calculate the number of the positions of the alphabets in the make name model
  const alphaNumValue = [...make.toUpperCase()]
    .filter((alphabets) => alphabets >= "A" && alphabets <= "Z")
    .reduce(
      (sum, alphabets) => sum + alphabets.charCodeAt(0) - "A".charCodeAt(0) + 1,
      0
    );
  //   if (typeof year !== "number") {
  //     return { error: "Wrong data type" };
  //   }
  if (year < 0) {
    return { error: "Negative year" };
  }
  // Calculate the car value according to the given rules
  const carValue = alphaNumValue * 100 + year;

  return { "Car Value": `$${carValue}` };
}

export default estCarValue;
