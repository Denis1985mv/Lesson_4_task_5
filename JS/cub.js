function add() {
  function sumCub(CubNumber) {
    let result = CubNumber * CubNumber * CubNumber; // объем каба
    return result;
  }

  function sumCubSa(CubSa) {
    let result = 6 * CubSa * CubSa; // SA = 6 х а2 = 6 х 4 = 24 см2 - площадь поверхности куба
    return result;
  }

  function sumCubSq(CubSq) {
    let result = CubSq * Math.sqrt(3);
    return result;
  }

  let Cub = prompt("Введите дланну ребра куба: ");
  let CubNumber = Number(Cub);

  if (isNaN(CubNumber)) {
    alert("Вы ввели не число");
  } else {
    let CubSa = CubNumber;
    let CubSq = CubNumber;

    CubNumber = sumCub(CubNumber);
    CubSa = sumCubSa(CubSa);
    CubSq = sumCubSq(CubSq);

    let resultCub = `Вы ввели значение ребра куба ${Cub}, исходя из этого:
    его объем равен: ${CubNumber}, 
    а площадь поверхности ${CubSa},
    а диагональ равна ${CubSq}`;

    document.write(resultCub);
  }
}

function par() {
  function velueS() {
    let V = So * h;
    return V;
  }

  let velueA = prompt("Введите площадь основания параллепипеда: ");
  let velueB = prompt("Введите высоту параллепипеда:");

  const So = Number(velueA);
  const h = Number(velueB);
  if (isNaN(So) && isNaN(h)) {
    alert("Вы ввели не число!");
  } else {
    let resultV = velueS(So, h);

    document.write(`Вы ввели площадь параллейпипеда ${So} 
  и высоту ${h}, и по формиле V=So*h 
  нашли полный объем - ${resultV}`);
  }
}

function parSb() {
  function velueSoSb(So, Sb) {
    let S = 2 * So + Sb;
    return S;
  }

  let velueSo = prompt("Введите площадь основания параллелепипеда:");
  let velueSb = prompt("Введите площадь боковой поверхности паралелептпеда: ");

  let So = Number(velueSo);
  let Sb = Number(velueSb);
  if (isNaN(So) && isNaN(Sb)) {
    alert("Вы ввели не число!");
  } else {
    let result = velueSoSb(So, Sb);

    document.write(`Площадь целиндра: ${result}`);
  }
}

function parOb() {
  function parObres(a, b, c) {
    let S = 2 * (a * b + a * c + b * c);
    return S;
  }

  function parPl(a, b, c) {
    let S = a * b * c;
    return S;
  }

  function parDg(a, b, c) {
    let d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    return d;
  }

  let veluA = prompt("Введите ширину (a) прямоугольного параллелипипеда: ");
  let veluB = prompt("Введите дланну (b) прямоугольного параллелипипеда: ");
  let veluC = prompt("Введите высоту (с) прямоугольного параллелипипеда: ");

  const a = Number(veluA);
  const b = Number(veluB);
  const c = Number(veluC);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Вы ввели не число!");
  } else {
    let result = parObres(a, b, c);
    let resultPl = parPl(a, b, c);
    let resultD = parDg(a, b, c);

    document.write(
      `Результат: объем - ${resultPl}, площадь  - ${result}, диаганаль ${resultD}`
    );
  }
}

function Prism() {
  function velueS() {
    let V = So * h;
    return V;
  }

  let velueA = prompt("Введите площадь основания призмы: ");
  let velueB = prompt("Введите высоту призмы:");

  const So = Number(velueA);
  const h = Number(velueB);
  if (isNaN(So) && isNaN(h)) {
    alert("Вы ввели не число!");
  } else {
    let resultV = velueS(So, h);

    document.write(`Вы ввели площадь призмы ${So} 
    и высоту ${h}, и по формиле V=So*h 
    нашли полный объем призмы - ${resultV}`);
  }
}

function PrismS() {
  function velueSoSb(So, Sb) {
    let S = 2 * So + Sb;
    return S;
  }

  let velueSo = prompt("Введите площадь основания призмы:");
  let velueSb = prompt("Введите площадь боковой поверхности призмы: ");

  let So = Number(velueSo);
  let Sb = Number(velueSb);

  if (isNaN(So) && isNaN(Sb)) {
    alert("Вы ввели не число!");
  } else {
    let result = velueSoSb(So, Sb);
    document.write(`Площадь целиндра: ${result}`);
  }
}

function Pyromide() {
  function pyromideV() {
    let result = (1 * (So * H))/3;
    return result;
  }

  let velueSo = prompt("Введите площадь основаания пиромиды: ");
  let velueH = prompt("Введите высоту пиромиды: ");

  const So = Number(velueSo);
  const H = Number(velueH);

  if (isNaN(So) || isNaN(H)) {
    alert("Вы ввели не число");
  } else {
    let result = pyromideV(So, H);
    document.write(`Вы ввели площадь основания пиромиды 
    ${So} и высоту ${H}, на основании этих данных площадь 
    пирамиды состовляет ${result} ед. куб.`);
    }
}

function PyromideV() {

  function pyromideV() {
    let result = So + Sb;
    return result;
  }

  let velueSo = prompt("Введите площадь основаания пиромиды: ");
  let velueSb = prompt("Введите площадь боковой поверхности пирамиды: ");

  const So = Number(velueSo);
  const Sb = Number(velueSb);

  if (isNaN(So) || isNaN(Sb)) {
    alert("Вы ввели не число");
  } else {
    let result = pyromideV(So, Sb);
    document.write(`Вы ввели площадь основания пиромиды 
    ${So} и площадь боковой поверхности пиромиды ${Sb}, 
    на основании этих данных площадь 
    пирамиды состовляет ${result} ед. куб.`);
    }
}


