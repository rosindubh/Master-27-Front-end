export const fetchRequest = async (username, email, pass, setter) => {
    try {
        const response = await fetch("https://postcard-pals.herokuapp.com/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: username,
                email: email,
                password: pass,
            }),
        });
        const data = await response.json();
            // console.log(data.user.name);
            setter(data.user)
            localStorage.setItem("myToken", data.token)
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, pass, setter) => {
    try {
        const response = await fetch("https://postcard-pals.herokuapp.com/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: pass,
            }),
        });
        console.log(response) //output to console for testing purposes 
        const data = await response.json();
        console.log(`${data.user.name} has logged in`)
        localStorage.setItem("myToken", data.token)
        setter(data.user)
    } catch (error) {
        console.log(error, "AN ERROR OCCURED in login FRONTEND, check username and password")
    }
}

export const sendNotification = async (email, secure_url) => {
    try {
        await fetch("https://postcard-pals.herokuapp.com/user/notification", {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                secure_url,
            }),
        });
        // console.log(response) //output to console for testing purposes 
        // const data = await response.json();
        // localStorage.setItem("myToken", data.token)
        // setter(data.user)
    } catch (error) {
        console.log(error, "Postcard wasn't sent")
    }
}

// User.findOneAndUpdate({username: req.body.username}, {$push: {notifications: req.body.publicID}})

