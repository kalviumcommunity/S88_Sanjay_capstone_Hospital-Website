import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      department:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
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
        required:true,
      }
    },
    {
      timestamps: true, 
    }
  );
  
  const Doctor = mongoose.model('Doctor', doctorSchema);
  
  
  export default Doctor;