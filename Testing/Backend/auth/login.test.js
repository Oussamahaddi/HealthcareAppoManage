import request from "supertest";
import app from "../../../Backend/app.js"

describe("login api", () => {
    it ("POST /login - should be login", async () => {
        const res = await request(app).post("/login").send({
            email : "oussama@gmail.com",
            password : "1234567890"
        })
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("token");
    })
})