const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);
const hello = require("./public/hello.js");

// it("Home page", async (done) => {
//   expect(1).toBe(1);
//   done();
// });

// it("works", async (done) => {
//   expect(hello).toBeTruthy();
//   done();
// });

// afterAll(async (done) => {
//   done();
// });
