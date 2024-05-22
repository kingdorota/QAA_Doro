const axios = require("axios");
const { expect } = require("chai");

describe("httpbin.org API tests", () => {
  const baseURL = "https://httpbin.org";

  async function measureRequestDuration(request) {
    const startTime = new Date().getTime();
    const response = await request();
    const endTime = new Date().getTime();
    response.duration = endTime - startTime;
    return response;
  }

  it("should handle GET request", async () => {
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/get`)
    );
    expect(response.status).to.equal(200);
    expect(response.data.url).to.equal(`${baseURL}/get`);
    console.log(`GET request duration: ${response.duration} ms`);
  });

  it("should handle POST request with data", async () => {
    const postData = { name: "John", age: 30 };
    const response = await measureRequestDuration(() =>
      axios.post(`${baseURL}/post`, postData)
    );
    expect(response.status).to.equal(200);
    expect(response.data.json).to.deep.equal(postData);
    console.log(`POST request duration: ${response.duration} ms`);
  });

  it("should handle PUT request with data", async () => {
    const putData = { name: "Jane", age: 25 };
    const response = await measureRequestDuration(() =>
      axios.put(`${baseURL}/put`, putData)
    );
    expect(response.status).to.equal(200);
    expect(response.data.json).to.deep.equal(putData);
    console.log(`PUT request duration: ${response.duration} ms`);
  });

  it("should handle DELETE request", async () => {
    const response = await measureRequestDuration(() =>
      axios.delete(`${baseURL}/delete`)
    );
    expect(response.status).to.equal(200);
    console.log(`DELETE request duration: ${response.duration} ms`);
  });

  it("should handle sending and receiving standard headers", async () => {
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/headers`, {
        headers: {
          "User-Agent": "axios-test-agent",
        },
      })
    );
    expect(response.status).to.equal(200);
    expect(response.data.headers["User-Agent"]).to.equal("axios-test-agent");
    console.log(`Standard headers request duration: ${response.duration} ms`);
  });

  it("should handle sending and receiving custom headers", async () => {
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/headers`, {
        headers: {
          "X-Custom-Header": "CustomHeaderValue",
        },
      })
    );
    expect(response.status).to.equal(200);
    expect(response.data.headers["X-Custom-Header"]).to.equal(
      "CustomHeaderValue"
    );
    console.log(`Custom headers request duration: ${response.duration} ms`);
  });

  it("should handle sending query parameters", async () => {
    const params = { key1: "value1", key2: "value2" };
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/get`, { params })
    );
    expect(response.status).to.equal(200);
    expect(response.data.args).to.deep.equal(params);
    console.log(`Query parameters request duration: ${response.duration} ms`);
  });

  it("should handle random query parameters", async () => {
    const randomValue = Math.random().toString(36).substring(7);
    const params = { randomKey: randomValue };
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/get`, { params })
    );
    expect(response.status).to.equal(200);
    expect(response.data.args.randomKey).to.equal(randomValue);
    console.log(
      `Random query parameters request duration: ${response.duration} ms`
    );
  });

  it("should check the response content", async () => {
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/json`)
    );
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an("object");
    expect(response.data).to.have.property("slideshow");
    console.log(`Response content check duration: ${response.duration} ms`);
  });

  it("should check the response time", async () => {
    const response = await measureRequestDuration(() =>
      axios.get(`${baseURL}/delay/1`)
    );
    expect(response.status).to.equal(200);
    expect(response.duration).to.be.at.least(1000);
    console.log(`Response time check duration: ${response.duration} ms`);
  });
});
