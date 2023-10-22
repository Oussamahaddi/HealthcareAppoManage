import request from "supertest";
import app from "../../../Backend/app.js";

describe("technicien API crud", () => {
    let createdTechnicienId;

    it("POST /technicien/create - should create a new technicien record and return it", async () => {
        const reqBody = {
            first_name: "abas11",
            last_name: "Doe",
            email: "abbbbsi@example.com",
            profile_image: "profile.jpg",
            password: "somepassword", 
            dispo: true
        };

        const res = await request(app).post("/technicien/create").send(reqBody);

        expect(res.status).toBe(201);
        expect(res.body).toMatchObject({
            id: expect.any(Number), 
            dispo: true,
            user: {
                id: expect.any(Number), 
                first_name: "abas11",
                last_name: "Doe",
                email: "abbbbsi@example.com",
                profile_image: "profile.jpg",
                password: expect.any(String), 
                role: "technicien",
                actor_id: expect.any(Number), 
                createdAt: expect.any(String), 
                updatedAt: expect.any(String) 
            },
            createdAt: expect.any(String), 
            updatedAt: expect.any(String) 
        });

        createdTechnicienId = res.body.id;
    });

    it("GET /technicien - should return all technicien records", async () => {
        const res = await request(app).get("/technicien");

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);

        if (res.body.length > 0) {
            const firstTechnicien = res.body[0];
            expect(firstTechnicien).toMatchObject({
                id: expect.any(Number), 
                dispo: expect.any(Boolean), 
                user: expect.objectContaining({
                    id: expect.any(Number), 
                    first_name: expect.any(String), 
                    last_name: expect.any(String), 
                    email: expect.any(String), 
                    profile_image: expect.any(String), 
                    password: expect.any(String), 
                    role: "technicien",
                    actor_id: expect.any(Number), 
                    createdAt: expect.any(String), 
                    updatedAt: expect.any(String) 
                }),
                createdAt: expect.any(String), 
                updatedAt: expect.any(String) 
            });
        }
    });

    it("GET /technicien/:id - should return a specific technicien record", async () => {
        const res = await request(app).get(
            `/technicien/${createdTechnicienId}`
        );

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: expect.any(Number), 
            dispo: expect.any(Boolean), 
            user: expect.objectContaining({
                id: expect.any(Number), 
                first_name: expect.any(String), 
                last_name: expect.any(String), 
                email: expect.any(String), 
                profile_image: expect.any(String), 
                password: expect.any(String), 
                role: "technicien",
                actor_id: expect.any(Number), 
                createdAt: expect.any(String), 
                updatedAt: expect.any(String) 
            }),
            createdAt: expect.any(String), 
            updatedAt: expect.any(String) 
        });
    });

    it("PUT /technicien/update/:id - should update a technicien record and return it", async () => {
        const reqBody = {
            first_name: "UpdatedFirstName",
            last_name: "UpdatedLastName",
            email: "updated.email@example.com", 
            profile_image: "updated_profile.jpg", 
            dispo: false 
        };

        const res = await request(app)
            .put(`/technicien/update/${createdTechnicienId}`)
            .send(reqBody);

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: expect.any(Number),
            dispo: false, 
            user: expect.objectContaining({
                id: expect.any(Number),
                first_name: "UpdatedFirstName",
                last_name: "UpdatedLastName",
                email: "updated.email@example.com", 
                profile_image: "updated_profile.jpg",
                password: expect.any(String),
                role: "technicien",
                actor_id: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }),
            createdAt: expect.any(String),
            updatedAt: expect.any(String)
        });
    });

    it("DELETE /technicien/:id - should delete a technicien record and return 204", async () => {
        const res = await request(app).delete(
            `/technicien/delete/${createdTechnicienId}`
        );

        expect(res.status).toBe(204);
    });
});
