//                      homeWork 24.04.20
//First task 
function coubNumber(){
let validNumber = true;
let a = 0;
while(validNumber){
a = +prompt ('Введіть число яке хочете піднести до кубу');
    if (typeof a === 'number'){
        validNumber = false;
    }
}
function numberToCoub (firstNum){ 
     return firstNum *= firstNum * firstNum;
}
let b = numberToCoub(a);
alert(b);
}
//
//Second task ();
function mathematic(){
function mathOperations (firstNum, secondNum, thirdNum){
    return resultTmp = Math.round((firstNum + secondNum)/thirdNum);
}
let arrayNums = [];
let resultTmp = 0;
let result = 0;
for (let i = 0; i < 3; i++){
    arrayNums.push(+prompt('Введіть число'));
}
result = mathOperations(arrayNums[0], arrayNums[1], arrayNums[2]);
alert(result);
}

//Third task
/*   Не робоча версія

function selectDay(dayNumber){
    let dayArrays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
    for (let i = 0; i < dayArrays.length; i++){
        if (dayArrays[i] === dayNumber){
            alert(dayArrays[i]);
        } 
    }
}
let enterDay =+prompt('Введіть номер дня');
selectDay(enterDay);
*/

function checkDay(){ 
function selectDay(dayNumber){
    let dayArrays = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
    if(dayNumber > 0 && dayNumber <= 7){
        alert(dayArrays[dayNumber - 1]);
        } else {
            alert('Помилка');
        }
}
let enterDay =+prompt('Введіть номер дня');
selectDay(enterDay);
}    

//Fourth task
function giveFacto(){
function countFactorial (value){
    let flag = 1;
    for (let i = 1; i <= value; i++){
        flag *= i;
    }
    alert(`${value}! = ${flag}`);
}
let value =+prompt('Введіть число, факторіал якого бажаєте знайти');
countFactorial(value);
}

//Five task
function convertToSecond(){
let hourMinSec = {
    hours: 0,
    minutes: 0,
    second: 0
}
hourMinSec.hours =+prompt('Введіть години');
hourMinSec.minutes =+prompt('Введіть хвилини');
hourMinSec.second =+prompt('Введіть секунди');
function convertSecond(hours, minutes, second) {
    second += hourMinSec.minutes * 60;
    second += hourMinSec.hours * 3600;
    alert(second);
}
convertSecond(hourMinSec.hours, hourMinSec.minutes, hourMinSec.second); 
}

//Six task
function convertMe() {
function convertingSecond (second){
    let timesObj = {
         hours: 0,
         minutes: 0,
         second: 0
    }
    timesObj.hours = Math.floor(second / 3600);
    timesObj.minutes = Math.floor((second % 3600) / 60);
    timesObj.second = Math.floor((second % 3600) % 60);
    if (timesObj.hours <= 23 && timesObj.minutes <= 59 && timesObj.second <= 59){
        alert (`${timesObj.hours} : ${timesObj.minutes} : ${timesObj.second}`);
    } else {
        alert ('Більше одного дня');

            }
}
let second = +prompt('Введіть секунди');
convertingSecond(second);
}