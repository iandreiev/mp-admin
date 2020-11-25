const sql = require("./db.js");

const User = function (user) {
    this.name = user.name;
    this.surname = user.surname;
    this.avatar = user.avatar;
    this.email = user.email;
    this.token = user.token;
    this.sex = user.sex;
    this.passport_1 = user.passport_1;
    this.passport_2 = user.passport_2;
    this.phone = user.phone;
    this.isVerified = user.isVerified;
    this.isPhoneVerified = user.isPhoneVerified;
    this.isEmailVerified = user.isEmailVerified;
    this.history = user.history;
    this.wallet = user.wallet;
    this.messages = user.messages;
    this.userprojects = user.userprojects;
    this.biddings = user.biddings;
    this.affiliate = user.email;
    this.stats = user.stats;
};


User.create = (newUser, result) => {

    const user = newUser
    //Check, if user exists
    sql.query("SELECT * FROM users WHERE email = ?", user.email, (err, rows)=>{

        const emailDb = rows[0] ? rows[0].email : '';

        if(!emailDb){
            sql.query("INSERT INTO users SET ?", user, (err, res)=>{
                if(err){
                    console.log(err);
                }

                // sql.query("UPDATE users SET wallet = ?", {id: res.insertId}, (err,res)=>{
                //     console.log("yep!", {id:res.insertId})
                //     result(null, {id: res.insertId})
                //     return;
                // } )

                console.log(null, {id: res.insertId, ...newUser});
                result(null, {id: res.insertId, ...newUser})
                return;                
            })
        }else{
            sql.query("SELECT * FROM users WHERE email = ?", rows[0].email, (err, res) => {
                console.log("Logged as: ", res[0]);
                result(null,res[0]);
                return;
            })
        }
    })
}

User.getAll = result => {
    sql.query("SELECT * FROM users", (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("shop: ", res);
          result(null, res);
    });
};



module.exports = User;
