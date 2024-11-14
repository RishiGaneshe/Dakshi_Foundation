const razorpay= require('razorpay')


exports.createRazorpayInstance= async ()=>{
  try{
      const RazorpayInstance= new razorpay({
         key_id: 'rzp_test_blow_bVnwqq5GvuvOi4_job',
         key_secret: 'ASGqvBOBp0ErsczSBd6CkNhXSi8ASG'
      })
      return RazorpayInstance
  }catch(err){
      console.log("Error in creating Razorpay Instance.",err)
  }
}

