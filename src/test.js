const request = require('supertest');
require('jest')
const app = require('./../index');

describe("First Test", () => {
    it("askfjsdf", async () => {
        await request(app)
            .get('/')
            .then((res) => {
                expect(res.status).toEqual(200);
            })
    })
})
