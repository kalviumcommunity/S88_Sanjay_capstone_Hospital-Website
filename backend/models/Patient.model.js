import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email:{
        type:String,
        required:true
      },
      DOB: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      bloodgroup:{
        type:String,
        required:true
      }
    },
    {
      timestamps: true, 
    }
  );
  
  const Patient = mongoose.model('Patient', patientSchema);
  
  
  export default Patient;