import Doctor from '../models/Doctor.model.js'

export const getDoctor=async(req,res)=>{
    try{
        const doctors =await Doctor.find({});
        res.status(200).json({sucess:true, data:doctors});  
    }catch(error){
        console.error("error in fetching the users",error.message);
        res.status(500).json({sucess:false,message:"Server Error"});    
    }
};

export const createDoctor=async(req, res) => {
    const doctor = req.body; 
    if (!doctor.name || !doctor.department ||!doctor.email || !doctor.DOB || !doctor. gender || !doctor.contactNumber ||!doctor.bloodgroup) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    
    const newDoctor = new Doctor(doctor);
    
    try {
        await newDoctor.save();
        res.status(201).json({ success: true, data: newDoctor });   
    } catch (error) {
        console.error("Error in creating user:", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
};  

export const updateDoctor= async(req,res)=>{
    const { _id } = req.params;
    const updatedData = req.body;

    try {
        const doctor = await Doctor.findById(_id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const updatedDoctor = await Doctor.findByIdAndUpdate(_id, updatedData, { new: true });
        res.status(200).json({ success: true, message: "User updated", patient: updatedDoctor });
    } catch (error) {
        console.error("Error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteDoctor= async (req, res) => {
    const { _id } = req.params;
    try {
        const doctor = await Doctor.findById(_id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: "User not found"});
        }

        await Doctor.findByIdAndDelete(_id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.error("Error in deleting user:", error.message);    
        res.status(500).json({ success: false, message: "Server error" });
    }
}
