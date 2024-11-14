const {google}= require('googleapis')
const path= require('path')
const fs= require('fs')


const spreadsheetId = '';             // The ID from the Google Sheets URL


const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'dakshi-foundation-2e4f49ebc7c6.json'),         // Path to service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
  });
  


  exports.appendDataToDonorSheet=async (Name, receiptNumber ,Mobile_No, Email, Address, AdharId, Donation, Mode, Toward, Remark )=> {
    try{
        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });
  
        const request = {
              spreadsheetId,
              range: 'Sheet1!A1:C1',                                                           // Adjust based on where you want to append data
              valueInputOption: 'USER_ENTERED',
              resource: {
                  values: [[Name, receiptNumber, Mobile_No, Email, Address, AdharId, Donation, Mode, Toward, Remark ]], // Data to append
              },
        };
        try{
            const result= await sheets.spreadsheets.values.append(request);
            return result.status
        }catch(err){
            console.log("Error In Submiting Data.",err)
        }
    }catch(err){
            console.log("Error In Data Submiting  Function.",err)
    }
  }
  
