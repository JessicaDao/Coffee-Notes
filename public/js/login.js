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
$("#signup").submit(event =>{
    event.preventDefault();
    $.post("/signup", {
        username: $("#username").val(),
        password: $("#password").val(),
    }).then(data=>{
        console.log("All set!")
        window.location.href = "/"
    }).fail(err=>{
        console.log("Sign up did not go through, please try again.");
        console.log(err);
        alert("Sign up did not go through, please try again.");
    })
})

$("#add").submit(event=>{
    event.preventDefault();
    $.post('/api/journal',{
        coffee_name:$("#coffee_name").val(),
        producer:$("#producer").val(),
        coffee_bean:$("#coffee_bean").val(),
        brew_method:$("#brew_method").val(),
        taste:$("#taste").val(),
        rate:$("#rate").val(),
        price:$("#price").val(),
        location:$("#location").val(),
        notes:$("#notes").val()
    }).then(data=>{
        window.location.href="/"
    }).fail(err=>{
        alert("Failed, try again");
    })
})