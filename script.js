const year = 2032

if (year % 4 === 0 || year % 100 === 0 && year % 400 === 0){
    console.log(' is leap');
}else{
    console.log('not leap');
}
