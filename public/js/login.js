$("#login").submit(event =>{
    event.preventDefault();
    $.post("/login", {
        username: $("#username").val(),
        password: $("#password").val(),
    }).then(data=>{
        console.log("Logged in.")
        window.location.href = "/"
    }).fail(err=>{
        console.log("Login failed, try again.");
        console.log(err);
        alert("Please try again.");
    })
})