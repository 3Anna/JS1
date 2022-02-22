console.log("ЗАДАНИЕ 1");
//typeof(9)
console.log("9- Предположение: number");
console.log("Фактический:", typeof(9));

//typeof(1.2)
console.log("1.2- Предположение: number");
console.log("Фактический:", typeof(1.2));

//typeof(NaN)
console.log("NaN- Предположение: number");
console.log("Фактический:", typeof(NaN));

//typeof("Hello World")
console.log("Hello World- Предположение: string");
console.log("Фактический:", typeof("Hello World"));


//typeof(true)
console.log("true- Предположение: boolean");
console.log("Фактический:", typeof(true));


//typeof(2 != 1)
console.log("2 != 1 - Предположение: boolean");
console.log("Фактический:", typeof(2 != 1));


//"сыр" + "ы"
console.log("'сыр' + 'ы' - Предположение: string");
console.log("Фактический:", typeof("сыр" + "ы"));

//"сыр" - "ы"
console.log("'сыр' - 'ы' - Предположение: string");
console.log("Фактический:", typeof("сыр" - "ы"));

//"2" + "4"
console.log("'2' + '4' - Предположение: number");
console.log("Фактический:", typeof("2" + "4"));

//"2" - "4"
console.log("'2' - '4' - Предположение: number");
console.log("Фактический:", typeof("2" - "4"));

//"Сэм" + 5
console.log("'Сэм' + 5 - Предположение: string"); 
console.log("Фактический:", typeof('Сэм' + 5));
console.log("Сэм" + 5)
//"Сэм" - 5
console.log("'Сэм' - 5 - Предположение: string");//ошиблась
console.log("Фактический:", typeof('Сэм' - 5));

//99 * "шары"
console.log("99 * 'шары' - Предположение: string");//ошиблась
console.log("Фактический:", typeof(99 * 'шары'));

console.log("ЗАДАНИЕ 2")
let side1, side2, perimeter, square;
side1=5;
side2=8;
perimeter=(side1+side2)*2;
square=side1*side2;
ratioPerSq=perimeter/square;
console.log(side1, side2);
console.log(perimeter);
console.log(square);
console.log(ratioPerSq);

console.log('ЗАДАНИЕ 3')
let temperatureC_1, temperatureF_1,temperatureC_2, temperatureF_2;
temperatureC_1=25;
temperatureF_2=66.2;
temperatureF_1=(temperatureC_1*9/5)+32;
temperatureC_2=(temperatureF_2-32)*5/9;
console.log(` ${temperatureC_1}\xB0C соответствует ${temperatureF_1}\xB0F`);
console.log(` ${temperatureF_2}\xB0F соответствует ${temperatureC_2}\xB0C`);

console.log('ЗАДАНИЕ 4')
let year = prompt('ЗАДАНИЕ 4. Какой год?', 2022);

/*if (year%4!=0) alert(`ЗАДАНИЕ 4. Год ${year} обычный`); 
else if(year%100!=0)
    alert(`ЗАДАНИЕ 4. Год ${year} високосный`);
else alert(`ЗАДАНИЕ 4. Год ${year} обычный`);*/
alert((year%4==0 && year%100!=0) ? `ЗАДАНИЕ 4. Год ${year} високосный` : `ЗАДАНИЕ 4. Год ${year} обычный`);


console.log('ЗАДАНИЕ 5')
let number1 =120, number2=56;
if (number1==10 || number2==10 || number1+number2==10) console.log(true);
else console.log(false);


console.log('ЗАДАНИЕ 6')
let numberShip = prompt('ЗАДАНИЕ 6. Сколько овечек?', 5),str='';
for (let k=1; k<=numberShip; k++) str+=k+" овечка...";
console.log(str)

console.log('ЗАДАНИЕ 7')
for (let i=0; i<16; i++){
    if (i%2==0) console.log(`${i} четное`);
    else console.log(`${i} нечетное`);
}

console.log('ЗАДАНИЕ 8')
let star="*", lattice='#';
for (k=1; k<10; k++){
    if (k%2!=0) console.log(star);
    else console.log(lattice);
    star+="*"; 
    lattice+='#';
}

console.log('ЗАДАНИЕ 9')
let num1=10, num2=1, num3=0;
if (num1>=num2 && num1>=num3){
    if (num2>=num3) console.log (num3, num2, num1);
    else console.log (num2, num3, num1)
}
else if (num2>=num1 && num2>=num3){
    if (num1>=num3) console.log (num3, num1, num2);
    else console.log (num1, num3, num2)
}
else if (num3>=num1 && num3>=num2){
    if (num2>=num1) console.log (num1, num2, num3);
    else console.log (num2, num1, num3)
}

console.log('ЗАДАНИЕ 10')
let n1=10, n2=1, n3=0, n4=-5, n5=6;
/*max=Math.max(n1,n2,n3,n4,n5)
console.log(max);*/
if (n1>=n2 && n1>=n3 && n1>=n4 && n1>=n5) console.log('max=', n1);
else if(n2>=n1 && n2>=n3 && n2>=n4 && n2>=n5) console.log('max=', n2);
else if(n3>=n1 && n3>=n2 && n3>=n4 && n3>=n5) console.log('max=', n3);
else if(n4>=n1 && n4>=n2 && n4>=n3 && n4>=n5) console.log('max=', n4);
else console.log('max=', n5);
