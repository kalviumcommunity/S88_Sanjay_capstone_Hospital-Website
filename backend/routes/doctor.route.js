    import express from "express"
    import {createDoctor,getDoctor,deleteDoctor,updateDoctor} from "../controller/doctor.controller.js";

    const router=express.Router();

    router.get("/", getDoctor)

    router.post("/", createDoctor);

    router.put("/:_id", updateDoctor);

    router.delete("/:_id", deleteDoctor);


    export default router;