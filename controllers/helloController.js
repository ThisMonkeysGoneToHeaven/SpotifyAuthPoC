function sayHello(req, res){
    const mssg = {
        message: 'hello!!!'
    }
    res.json(mssg);
}

module.exports = {sayHello}; 