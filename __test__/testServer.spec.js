/*
Test if the Express server can return data by querying a GET route on the server.
Code adapted from: https://www.codingninjas.com/codestudio/library/testing-express-app-with-jest
Also see the following URL for an Express server Jest test example that evaluates the promise and result returned by the server: https://github.com/mdarban66/Evaluate_News_NLP_Udacity/blob/master/src/__test__/server.test.js
Important note: The Express server must be in a stopped state for this test to pass (so that Jest can instantiate a new instance of the Express server running on the same TCP port that is specified in the server.js file).
*/
const request = require("supertest");
const server = require("../src/server/server");

describe("Testing the Express server.", () => {
  test("Test if a GET route on the Express server returns a response with a status code of 200 (i.e., a HTTP 200 OK success status response code, indicating that the HTTP request has succeeded).", async () => {
    const response = await request(server).get("/getdata");
    expect(response.statusCode).toBe(200);
  });
});
