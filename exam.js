

function Days(first,second){
    const date1 = new Date(first);
    const date2 = new Date(second);
    const oneDay = 1000*60*60*24;
    const difftime= date2.getTime()-date1.getTime();
    const diffDays= Math.round(difftime/oneDay);
    return diffDays;
}
console.log(Days("Decemer 29, 2018","January 1, 2019"));