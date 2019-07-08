function jediName(firstName,lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2);
}
console.log(jediName('Kiami','Mariah'));

function beyond(num) {
    if(num === Infinity || num === Infinity){
    console.log('And beyond!');
}
     if (num < 0) {
    console.log('To negative infinity');
}
     if (num > 0) {
    console.log('to infinity');
}
    else {
        console.log('Staying home');
    }
}

beyond(5);
beyond(7);
beyond(100);
beyond(0);
beyond(-33);

function decode(code) {
    let firstCharacter = code.charAt(0);
    if (firstCharacter === 'a'){
        return code.charAt(1);
    }
    if (firstCharacter === 'b'){
        return code.charAt(2);
    }
    if (firstCharacter === 'c'){
        return code.charAt(3);
    }
    if (firstCharacter === 'd'){
        return code.charAt(4);
    }
    else {
        return '';
    }
}

console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));
