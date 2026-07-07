let isLoggedIn = true;
let userRole = "admin";
if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Admin can access all resources.");
    } else if (userRole === "editor") {
        console.log("Editor can edit content.");
    } else if (userRole === "viewer") {
        console.log("User can view content.");
    } else {
        console.log("Invalid user role.");
    }
} else {
    console.log("Please log in to access the system.");
}