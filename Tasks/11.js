function divisors(integer) {

    let nums = [];

    for (let i = 2; i < integer; i++) {

        if (integer % i === 0) {

            nums.push(i);
        }
    }

    return nums.length > 0 ? nums : integer + " is prime";
};