function validation(uname,regx)  {
    return new Promise((resolve,reject) => {
        if (regx.test(uname) == false) {
            reject(uname + ' -> Not Valid');
        }
        else {
            resolve(uname + ' -> Valid');
        }
    });
}

const prompt = require('prompt-sync')({sigint: true});
console.log('***** User Inputs *****');
console.log('User first name start with capital letter with minimum 3 characters');
var firstname = prompt('First name ');
var regx = /^[A-Z]([\w]{3})([\w]+)?$/;
validation(firstname,regx).then((val) => console.log(val)).catch(error => console.log(error));
console.log('User email with special character');
var email = prompt('Email ');
var regx1 = /^([\w]+)(.)([\w]+)?(@)([\w]+)(.)([\w]{2,3})(.)?([\w]{2,3})?$/;
validation(email,regx1).then((val1) => console.log(val1)).catch(error1 => console.log(error1));
console.log('Country code follow by space and 10 digit number');
var mobile = prompt('Mobile ');
var regx2 = /^[9][1][\s][6789][\d]{9}$/;
validation(mobile,regx2).then((val2) => console.log(val2)).catch(error2 => console.log(error2));
console.log('Password starting with capital letter with special characters ');
var password = prompt('Password ');
var regx3 = /^[A-Z][\d]?([!@#$%^&*])([\w]{6})([\w]+)?$/;
validation(password,regx3).then((val3) => console.log(val3)).catch(error3 => console.log(error3));
console.log('***** Validation *****');



