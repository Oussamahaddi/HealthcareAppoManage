import request from "supertest";
import app from "../../../Backend/app.js";

describe('Client api', () => {
    it("GET /client - should return all user as array " , async () => {
        const res = await request(app).get("/client");
        expect(res.statusCode).toBe(200);
    })

    it("POST /client/create - should create new client " , async () => {
        const {body, statusCode} = await request(app).post("/client/create").send({
            first_name : "test1",
            last_name : "test1",
            email : "test1@gmail.com",
            password : "1235467890",
            profile_image : "test1",
        })
        expect(statusCode).toBe(201);
        expect(body).toHaveProperty("token");
    })
});