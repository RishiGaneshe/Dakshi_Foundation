const { createLogger, transports, format}= require('winston')


exports.apiLogger= createLogger({
    transports: [
        new transports.File({
            filename: './log/Api-response.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: './log/Api-response-errors.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})


exports.ApiRequest= createLogger({
    transports: [
        new transports.File({
            filename: './log/Api-request.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: './log/Api-request-error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})
