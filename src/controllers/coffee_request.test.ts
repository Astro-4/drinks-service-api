import request from "supertest";
import { coffee } from "../coffee";
// ⚠️ This should error as "../app" doesn't exist yet!
describe("Test coffee API endpoint request", () => {
  test("GET should return correct message", async () => {
    const res = await request(coffee).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");
  });
});
