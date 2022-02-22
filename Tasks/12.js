function isIsogram(str){
    let lc = str.toLowerCase()

    let set = [...new Set(lc)].join('')

    return (set == lc ) ? true : false
}