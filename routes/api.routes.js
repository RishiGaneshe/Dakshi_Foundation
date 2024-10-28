const csurf=require('csurf')
const express= require('express')
const router= express.Router()
const multer = require('multer')
const API= require('../controllers/api.controllers.js')
const PAYMENT= require('../controllers/razorpay.controllers.js')
const { csfrProtection }= require('../middlewares/csrfTokens.middlewares.js')



const upload = multer({ dest: 'uploads/' });


router.get("/", API.handleGetLaunchPage)

router.get("/submit", API.handleGetVform)

router.get("/donate-data", API.handleGetDonationform)



router.get("/api/get-token" , API.handleGetCsrfToken)

router.post("/submit", upload.single('Image'), API.handePostVolunterData)

// router.post("/donate-data", API.handePostDonorData)

router.post("/partner-data", API.handlePostPartnerDetails)




router.post("/create-donation", PAYMENT.createOrder)

router.post("/payment-verification", PAYMENT.verifyPayment)



module.exports= router;