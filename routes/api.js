var Message = {
  send: function () {
    return "message " + this.name + " sent";
  }
};


exports.api = function(req, res){
    res.send(' Message API is running'); 
};

exports.sendmessage = function (req, res) {
    var m = Object.create(Message);
    m.name = "Albert";
    var result = m.send();
    res.send(result);
};