import Patient from '../models/Patient.model.js'

export const getPatient=async(req,res)=>{
    try{
        const patients =await Patient.find({});
        res.status(200).json({sucess:true, data:patients});
    }catch(error){
        console.error("error in fetching the users",error.message);
        res.status(500).json({sucess:false,message:"Server Error"});    
    }
};

export const createPatient=async(req, res) => {
    const patient = req.body; 
    if (!patient.name || !patient.email || !patient.DOB || !patient.gender || !patient.contactNumber || !patient.bloodgroup) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newPatient = new Patient(patient);
    
    try {
        await newPatient.save();
        res.status(201).json({ success: true, data: newPatient });
    } catch (error) {
        console.error("Error in creating user:", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updatePatient= async(req,res)=>{
    const { _id } = req.params;
    const updatedData = req.body;

    try {
        const patient = await Patient.findById(_id);
        if (!patient) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const updatedPatient = await Patient.findByIdAndUpdate(_id, updatedData, { new: true });
        res.status(200).json({ success: true, message: "User updated", patient: updatedPatient });
    } catch (error) {
        console.error("Error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deletePatient= async (req, res) => {
    const { _id } = req.params;
    try {
        const patient = await Patient.findById(_id);
        if (!patient) {
            return res.status(404).json({ success: false, message: "User not found"});
        }

        await Patient.findByIdAndDelete(_id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error("Error in deleting user:", error.message);    
        res.status(500).json({ success: false, message: "Server error" });
    }
}
