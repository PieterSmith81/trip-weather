/*
Test the validateInput function.
Note: The validateInput function is an asynchronous JavaScript function that returns a promise.
See the following URL for details on testing asynchronous JavaScript functions using Jest: https://jestjs.io/docs/asynchronous
Also see the following URL for details on testing for resolved promises using Jest: https://stackoverflow.com/questions/54525147/expect-a-jest-test-to-resolve-but-dont-care-about-the-value
Note: Any newly created date objects must conform to the ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) as per the following examples: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples
*/
import { validateInput } from "../src/client/js/app";
describe("Testing the validate input functionality.", () => {
  test("Testing the validateInput() function with valid input values: London (valid destination), Today's date (valid date)", () => {
    const destinationName = "London";
    const arrivalDate = new Date();
    return expect(
      validateInput(destinationName, arrivalDate)
    ).resolves.not.toThrow();
  });

  test("Testing the validateInput() function with valid input values: London (valid destination), Today's date + 6 days (valid date in the future that is still within the range supported by the Weatherbit API's free future forecasts)", () => {
    const destinationName = "London";
    let arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 6); // Add 6 days to today's date.
    return expect(
      validateInput(destinationName, arrivalDate)
    ).resolves.not.toThrow();
  });

  test("Testing the validateInput() function with invalid input values: Blank destination (invalid destination), Today's date (valid date)", () => {
    const destinationName = "";
    const arrivalDate = new Date();
    expect.assertions(1);
    return validateInput(destinationName, arrivalDate).catch((e) =>
      expect(e).toMatch(
        `Blank destination entered.\n\nPlease enter a valid destination name and then try again.`
      )
    );
  });

  test("Testing the validateInput() function with invalid input values: London (valid destination), Blank date (invalid date)", () => {
    const destinationName = "London";
    const arrivalDate = "";
    expect.assertions(1);
    return validateInput(destinationName, arrivalDate).catch((e) =>
      expect(e).toMatch(
        `Blank or invalid arrival date entered.\n\nPlease enter a valid arrival date and then try again.`
      )
    );
  });

  test("Testing the validateInput() function with invalid input values: London (valid destination), 32/12/2022 (invalid date)", () => {
    const destinationName = "London";
    const arrivalDate = new Date("2022-12-32");
    expect.assertions(1);
    return validateInput(destinationName, arrivalDate).catch((e) =>
      expect(e).toMatch(
        `Blank or invalid arrival date entered.\n\nPlease enter a valid arrival date and then try again.`
      )
    );
  });

  test("Testing the validateInput() function with invalid input values: London (valid destination), 01/01/2022 (invalid date since it is in the past)", () => {
    const destinationName = "London";
    const arrivalDate = new Date("2022-01-01");
    expect.assertions(1);
    return validateInput(destinationName, arrivalDate).catch((e) =>
      expect(e).toMatch(
        `The arrival date entered is in the past.\n\nPlease enter a present or future-dated arrival date and then try again.`
      )
    );
  });

  test("Testing the validateInput() function with invalid input values: London (valid destination), Today's date + 7 days (invalid date since it is further in the future than the Weatherbit API supports for free future forecasts", () => {
    const destinationName = "London";
    let arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + 7); // Add 7 days to today's date.
    expect.assertions(1);
    return validateInput(destinationName, arrivalDate).catch((e) =>
      expect(e).toMatch(
        `The arrival date entered is more than 7 days in the future. We can only provide weather forecasts for 7 days from the present date.\n\nPlease enter a arrival date within 7 days from today's date and then try again.`
      )
    );
  });
});
