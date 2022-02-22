function filter_list(l) {
    let newL = [];
    for(let i=0;i<l.length;i++){

        if(typeof l[i]!='string'){
            newL.push(l[i]);
        }
    }
    return newL;
}