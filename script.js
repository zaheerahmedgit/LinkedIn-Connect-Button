var connect = document.querySelector("#connect")
var check = 0


connect.addEventListener("click", function () {
    if (check == 0) {
        connect.innerHTML = "Pending"
        connect.style.fontSize = "20px"
        connect.style.color = "black"
        connect.style.backgroundColor = "white"
        connect.style.border = "1.5px solid black"
        // connect.style.borderHover = "2px"
        check = 1
    } else{
        connect.innerHTML = "Connect"
        connect.style.fontSize = "20px"
        connect.style.color = "#fff"
        connect.style.backgroundColor = "#0A66C2"
        connect.style.border = "none"
        check = 0
    }
})
