var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var userModel = {
  getAllUser: getAllUser,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getUserById: getUserById
}

function getAllUser() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM user", (error, rows, fields) => {
      if (!!error) {
        dbFunc.connectionRelease;
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    });
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM user WHERE id =" + id.id, (error, rows, fields) => {
      if (!!error) {
        dbFunc.connectionRelease;
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    });
  });
}

function addUser(user) {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO user(username,name)VALUES('" + user.username + "','" + user.name + "')", (error, rows, fields) => {
      if (error) {
        dbFunc.connectionRelease;
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    });
  });
}


function updateUser(id, user) {
  return new Promise((resolve, reject) => {
    db.query("UPDATE user set username='" + user.username + "',name='" + user.name + "' WHERE id='" + id + "'", (error, rows, fields) => {
      if (!!error) {
        dbFunc.connectionRelease;
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    });
  })
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM user WHERE id='" + id + "'", (error, rows, fields) => {
      if (!!error) {
        dbFunc.connectionRelease;
        reject(error);
      } else {
        dbFunc.connectionRelease;
        resolve(rows);
      }
    });
  });
}


module.exports = userModel;
