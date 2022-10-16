let check = prompt(
  "Выберите действие(введите цифру нужной операции): \n 1 - Куб (объем, площадь поверхности, диагональ) - потребуется длина ребра. \n 2 - Вычисление объема параллелепипеда (объем) - если известна площадь онования и высота.\n 3 - Вычисление площади параллелепипеда - если известна площадь основания и боковая площадь поверхности: \n 4 - Вычисление объема прямоугольного параллелепипеда (объем, площадь поверхности, диагональ) - если известна длина, высота, ширина. \n 5 - Вычислить объем призмы если ихвестна площадь основания и высота. \n 6 - Вычислить площадь призмы если известна площадь основания и площадь боковой поверхности. \n 7 - Объем пирамиды по площади основания и высоте. \n 8 - Площадъ пирамиды по площади основания и площади боковой поверхности" 
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
