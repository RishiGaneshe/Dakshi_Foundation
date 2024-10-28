const {google}= require('googleapis')
const path= require('path')
const fs= require('fs')


const spreadsheetId = '1VbnqwBzaGLjg0B3bzSqpnR8oSP1y_xcc6UQP3nR1HhQ';             // The ID from the Google Sheets URL
const DonorSheetId = '1nIT4uTEPYJYrxTOvb4JWj-FFiYZmeyCHp9qgTZYR4Rw'
const PartnerSheetId= '1kt_5B9-pvY9CMknw9ueKy2ZRK4VvyK-qUNlwgTxStSE'



const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'dakshi-foundation-2e4f49ebc7c6.json'),         // Path to service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
  });
  


exports.appendDataToSheet=async (Name, Fathers_Name, Mobile_No,Email, Qualification, Work_Experience, Address, About_You, imageFile)=> {
  try{
      const authClient = await auth.getClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });

      const imageUrl = await uploadImageToDrive(authClient, imageFile.path, Name);


      const request = {
            spreadsheetId,
            range: 'Sheet1!A1:C1',                                                           // Adjust based on where you want to append data
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[Name, Fathers_Name, Mobile_No, Email, Qualification, Work_Experience, Address, About_You, imageUrl]], // Data to append
            },
      };
      try{
          await sheets.spreadsheets.values.append(request);
          console.log("Data Submitted Successfully")
      }catch(err){
          console.log("Error In Submiting Data.",err)
      }
  }catch(err){
          console.log("Error In Data Submiting  Function.",err)
  }
}


async function uploadImageToDrive(authClient, filePath, fileName) {
    const drive = google.drive({ version: 'v3', auth: authClient });

    const fileMetadata = {
        name: `profile-pic-${fileName}`,
    };

    const media = {
        mimeType: 'image/jpeg', // Adjust based on file type
        body: fs.createReadStream(filePath),
    };

    try {
        const response = await drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id, webViewLink',
        });

        const fileId = response.data.id;
        const imageUrl = response.data.webViewLink;

        // Make the file publicly viewable
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        return imageUrl;
    } catch (error) {
        console.error('Error uploading image to Google Drive:', error);
        throw error;
    }
}



exports.appendDataToDonorSheet=async (Name, Mobile_No, Email, Address, AdharId, Donation, Toward, Remark )=> {
    try{
        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });
  
        const request = {
              DonorSheetId,
              range: 'Sheet1!A1:C1',                                                           // Adjust based on where you want to append data
              valueInputOption: 'USER_ENTERED',
              resource: {
                  values: [[Name, Mobile_No, Email, Address, AdharId, Donation , Toward, Remark ]], // Data to append
              },
        };
        try{
            await sheets.spreadsheets.values.append(request);
            console.log("Data Submitted Successfully")
        }catch(err){
            console.log("Error In Submiting Data.",err)
        }
    }catch(err){
            console.log("Error In Data Submiting  Function.",err)
    }
  }
  


  exports.appendDataToPartnerSheet=async (companyName, contactPersonName, email,  phoneNumber,  websiteLink, address, missionStatement )=> {
    try{
        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });
  
        const request = {
              PartnerSheetId,
              range: 'Sheet1!A1:C1',                                                           // Adjust based on where you want to append data
              valueInputOption: 'USER_ENTERED',
              resource: {
                  values: [[companyName, contactPersonName, email,  phoneNumber,  websiteLink, address, missionStatement ]], // Data to append
              },
        };
        try{
            await sheets.spreadsheets.values.append(request);
            console.log("Data Submitted Successfully")
        }catch(err){
            console.log("Error In Submiting Data.",err)
        }
    }catch(err){
            console.log("Error In Data Submiting  Function.",err)
    }
  }
  