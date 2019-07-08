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

function daysInAMonth(month) {
     if (month === "January" || month === "March" || month === "May" || month === "July" || 
         month === "August" || month === "October" || month === "December") {
            console.log(`${month} has 31 days.`)
            return 31;
        }
    if (month === "April" || month === "June" || month === "September" ||
        month === "November") {
            console.log(`${month} has 30 days.`)
            return 30;
        }
    if (month ==="February") {
            console.log(`${month} has 28 days.`)
            return 28;
        }
    else {
            throw new Error("Not a valid month");
        }
    }
    
    try {daysInAMonth("February")}
    catch(e) {console.log(e.message)
    }

    function rps(hand) {
        const pchand = Math.floor(Math.random() * 3) + 1;
        
        if (hand === 1) {
            console.log("You picked rock")
        }
         if (hand === 2) {
            console.log("You picked paper")
        }
         if (hand === 3) {
            console.log("You picked scissors")
        }
        else {
            console.log("Not a valid answer. Please only use 1, 2, and 3")
            return;
        }
    
        if (pchand === 1) {
            console.log("The computer picked rock")
        }
         if (pchand === 2) {
            console.log("The computer picked paper")
        }
         if (pchand === 3) {
            console.log("The computer picked scissors")
        }
        else {
            console.log("Wrong Way")
            return;
        }
    
        if (hand === pchand) {
            console.log("It's a tie!")
        }
        else if (hand === 1 && pchand === 2) {
            console.log("You lose.")
        }
        else if (hand === 1 && pchand === 3) {
            console.log("You win!")
        }
        else if (hand === 2 && pchand === 1) {
            console.log("You win!")
        }
        else if (hand === 2 && pchand === 3) {
            console.log("You lose.")
        }
        else if (hand === 3 && pchand === 1) {
            console.log("You lose.")
        }
        else if (hand === 3 && pchand === 2) {
            console.log("You win!")
        }
        else {
            console.log("Nope.")
        }
    }
    
    rps();
