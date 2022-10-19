let obj2 = {
  Lessontask6: "Заданеие 6",
  condition: "<br>",
  conditionTwo: {
    conditionObjTwo: "<br>",
  },
  imgEnot: {
    EnotTwo: {
      EnotThree:
        "<img src='https://placepic.ru/wp-content/uploads/2018/11/s1200-45.jpg' style='width:400px'>",
    },
  },
  myFunctiun: function () {
    for (let key in obj1) {
      if (typeof obj1[key] === "object") {
        for (let i in obj1[key]) {
          console.log(`Свойство ${i} имеет значение ${obj1[key][i]}`);
          document.write(
            `Свойство ${i} имеет значение ${obj1[key][i]}`,
            "<br>"
          );
        }
      } else {
        console.log(`Свойство ${key} имеет значение ${obj1[key]}`);
        document.write(`Свойство ${key} имеет значение ${obj1[key]}`, "<br>");
      }
    }
  },
};
