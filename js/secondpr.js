
function saveDynamicDataToFile() {

    let userInput = document.getElementById("WTF").innerHTML;

    userInput= userInput.replace( /for(.................)/g, "[цикл for]:" ) ;

    userInput= userInput.replace( /let/g, "[обьявление переменной]" ) ;

    userInput= userInput.replace( /import.........................../g, "[Подключение внешних модулей]" ) ;

    userInput= userInput.replace( /document.getElementById(.........)/g, "[чтение с клавиатуры]" ) ;

    userInput= userInput.replace( /value/g, "[значения]" ) ;

    userInput= userInput.replace( /alert/g, "[оператор вывода на экран]" ) ;

    userInput= userInput.replace( /function........./g, "[Главная функция - программа]" ) ;

    alert(userInput);

    let blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
}