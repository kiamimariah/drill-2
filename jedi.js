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

