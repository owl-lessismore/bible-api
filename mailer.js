const nodemailer = require('nodemailer')

let mailer = {};

let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: usernameHere,
        pass: passwordHere
    }
});

mailer.sendBibleVerse = (content) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(email, function(err, info) {
            if (err) {
                return reject(err);
            } else {
                return resolve({
                    "status": "email_sent",
                    "info": info
                });
            }
        });
    });
};


module.exports = mailer;
