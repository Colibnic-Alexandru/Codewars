function reverseWords(str) {

    let splitString = str.split('');

    function values(prev,curr){

        return prev + curr;

    }

    let reverseWords = [].reduceRight.call(splitString,values);

    return reverseWords.split(' ').reverse().join(' ');

}