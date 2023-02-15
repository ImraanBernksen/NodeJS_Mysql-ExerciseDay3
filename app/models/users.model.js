const sql = require("./db.js");

const User = function(user) {
    this.email = user.email;
    this.password= user.password;
  };

User.create = (newUser, result) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
}
  
    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
});
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM User WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    });
  };

  module.exports = User;