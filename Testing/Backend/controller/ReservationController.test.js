import request from "supertest";
import app from "../../../Backend/app";

describe("Reservation api" , () => {

    let token;
    
    it ("POST /login - should be login", async () => {
        const res = await request(app).post("/login").send({
            email : "client1@gmail.com",
            password : "1234567890"
        })
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("token");
        token = res.body.token;
    })

    it("GET /reservation - should return all reclamation as array", async () => {
        const res = await request(app).get("/reservation").set({ Authorization: `Bearer ${token}`});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    reservationState: expect.any(String),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    userId: expect.any(Number),
                    SuccurcalId: expect.any(Number),
                    user: {
                        id: expect.any(Number),
                        first_name:expect.any(String),
                        last_name: expect.any(String),
                        email: expect.any(String),
                        profile_image: expect.any(String),
                        role: expect.any(String),
                        actor_id: expect.any(Number),
                        createdAt: expect.any(String),
                        updatedAt: expect.any(String)
                    }
                })
            ])
        );
    })

    it("POST /reservation - should create an reservation from client or company", async () => {
        console.log(token);
        const res = await request(app).post("/reservation").send({
            userId : 5,
            SuccurcalId : 1,
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