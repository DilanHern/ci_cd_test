const request = require("supertest");
const app = require("../API/index");

describe("GET /", () => {
  it("should return success message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello from CI/CD with Vercel!");
  });
});
