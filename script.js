function firstChar(text){
    if(text.trim().length == 0){
        return '';
    }
    return text.trim().charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
