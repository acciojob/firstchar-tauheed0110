function firstChar(str){
    if(str.trim().length == 0){
        return '';
    }
    return str.trim().charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
