import request from "supertest";
import app from "../../../Backend/app";

describe("Reclamation api" , () => {

    let token;
    
    it ("POST /login - should be login", async () => {
        const res = await request(app).post("/login").send({
            email : "chef@gmail.com",
            password : "1234567890"
        })
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("token");
        token = res.body.token;
    })

    it("GET /reclamation - should return all reclamation as array", async () => {
        const res = await request(app).get("/reclamation").set({ Authorization: `Bearer ${token}`});
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    description: expect.any(String),
                    level: expect.any(String),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    userId: expect.any(Number),
                    TechnicienId: expect.any(Number),
                })
            ])
        );
    })

    it("POST /reclamation - should create an reclamation from chef or client", async () => {
        console.log(token);
        const res = await request(app).post("/reclamation").send({
            description : "hellow world",
            level : "low",
            userId : 5,
            TechnicienId : 1,
        }).set({ Authorization: `Bearer ${token}`})
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject({
            id: expect.any(Number),
            description: expect.any(String),
            level: expect.any(String),
            userId: expect.any(Number),
            TechnicienId: expect.any(Number),
            updatedAt: expect.any(String),
            createdAt: expect.any(String)
        })
    })
})