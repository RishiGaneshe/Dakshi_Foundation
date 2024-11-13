const { appendDataToSheet }= require('../services/googleApi.services.js')
const { appendDataToDonorSheet }= require('../services/donorformData.js')
const { appendDataToPartnerSheet }= require('../services/partnerFormData.js')
const logger= require('../services/logging.winston.js')


exports.handleGetLaunchPage= async(req,res)=>{
  try{
      return res.sendFile('index.html')
  }catch(err){
      console.log("Error in Sending Launch Page.",err)
      res.status(500).json({msg:"Internal Server Error"})
  }
}


exports.handleGetCsrfToken= async( req,res)=>{
  try{
      const csrfToken = req.csrfToken();
      res.cookie('XSRF-TOKEN', csrfToken, { httpOnly: true }); 
      logger.apiLogger.log('info','token provided successfully.')
      return res.status(200).json({ csrfToken });
  }catch(err){
      console.log("Error in Sendin Token",err)
      logger.apiLogger.log('error','Unable to provide Token.')
      return res.status(500).json({msg:"Internal Server Error"})
  }
}


exports.handePostVolunterData= async(req,res)=>{
  try{
      const { Name, Fathers_Name, Mobile_No, Email, Qualification, Work_Experience, Address, About_You }= req.body
      const imageFile = req.file;

      if (!Name || !Fathers_Name || !Mobile_No || !Email || !Qualification || !Work_Experience || !Address || !About_You) {
        return res.status(400).send('Please fill in all fields.');
      }

      try{
          const statusCode= await appendDataToSheet( Name, Fathers_Name, Mobile_No, Email, Qualification, Work_Experience, Address, About_You, imageFile)
            if(statusCode===200){
              logger.apiLogger.log('info','Volunteer Data submitted successfully.')
              return res.status(200).json({msg:"Data Submitted Successfully"})
            }else{
              console.log("status code: ", statusCode)
              logger.apiLogger.log('info','Problem in submitting Volunteer Data.')
            }
      }catch(err){
          console.log("Error in Data Submission.",err)
          logger.apiLogger.log('error',`Error in the volunteer data submission`)
          res.status(500).json({msg:"Error submitting data. Please try again."})
      }
  }catch(err){
      console.log("Error in Data Submission.",err)
      logger.apiLogger.log('error',`Error in the volunteer data submission.`)
      res.status(500).json({msg:"Error submitting data. Please try again."})
  }
}


exports.handePostDonorData= async(req,res)=>{
  try{
      const { Name, Mobile_No, Email, Address, AdharId, Donation, Toward, Remark }= req.body
       
      if ( !Name || !Mobile_No || !Email || !Address || !AdharId || !Donation  || !Toward || !Remark) {
        return res.status(400).send('Please fill in all fields.');
      }

      try{
          const statusCode= await appendDataToDonorSheet( Name, Mobile_No, Email, Address, AdharId, Donation, Toward, Remark )
            if(statusCode===200){
              logger.apiLogger.log('info','Donor Data submitted successfully.')
              return res.status(200).json({msg:"Data Submitted Successfully"})
            }else{
              console.log("status code: ", statusCode)
              logger.apiLogger.log('info','Problem in submitting Partner Data.')
            }
      }catch(err){
          console.log("Error in Data Submission.",err)
          logger.apiLogger.log('error',`Error in Donor Data submission.${err}`)
          res.status(500).json({msg:"Error submitting data. Please try again."})
      }
  }catch(err){
      console.log("Error in Data Submission.",err)
      logger.apiLogger.log('error',`Error in Donor Data submission.${err}`)
      res.status(500).json({msg:"Error submitting data. Please try again."})
  }
}



exports.handlePostPartnerDetails= async(req,res)=>{
  try{
      const { companyName, contactPersonName, email,  phoneNumber,  websiteLink, address, missionStatement }= req.body
      
      if( !companyName || !contactPersonName || !email ||  !phoneNumber || !address ){
          return res.status(400).send('Please fill in all fields.');
      }
      
      try{
          const statusCode= await appendDataToPartnerSheet( companyName, contactPersonName, email,  phoneNumber,  websiteLink, address, missionStatement )
          if(statusCode===200){
              console.log("Partner Data submitted successfully.")
              logger.apiLogger.log('info','Partner Data submitted successfully.')
              return res.status(200).json({msg:"Data Submitted Successfully"})
          }else{
              console.log("status code: ", statusCode)
              logger.apiLogger.log('info','Problem in submitting Partner Data.')
          }
      }catch(err){
          console.log("Error in Partner Data Submission.",err)
          logger.apiLogger.log('error',`Error in Partner Data submission.${err}`)
          res.status(500).json({msg:"Error submitting Partner data. Please try again."})
      }
    
  }catch(err){
      console.log("Error in Partner Form Data Submission.",err)
      logger.apiLogger.log('error',`Error in Partner Form Data Submission.${err}`)
      res.status(500).json({msg:"Error in Partner Form Data Submission."})
  }
}
