// 1
let nickname = prompt("Как тебя зовут?");

let age = prompt("Сколько тебе лет?", 20);
if (age > 19) {
    for (i = 0; i < 5; i++ ) {
        alert("Привет!")
    }
}
else {
    console.log(age)
    alert("Вам меньше 20 лет")
}

if (confirm("Хочешь учить JS ?")) 
    alert("Супер!")