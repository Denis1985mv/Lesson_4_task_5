function add() {
  function sumCub(CubNumber) {
    let result = CubNumber * CubNumber * CubNumber; // обьем каба
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

function par() {
  function velueOs() {
    let So = a * b;
    return So;
  }

  function velueS() {
    let V = So * h;
    return V;
  }

  function velueSp() {
    // Sб=2c(a+b), где a, b - стороны основания, c - боковое ребро.
    let V = So * h;
    return V;
  }

  let velueA = prompt("Введите площадь основания параллепипеда: ");
  let velueB = prompt("Введите высоту параллепипеда:");

  const So = Number(velueA);
  const h = Number(velueB);

  //let SoResult = velueV(So, h,);
  let resultV = velueS(So, h);
  // let resultP = velueSp(So);

  document.write(`Вы ввели площадь параллейпипеда ${So} и высоту ${h}, и по формиле V=So*h нашли полный объем - 
                 ${resultV}`);
}

function parSb() {
  function velueSoSb(So, Sb) {
    let S = 2 * So + Sb;
    return S;
  }

  let velueSo = prompt("Введите площадь основания целинда:");
  let velueSb = prompt("Введите площадь боковой поверхности целиндра: ");

  let So = Number(velueSo);
  let Sb = Number(velueSb);

  let result = velueSoSb(So, Sb);

  document.write(`Площадь целиндра: ${result}`);
}

function parOb() {
  function parObres(a, b, c) {
    // S = 2(a·b + a·h + b·h) = 2(10·20 + 10·15 + 20·15) = 1300
    // let S = 2 * a * b * 2 * a * c * 2 * b * c;
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

  let result = parObres(a, b, c);
  let resultPl = parPl(a, b, c);
  let resultD = parDg(a, b, c);

  document.write(
    `Результат: объем - ${resultPl}, площадь  - ${result}, диаганаль ${resultD}`
  );
}
