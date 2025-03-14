// ek function dosre function main as a parameter pass hoto use kehte hain call back function

function login(callback) {
    console.log("user login");
    callback()
    
}

function userData() {
    return console.log("user data is here ");
    
}

login(userData)

// userdata ek callback functin hai kyn ke login ke undar araha hai