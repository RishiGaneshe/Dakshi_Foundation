const logger= require('../services/logging.winston.js')

exports.apiReqLogger= async(req,res,next)=>{
  try{
      logger.ApiRequest.log('info',`Method: ${req.method}, url: ${req.url}`)
      next();
  }catch(err){
      console.log("Error in logging",err)
  }
}