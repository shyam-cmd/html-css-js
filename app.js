function handleEditProfile(){
     document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
    
    let inputName = document.getElementById("input-name")
    let name = document.getElementById("name")
    inputName.value=name.textContent
    let inputEmail = document.getElementById("input-email")
    let email = document.getElementById("email").textContent
    inputEmail.value = email

    let inputInterests = document.getElementById("input-interest")
    let interests = document.getElementById("interests").textContent
    inputInterests.value = interests

   
}
function handleUpdateProfile(){
    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
   
}

