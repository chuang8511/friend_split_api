import { AccountController } from "../../controllers/AccountController"
import { Account } from "../../entity/Account.entity"
import { createRequest, createResponse } from "../utils/controllerTest.testUtils"


describe("AccountController", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
      });
    
    it("Successfully register an account", async() => {

        const req = createRequest({
            userName: "testuser",
            email: "test@example.com",
            password: "password",
          });

        const res = createResponse();

        const saveMock = jest.fn().mockResolvedValueOnce(undefined);
        jest.spyOn(Account.prototype, "save").mockImplementationOnce(saveMock);

        await AccountController.register(req, res);
        expect(saveMock).toHaveBeenCalledWith();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: "Account created successfully" });

        
    })

    it("Fail to register an account because of failure of saving data", async() => {
        
        const req = createRequest({
            userName: "testuser",
            email: "test@example.com",
            password: "password",
          });

        const res = createResponse();

        const saveMock = jest.fn().mockRejectedValueOnce(new Error("Save failed"));
        jest.spyOn(Account.prototype, "save").mockImplementationOnce(saveMock);

        await AccountController.register(req, res);

        expect(saveMock).toHaveBeenCalledWith();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Failed to create account" });
    })
})