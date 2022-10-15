let check = prompt(
  "Выберите действие(введите цифру нужной операции): \n 1 - Куб (объем, площадь проверхности, даигональ) - потребуется длинна ребра! \n 2 - Вычисление объема параллелепипеда (объем) - если известна площадь онования и высота!\n 3 - Вычисление площади параллелепипеда - если известна площадь основания и бокавая площадь: \n 4 - вычисление прямоугольного параллелепипеда (объем, площадь проверхности, даигональ) - зная длинну, высоту, ширину \n 5 - Вычеслить объем примы зная площадь основания и высоту: \n 6 - Вычеслить площадь призмы зная площадь основания и площадь боковой части: \n 7 - Пирамида (объем) по площади основания и высоте \n 8 - Пиромида (Площадь) по площади основания и площади боковой поверхности" 
);

switch (check) {
  case "1":
    check = add(check);
    break;
  case "2":
    check = par(check);
    break;
  case "3":
    check = parSb(check);
    break;
  case "4":
    check = parOb(check);
    break;
  case "5":
    check = Prism(check);
    break;
  case "6":
    check = PrismS(check);
    break;
  case "7":
    check = Pyromide(check);
    break;
  case "8":
    check = PyromideS(check);
    break;

  default:
    document.write(" Вы ввели не то действие, обновите страницу.");
}

// function sum(x, y) {
//   let sumResult = x + y;
//   return sumResult;
// }

// }

// let result = sum(10, 20); // функция возвращает значение, которое будет записано в переменную result
// console.log(result);

// var numbst = prompt("В какую степень: ");

// let Sum = Cub * Cub * Cub;

// alert(Sum);

// // var result = numb * numb * numb; //Куб перемножаем 3 раза
// // document.write(result + ' - вычисляем куб числа: ' + numb);
// Sa = Math.pow(numb,numbst), // площадь грани

// alert(Sa);

// console.log("Вычисление объема цилиндра.");
// //  V=π * r в квадрате * h
// let V;
// const Pi = 3.1415926535; // правильно использовать константу для подобных значений
// let r = 10; // радиус
// let h = 20; // высота

// V = Pi * r * r * h;
// console.log(V);

// 	function summa(num1, num2) {
// 		var itog = num1 + num2;
// 		document.write(itog + ' Сумма этих чисел равна' + '<br />');
// 	}

// 	summa(35,34);
// 	summa(35,550);

// 	function square(numb){ //Функция для вычисления квадрата числа
// 		var itog = numb * numb;
// 		document.write(itog + ' - вычисляем квадрат <br />');
// 	}

// 	square(5);
// 	square(252);

// /************************************************************************/
// 	function cube(){ //Функция для вычисления куба числа
// 		var numb = prompt("Укажите число для вычисления куба: ");
// 		var result = numb * numb * numb; //Куб перемножаем 3 раза
// 		document.write(result + ' - вычисляем куб числа: ' + numb);
// 	}

// 	cube();
