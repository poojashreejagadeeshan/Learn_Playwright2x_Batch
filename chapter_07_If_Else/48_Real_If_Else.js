let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin can do any thing");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor - Edit access granted");
    }
    else if (userRole === "viewer") {
        console.log("Welcome viewer - Read only Access");
    }
    else {
        console.log("No idea you may be a guest! role")
    }
}
else {
    console.log("you are not logged in..")
}

//userRole === 'XYZ' then o/p will be "No idea you may be a guest role"