let text = new Array();
text = ['H','e','l','l','o',' ','W','o','r','l','d'];
var codeSect = document.getElementById("code");
let string ="";

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function printText(){
    for(let i =0; i< text.length;i++){
        string+=text[i];
        await delay(100);
        codeSect.innerText = string;
    }
}
async function removeText(){
    for(let i = 0; i < text.length; i++){
    string = string.slice(0,string.length-1);
    await delay(100);
    codeSect.innerText = string;
    }
    await delay(100);
    codeSect.innerHTML = "Hello World";
}
