// Code your solutions in this file

let array = ["Guadalupe", "Ollie", "Aki"]
function writeCards(array){
    let messages = []
    for (let i = 0; i < array.length; i++){
        messages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
writeCards(array);

function countDown(){
    for (let i=0; i < 11; i++){
        console.log(i);
    }
}
countDown()