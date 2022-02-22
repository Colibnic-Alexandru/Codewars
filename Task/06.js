function getMiddle(s){

    let evenOdd = s.length % 2 === 0
    let minMid = s.charAt(s.length/2-1)
    let mid = s.charAt(s.length/2)

    return (evenOdd == true)? minMid.concat(mid): mid
}