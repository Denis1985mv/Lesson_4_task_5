let obj1 = {
  imgEnot: {
    EnotTwo: {
      EnotThree:
        "<br>" +
        "<img src='https://placepic.ru/wp-content/uploads/2018/11/s1200-45.jpg' style='width:400px'>",
    },
  },

  firstName: "Витя",
  lastName: "Киселёв",
  age: 45,
  children: null,
  dates: {
    birthday: "26.01.1977",
    wedding: "05.09.2000",
    graduationFromUniversity: "07.06.2003",
  },
};

getFiniteValue(obj1);
function getFiniteValue(obj) {
  getProp(obj);

  function getProp(o) {
    for (var prop in o) {
      if (typeof o[prop] === "object") {
        getProp(o[prop]);
      } else {
        console.log("Свойство: " + [prop]);
        document.write(
          "Свойство: " + [prop] + " Имеет значение:" + o[prop] + "<br>"
        );
      }
    }
  }
}
