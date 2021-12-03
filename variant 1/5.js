function compare(a, b) {
    var flag = true;


    for (var key in b) {
        if (a[key] !== b[key]){
            flag = false;
            break;
        }
    }
    return flag;

}


console.log(compare({hair:'long', beard:true}, {hair:'long', beard:true}));
console.log(compare({age:25, hair:'long', beard:true}, {hair:'long', beard:true}));
console.log(compare({hair:'long', beard:true}, {age:25, hair:'long', beard:true}));
console.log(compare({hair:'long', beard:true}, {hair:'long', beard:false}));
