function loginFN(){
    var userName=document.getElementById("userNameInput").value 
    localStorage.setItem("user",userName)
    window.location="kwitter_room.html"
    

}