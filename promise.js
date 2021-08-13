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

var firstname = "Pk123";
var regx = /^[A-Z]([\w]{3})([\w]+)?$/;
validation(firstname,regx).then((val) => console.log(val)).catch(error => console.log(error));
var firstname1 = "Pk1";
validation(firstname1,regx).then((val) => console.log(val)).catch(error => console.log(error));
var email = "abc.xyz@bl.co.in";
var regx1 = /^([\w]+)(.)([\w]+)?(@)([\w]+)(.)([\w]{2,3})(.)?([\w]{2,3})?$/;
validation(email,regx1).then((val1) => console.log(val1)).catch(error1 => console.log(error1));
var email1 = "abc.xyzbl.co";
validation(email1,regx1).then((val1) => console.log(val1)).catch(error1 => console.log(error1));
var mobile = "91 9876543210";
var regx2 = /^[9][1][\s][6789][\d]{9}$/;
validation(mobile,regx2).then((val2) => console.log(val2)).catch(error2 => console.log(error2));
var mobile1 = "91 987654321";
validation(mobile1,regx2).then((val2) => console.log(val2)).catch(error2 => console.log(error2));
var password = "Q7@wertyu3";
var regx3 = /^[A-Z][\d]?([!@#$%^&*])([a-zA-Z0-9]{7})([\w]+)?$/;
validation(password,regx3).then((val3) => console.log(val3)).catch(error3 => console.log(error3));
var password1 = "qwerty89";
validation(password1,regx3).then((val3) => console.log(val3)).catch(error3 => console.log(error3));


