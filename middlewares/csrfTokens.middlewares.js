const csurf= require('csurf')


exports.csfrProtection= csurf({
    cookie: {
        httpOnly: true, 
        secure: false,  
    },
    value: (req) => {
        return req.cookies['XSRF-TOKEN'] || req.body.csrfToken; 
    }
})

