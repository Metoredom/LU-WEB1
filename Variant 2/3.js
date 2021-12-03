function avgOfNumbers(numbers) {

    var sum = 0;
    var count = 0;
    numbers.forEach(element => {
        var number = parseInt(element, 10);
        if(!isNaN(number)){
            sum += number;
            count += 1;
        }
    });
   
    if(count > 0) return sum/validNumbers.length;
    else return 0;
};