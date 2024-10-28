const razorpay= require('razorpay')


exports.createRazorpayInstance= async ()=>{
  try{
      const RazorpayInstance= new razorpay({
         key_id: 'rzp_test_bVnwqq5GvuvOi4',
         key_secret: 'qvBOBp0ErsczSBd6CkNhXSi8'
      })
      return RazorpayInstance
  }catch(err){
      console.log("Error in creating Razorpay Instance.",err)
  }
}

// key : qvBOBp0ErsczSBd6CkNhXSi8