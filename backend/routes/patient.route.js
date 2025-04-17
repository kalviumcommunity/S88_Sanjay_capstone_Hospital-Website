    import express from "express"
    import {createPatient,getPatient,deletePatient,updatePatient} from "../controller/patient.controller.js";

    const router=express.Router();

    router.get("/", getPatient)

    router.post("/", createPatient);

    router.put("/:_id", updatePatient);

    router.delete("/:_id", deletePatient);


    export default router;