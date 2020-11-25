const User = require("../models/users.model.js");

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannotbe empty!"
        });
    }

    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        avatar: req.body.avatar,
        email: req.body.email,
        token: req.body.token,
        sex: req.body.sex,
        passport_1: req.body.passport_2,
        passport_2: req.body.passport_2,
        phone: req.body.phone,
        isVerified: req.body.isVerified,
        isPhoneVerified: req.body.isPhoneVerified,
        isEmailVerified: req.body.isEmailVerified,
        history: req.body.history,
        wallet: req.body.wallet,
        messages: req.body.messages,
        userprojects: req.body.userprojects,
        biddings: req.body.biddings,
        affiliate: req.body.affiliate,
        biddings: req.body.biddings,
        stats: req.body.stats
        
    });

    User.create(user, (err,data)=>{
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating a new user with method User."
        });
        else res.send(data);
    });
};

exports.findAll = (req,res) =>{
    User.getAll((err,data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving users"
        });
        else res.send(data);
    });
};

exports.findOne = (req,res) =>{
    User.findById(req.params.userId, (err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found user with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error while retrieving user with id " + req.params.userId
                });
            }
        } else res.send(data);
  });
};