function metodo1(number, letter) {
    const arrayLetters = [];

    for (i = 1; i <= number; i++) {
        arrayLetters.push(letter);
    }
    return arrayLetters;
}

metodo1(3, 'a');

function metodo2(array) {
    const newArray = [];
    var control = 0;
    for (i = array.length; i >= 0; i--) {
        newArray[control] = array[i];
        control++;
    }
    return newArray;
}

metodo2([1,2,3,4]);

function metodo3(array) {
    const newArray = [];
    var control = 0;

    for (i = 0; i <= array.length; i++) {
        if (
            array[i] !== false &&
            array[i] !== undefined &&
            array[i] !== "" &&
            array[i] !== null &&
            array[i] !== 0
        ) {
            newArray[control] = array[i];
            control++;
        }
    }
    return newArray;
}

metodo3([1,2,'', undefined]);

function metodo4() {
    const originalArray = [["c", 2], ["d", 4]];
    const newArray = Object.fromEntries(originalArray);
    return newArray;
}

function metodo5(array, number1, number2) {
    const newArray = [];
    var control = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] !== number1 && array[i] !== number2) {
            newArray[control] = array[i];
            control++;
        }
    }
    return newArray;
}

metodo5([5,4,3,2,5], 5,3);

function metodo6(array) {
    for (var i in array) {
        var value = array[i];
        var contRepeat = 0;
        for (var i in array) {
            if (value == array[i]) {
                contRepeat++;
                if (contRepeat > 1) {
                    delete array[i];
                    contRepeat--;
                }
            }
        }
    }
    var filterNewArray = array.filter(function (item) {
        return item !== undefined;
    });
    return filterNewArray;
}

metodo6([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);

function metodo7(array1, array2) {
    var isEqual = new Boolean();
    var counter = 0;
    for (i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            counter++;
        }
    }
    if (counter == array1.length) {
        isEqual = true;
    }

    return isEqual;
}


metodo7([1, 2, 3, 4], [1, 2, 3, 4]);

function metodo8() {
    const originalArray = [1, 2, [3], [4, 5]];
    return originalArray.flat();
}


function metodo9(array, number) {
    const value = array.length;
    var qtdArray = value / number;

    const newArray = new Array(Math.ceil(qtdArray))
        .fill()
        .map((_) => array.splice(0, number));

    return (newArray);
}

metodo9([1, 2, 3, 4, 5], 2);

function metodo10() {
    const array1 = [6, 8];
    const array2 = [8, 9];
    const newArray = array1.filter(number => array2.includes(number));
    return newArray;
