var mysql = require('mysql');
var inquirer = require('inquirer');
const { userInfo } = require('os');

var connection = mysql.createConnection({
    host:"localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "bamazonhw_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connection succssful");
    makeTable();
})

var makeTable = function(){
    connection.query("Select * From products", function(err,res){
       for(var i=0; i<res.length; i++){
           console.log(res[i].itemid+" || "+res[i].productname+" || "+res[i].departmentname+" ||"
           +res[i].price+" || "+res[i].stockquantity+"\n");
       }
    
       
    });
}