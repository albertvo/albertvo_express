var check = require('validator').check,
    sanitize = require('validator').sanitize

var EmailMessage = {
    send: function (user, key) {
        var SendGrid = require('sendgrid').SendGrid;
        var sendgrid = new SendGrid(user, key);        
        
        check(this.emailaddress).len(6, 64).isEmail();
        sendgrid.send({
            to: 'work@albertvo.com',
            from: this.emailaddress,
            subject: 'Someone saw your resume on albertvo.com',
            text: this.messagebody
        }, function (success, message) {
            this.isSent = success;
            this.statusMessage = message;
            return this;
        });
        
        return this;
    }
};


exports.api = function(req, res){
    res.send(' Message API is running'); 
};

exports.sendmessage = function (req, res) {
    var email = Object.create(EmailMessage);
    email.name = req.body.fullname;
    email.emailaddress = req.body.emailaddress;
    email.messagebody = req.body.messagebody;
    var result = email.send('azure_48e4de76760017afeab7594d0a424edf@azure.com', '03caguxr');
    res.send(JSON.stringify(result));
};