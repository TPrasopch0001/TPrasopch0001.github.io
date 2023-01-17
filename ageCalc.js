function getBirthday(){
    today = new Date().toLocaleDateString().split("/")
    bday = new Date("2003-08-19").toLocaleDateString().split("/")
    if((today[0] >= bday[0]) && (today[1] >= bday[1])){
        age = (new Date().toLocaleDateString().split("/")[2] - (new Date("2003-08-19").toLocaleDateString().split("/")[2]))
    }
    else{
        age = (new Date().toLocaleDateString().split("/")[2] - (new Date("2003-08-19").toLocaleDateString().split("/")[2]))-1
    }
    return age
}
document.getElementById("ageIntro").appendChild(document.createTextNode(getBirthday() + " years old"))