const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return success message and 200 status", async () => {
    const res = await request(app).get("/");

    // comprobación explícita del status
    expect(res.status).toBe(200);

    // comprobación del body
    expect(res.text).toBe("Hello from CI/CD Pipeline!");

    // opcional: comprobación de Content-Type
    expect(res.headers["content-type"]).toMatch(/html|text/);
  });

  it("also can use supertest chained assertions", async () => {
    await request(app)
      .get("/")
      .expect(200) // status
      .expect("Content-Type", /html|text/)
      .expect("Hello from CI/CD Pipeline!"); // body simple
  });
});