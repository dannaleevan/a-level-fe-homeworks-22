# A-level-frontend

# Lecture 2 Variables in JS #

ES5: var //var не имеет блочной области видимости
ES6:  let
      const

Example: let lectureNumber = 2;
          let - variable;
          lectureNumber - variable name;
          = - equal symbol;
          2 - value или литерал;
          ; - semicolon;

**Область видимости** (англ. ... variable scope или просто scope) — это такая область программы, в пределах которой установлена связь между некоторой переменной и её идентификатором (именем), по которому можно получить значение этой переменной.

В языке JavaScript (до ES6) выделяют 2 области видимости:
глобальная (переменная или функция, созданная в этой области видимости, может быть доступна из любой точки программы);
локальная или функциональная (переменная или функция, созданная в этой области видимости, может быть доступна только внутри неё);
блочная область видимости (if ();)

# Lecture 3 JavaScript data types #

Primitive values (immutable datum represented directly at the lowest level of the language)
_Boolean type_
_Null type_
_Undefined type_
_Number type_
_BigInt type_
_String type_
_Symbol type_

_Objects_ (collections of properties)

***

# Lecture 4. Operators & Type Coercion

__Operators__

JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.

*Assignment operators*
`=`, `+=`

*Comparison operators* 
`===`,`!==`, `>`, `<`, `>=`, `<=`

*Arithmetic operators*
`+`, `-`, `*`, `/`

*Logical operators*
```
Operator	Meaning	      Example	      How it works
&&	       AND	      value1 && value2	      Returns true if both value1 and value2 evaluate to true.
||	       OR	      value1 || value2	      Returns true if either value1 or value2 (or even both!) evaluates to true.
!	       NOT	      !value1	            Returns the opposite of value1. If value1 is true, then !value1 is false.
```

String operators

var balance = 340.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === true){
    if (isActive===true && balance>0) {
        console.log("Your balance is $" + balance.toFixed(2) +".");
    } else if (isActive===true && balance===0){
        console.log("Your account is empty.");    
    } else if (isActive===true && balance<0){
        console.log("Your balance is negative. Please contact bank.");
    } else if (isActive===false){
        console.log("Your account is no longer active."); 
    }
} else {
    console.log("Thank you have a nice day!");
}

*Conditional (ternary) operator*
Условный (тернарный) оператор - единственный оператор в JavaScript, принимающий три операнда: condition - условие, за которым следует знак вопроса (?), затем выражение, которое выполняется, если условие true истинно, сопровождается двоеточием (:), и, наконец, выражение, которое выполняется, если условие false - ложно. Он часто используется в качестве укороченного варианта условного оператора if.

```js
function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');       //isMember - condition , true - 2$, false - 10$
} console.log(getFee(true));                    // expected output: "$2.00"
```

var flavor = "chocolate";
var vessel = "bowl";
var toppings = "sprinkles";

// Add your code here

function exapmle (){
 return ((flavor === "vanilla" || "chocolate") && 
(vessel === "cone" || "bowl") && 
(toppings === "sprinkles" || "peanuts")) ? console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".") : console.log('I don\' want an icecreme');
}
exapmle();

***

# Lecture 6. Objects #

**Obj Methods**
* Object.getOwnPropertyDescriptor(); 
* Object.defineProperty();
* Object.defineProperties();
* Object.getOwnPropertyDescriptor();
* Object.keys();
* Object.values();
* Object.assign();
* Object.freeze();
* Object.isFrozen();
* Object.preventExtensions();
* Object.isExtensible();

**Object Prototype**
* Object.setPrototypeOf();
* Object.getPrototypeOf();

***

# Lecture 7. Array #

## Array properties and methods ##

* Array.length() - длинна массива
* Array.push() - закидывает элемент в конце array
* Array.pop() - отнимает последний элемент
* Array.reverse() - переставляет элементы array в обратном порядке
* Array.sort() - переставляет элементы array в обратном порядке
* Array.shift() - удаляет элемент в началле arr
* Array.unshift() - прибавляет первый элемент
* Array.splice() - принимает 2 аргумента: 1-й какой элемент отнимает (начинаем) 2-й сколько отнимем, можно еще 3, 4 аргю - чтоб добавить что-то (2-й арг. при этом будет - 0), если будем писать минусом -(index), отнимать будет с концаж; возвращает элементы, которые отнял, если arr.(2,0, 'yp', 'po') - то ПОСЛЕ второго добавит 2 элемента

      var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
      var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
      rainbow.splice(2, 1, "Yellow", "Green");
      rainbow.splice(5, 0, "Purple");

      QUIZ REQUIREMENTS
      Your code should have a function `hasEnoughPlayers()`
      Your function `hasEnoughPlayers()` should accept one parameter
      Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
      Return true if the array size is atleast 7, otherwise false. 
      
      var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
      function hasEnoughPlayers(arg) {
      if (arg.length >= 7) {
            return true;
      } else {
            return false;}
      }
      console.log(hasEnoughPlayers(team));

* Array.sort() - сортирует по порядку алфавиту
* Array.join() - соединяет array в строку
* Array.concat() - присоеденить один array к другому let arr3 = arr1.concat(arr2)
* Array.slice() - вырезать кусок (1,2) - индекс 1 два куска вырезать
* Array.includes() - что-то вмещает true/false
* Array.find() - function - arr.find((element, index) => elem % 4 == 0) //8
* Array.some() - function - arr.some((element, index) => elem % 4 == 0) //true
* Array.every() - function - arr.every((element, index) => elem % 4 == 0) //false
* Array.sort() - расставляет по порядку - function - arr.sort((element1, element2) => element1 - element2) //выставит по порядку
* Array.reduce() - уменьшить принимает три параметра (previous value, current value, index) => previous value+current value, 0 - начинать с (прибавит все цифры) 
* **Array.filter()** - сортирует - function - создает новый массив с прошедшими проверку элементами

      let arr = [1,3,4,5,6,20];
      let resylt = arr.filter((element, index) => element >10);
      console.log(result); //20

* **Array.toUpperCase()**

      var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
      // the variable `i` is used to step through each element in the array
      for (var i = 0; i < donuts.length; i++) {
      donuts[i] += " hole";
      donuts[i] = donuts[i].toUpperCase();

* **Array.forEach()** - перебирает каждый элемент array может принимать три параметра .forEach(element, index, and array){ } - это всегда функция !не создает новый array

      var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
      function printDonuts(donut) {
      donut += " hole";
      donut = donut.toUpperCase();
      console.log(donut);
      });
      donuts.forEach(printDonuts);

      можно записать как 

      donuts.forEach(function(donut) {
      donut += " hole";
      donut = donut.toUpperCase();
      console.log(donut);
      });

       можно записать как 

      donuts.forEach((donut) => {
      donut += " hole";
      donut = donut.toUpperCase();
      console.log(donut);
      });



      words = ["cat", "in", "hat"];
      words.forEach(function(word, num, all) {
      console.log("Word " + num + " in " + all.toString() + " is " + word);
      });
      Prints:
      Word 0 in cat,in,hat is cat
      Word 1 in cat,in,hat is in
      Word 2 in cat,in,hat is hat


      Use the existing `test` variable and write a `forEach` loop
      that adds 100 to each number that is divisible by 3.

      var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

      test.forEach(function(elem,index){
      if(elem%3===0){
      test[index] = test[index]+100;
            }
      });
      console.log(test);

* **Array.map(fanc)** - в отличии от forEach создает новый array

      var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
      //умножить каждое число на 15% и нужно округлить к 2 знакам после запятой
     
      const totals = bills.map((elem) => {
            elem *= 1.15;
            elem = elem.toFixed(2);        //toFixed(2) - десятки после кома привести к 2м знакам
            elem = Number (elem);         //получается результат в строках, по этому нужно привести к номеру
            return elem;
      });
      console.log(totals);

* toFixed() - число с десятками приведет к необходимому количеству знаков после комы, указать в скобках сколько знаков (), приведет к String вместо Number,  10.89203.toFixed(2) => '10.89' => Number('10.89')=>10.89 - метод Number приведет String в Number

* **Arrays in array**

      Перебрать каждый элеммент array
      var numbers = [
      [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
      [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
      [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
      ];

      for (let a = 0; a < numbers.length; a++) {
      for (let b = 0; b < numbers[a].length; b++) {
      console.log(numbers[a][b]);
      }
      }      

> String.split([separator[, limit]]) - разделяет строку отпределенным элементом и приводит в массив

***

# Lecture 8. Function #

*1.Function creating & running*
      function aB(arg_1, arg_2, ...arg_N) {
            function's body
      }
*2.Arguments*
<!-- function as arguments -->
      const numbers =[1,2,3];
      function multiplyByTwo(element){
            return element *2;
      }
      const newArray = numbers.map(multiplyByTwo);

<!-- anonymous function  -->
      const numbers =[1,2,3];
      const newArray = numbers.map(function(element){
            return element *2;
      });
<!-- unknown arguments -->
      function getMinNum(...num){
            return Math.min(...num);
      }
      console.log(getMinNum(1,2,3));
      console.log(getMinNum(3,6,7));
*3.Function return*
      function getValue(a){
            return a;
      }
      getValue(3); //3
*4.Arrow functions*
      let arrowFunc = (a,b) => {
            <!-- a+b -->
            return a+b;
      }
      arrowFunc(3,7);
*5.Execution context*
      keyword 'this';
      let button = document.getElementByID('btn');
      button.addEventListener('click', function(){
            alert(this===button)}); 
*6.Closures*
      local scope:
            -block
            -functional;
      global scope.

//Функция переписывает параметр с конца в начало reverse
function reverseString(reverseMe) {
    var reversed = '';
    for (i = reverseMe.length - 1; i >= 0; i--){
        reversed += reverseMe[i];
    }
    return reversed;
}
console.log(reverseString('Margaret'));

# Lecture 9. Conditions & Loops #

__if...else__
 
      >Пример сложного когда if..else с несколькими вводными одновременно, когда нужно сделать два сравнения в одном условии -->
      var room = "billiards room";
      var suspect = "Mr. Parkes";   
      >A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff -->
      var weapon = ""; 

      if (room === 'ballroom') {
      weapon = 'poison';
      if(suspect==="Mr. Kalehoff") 
            solved = true;
      }
      Еще вариант сравнения через оператор && И
      if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
      weapon = 'poison';
      solved = true; 
      } 

      else if (room === 'gallery') {
      weapon = 'trophy';
      if(suspect==="Ms. Van Cleve") 
            solved = true;
      }
      else if (room === 'billiards room') {
      weapon = 'pool stick';
      if(suspect==="Mrs. Sparr") 
            solved = true;
      } 
      else if (room === 'dining room') {
      weapon = 'knife';
      if(suspect==="Mr. Parkes") 
            solved = true;
      }   

      if (solved) {
      console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
      }

***

# Lecture 10. DOM #

## Интерфейсы веб API: ##
* Document object
* Node Interface 
* Element Interface

### Вызываем элемент ###

* **document.getElementByID('')** - вызывает одиночный объект
* **document.getElementsByClassName('. ')** - вызывает все элементы по классу
* **document.getElementsByTagName('')** - вызывает все элементы по тегу
* **document.querySelector('.class') ('tag') ('#id')** - вызывает первый элемент с названием класса или тега или по айди


### Element Interface ###
* **element.innerHTML** - get/set element's content отображает все содержимое элемента, можно изменить всю HTML разметку элемента
* **element.outerHTML** - отображает все содержимое элементы и его дочерних элементов;
* **element.textContent** - отображает только контент элемента, рассматривает все содержимое элемента как текст, который можно изменить; отображает все контент, даже скрытый, который записан в HTML документе.
* **element.innerText** - отображает контент элемента как мы его увидем на странице, без учета скрытого display:none


### Document object ###
>>>Add New Page Content

* **document.createElement('a');** - DOM method в () пишем тег, который создаем, но не отображаем, дальше добавляем контент с помошью  .innerHTML:
     
      const addLink = document.createElement('a'); 
      ddLink.innerHTML = 'href = 'https://developer.mozilla.org';

* **.appendChild();** - 'прикреплять', добавляем содержимое в document.createElement('div') в конце;

      const newSpan = document.createElement('span');
      >reate a brand new <span> element
      newSpan.textContent = 'BlaBla';
      >добавили туда контент
      const mainHeading = document.querySelector('h1');
      >select the first (main) heading of the page
      mainHeading.appendChild(newSpan);
      >add the <span> element as the last child element of the main heading
      .appendChild()
      >прикрепляется к конкретному документу, его нельзя крепить к document.appendChild;

* **.createTextNode();** - равен по применению с element.textContent = 'Hello!';

* **.insertAdjacentHTML();** - insert - вставлять; adjacent - соседний;  вставляет элемент так же как и .appendChild(), но в отлтчие от него не на последнее место, а в удобное место, принимает два аргумента:
      *1й - куда вставлять, существует 4варианта размещения 'beforebegin', 'afterbegin', 'beforeend', 'afterend'*
      >beforebegin
      <p>

      >afterbegin
      Existing text/HTML content
      >beforeend
      </p>

      >afterend
      *2й какое содержание вставлять*
      const mainHeading = document.querySelector('#main-heading');
      const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';
      mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);


### Remove Page Content ###

* **.removeChild()**          
>требует вызывание родительского элемента и какой из элементов будем удалять

      <parent-element>.removeChild(<child-to-remove>);
      посмотреть .firstChild или .firstElementChild и дальше удалить первого ребенка
      const block = $0;
      const firstBlock = block.firstChild; & block.firstElementChild;
      block.removeChild(firstBlock); 

* **.firstChild** - може выдать и пустое место как первого ребенка 

* **.firstElementChild** - точно выдасть первый элемент, наполненный контентом

* **.parentElement** - Чтоб не вызывать первым аргументом родительский элемент, мы можем удалять элемнт по такой схеме

      const mainHeading = document.querySelector('h1');
      //вызвать элемент для удаления
      mainHeading.parentElement.removeChild(mainHeading);
      //название элемент для удаленич, обратится к его родителю per.elem. + название метода removeCh, (удалить этот элемент)

* **.remove()**
      const mainHeading = document.querySelector('h1');
      mainHeading.remove();


### Style Page Content ###

* **.style.property** - добавление одного стиля

      const mainHeading = document.querySelector('h1');
      mainHeading.style.color = 'red' ('15px');
      mainHeading.style;

>fontSize - название стилей без черточки

* **.cssText** - добавление многих стилей, название стилей как в CSS : font-size;

      const mainHeading = document.querySelector('h1');
      mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

* **.setAttribute()** - два аргумента (название атрибута, его содержимое)

      const mainHeading = document.querySelector('h1');
      mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');
      mainHeading.setAttribute('id', 'heading-sibling');
      mainHeading.nextElementSibling.style.backgroundColor = 'red';

>присвоить стить след. соседу

* **.className** - get можем посмотреть наличие классов элемента

      const listOfClasses = mainHeading.className;
      const arrayOfClasses = listOfClasses.split(' ');
      mainHeading.className = "im-the-new-class";

>>>>1.выдаст string, название нового класса 2.можно его перевернуть в array разделя 2.мы можем теперь работать с ним как с array : for, .push, .pop 3.set className:

* **.classList** - получим DomTokenList - коллекция элементов, с которой можем работать
>>>>blaBla.classList.add('');
 - .add() - to add a class to the list
 - .remove() - to remove a class from the list
 - .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
 - .contains() - returns a boolean based on if the class exists in the list or not

***

# Lecture 11. DOM_part_2 #

Working with Browser Events

**monitorEvents(document)** - See an event отображает все активное, что происходит 
**unmonitorEvents(document)** - Скрывает предыдущее отолбражание

### Events types: ###
* mouse events (click, dblclick, scroll, resize)
* keyboard events (pressing and releasing key)
* control elements events (focus / blur forms fields, form submit);

### EventTarget Interface methods ###
* **.addEventListener()** - < event - target >.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);     
* **.removeEventListener()** - убрать EventListener
* **.target.dispatchEvent()** - отправляет событие в общую систему событий        
* **.preventDefault()** - предотвратить поведение браузера по умолчании, нажимаем   на ссылку, браузер перезапускается
* **.stopPropagation()** - остановка запуска js bubling

### Mouth events ###           
* *mousedown* - нажал мышку
* **mouseup** - отпустил мышку
* ***click*** - щелчек мыши
* **dblclick** - двойное нажатие мыши
* **mousemove** - уходим с элемента
* **mouseover** - мыш заходит на элемент
* **mouseleave** - увели мышку с узла без баблинга, покидаем пределы пораграфа
* **mouseenter** - уходим с элемента но без баблинга
* **mouseout** - увели мышку с узла с баблингом
* **contextmenu** - нажатие на правую клавишу  по любому вызывается крнтектсное меню  

>command+d выделяет и меняет все одинаковые элементы

### Keyboard Events ###
* keydown -
* keyup - 
* altKey - проверка нажати ли клавиша, в тот момент, когда наживали на клаве
* code - один символ выводит 
* cnrlKey - 
* key -
* location -
* metaKey - 
* repeat -
* shiftKey -

### Document_events ###

* **DOMContentLoaded event** - после загрузки дома ускоряет работу интерфейсов не дожидаясь прогрузки css
* **load event** - завершение загрузки всего на странице
* **beforeunload event** - когда пользователь закончил работу и если сохранился спрашиваем, хочет ли он уйти
* **unload** - пользователь почти ушел, но мы можем собрать статистику


###### Чтоб JS записать вверху страницы и DOM все таки прогружился, можно сделать следущее ######

      <!DOCTYPE html>
      <html lang="en">
      <head>
      <link rel="stylesheet" href="/css/styles.css" />
      <script>
            document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('footer').style.backgroundColor = 'purple';
            });
      </script>


**performance.now()** - testing Code Performanc, тест времени выполнения кода

**reateDocumentFragment()** - метод который поможет без div добавить элемент в одночасье и съэкономить время загрузки, он будет только на 321 строке

**setTimeout()** - Оттерминование запуска функции 

***

# Lecture 11. Dom. Part 3 #

## Events##

### Document_(browser)_events ###
> Можно присваивать widow или document
* **.DOMContentLoaded** - document.addEventListener ('DOMContentLoaded'(callcack))** - срабоает тогда, когда прогрузится весь HTML, а потом загружает скрипты
* **.load** - window.addEventListener.('load' (callcack)) - прогружает сначала страницу HTML, а потом загружает скрипты
* **.resize** - window.addEventListener('resize', (callcack)) - получаем ведомости об изменение ширины/высоты размера браузера или окна

      const heightOutput = document.querySelector('#height');
      const widthOutput = document.querySelector('#width');

      function reportWindowSize() {
      heightOutput.textContent = window.innerHeight;
      widthOutput.textContent = window.innerWidth;
      }

      window.addEventListener('resize', reportWindowSize);

* **skroll** - window.addEventListener('skroll', (callcack)) срабатывает, когда чел. скролит страницу
* **beforeunload/unload** - window.addEventListener('beforeunload', (callcack))переходим между вкладками
* **copy/cut/paste** - когда пользователь копирует, вырезает const exs = document.getSelection() или getData()- это свойство отображает кусочек, который мы скопировали

      const source = document.querySelector('div.source');
      const target = document.querySelector('div.target');


      source.addEventListener('copy', (event) => {
      const selection = document.getSelection();
      
      event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
      event.preventDefault();
      });

      source.addEventListener('cut', (event) => {
      const selection = document.getSelection();      //кусочек, который скопирован
      
      console.log(selection.toString());
      });

      target.addEventListener('paste', (event) => {
            const paste = event.clipboardData.getData('text/plain');
      
            console.log(paste);
      })

* **online, offline** - можно показать человеку, что у него пропал интернет (есть пример в лекции)

### Control Event###

* **focus** - на каком элементе фокус
* **blur** - потеря фокуса

### Working with form ###

#### Form object props #####
* **name**
* **action** - адрес отправки
* **method**
* **novalidate**
* **elements**
* **lendth**

* name="form1" - в HTML *писать ID не обязательно*, достаточно присвоить атрибут имя форме
* document.forms.name - *достучатся до формы* HTML с помощью JS

      const form1 = document.forms.formName;
      const form2 = document.querySelector('form[name=formName]');
      console.log(form1.name);  //можем вызвать через . любой атрибут c *Form object props*

### Form methods ###
* **submit()**

>достать поле input, у которого есть name

      form1.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputUserName = e.target.userName;   //получаем в консоль ссылку на это поле
      const inputPassword = e.target.password;    //вызываем password

      console.log(inputUserName);
      console.log(inputUserName.value);      // выдает, что введено в поле
      console.log(inputPassword.value);      // выдает, что введено в поле
      e.target.reset();                        //тут же стереть после отправки
      });

* **reset()** -  тот же самы пример, что и ресет

### Form Validation ###
* **checkValidity** - если стоит requaerd, то мы должны заполнить полностью форму true -валидная форма
* **reportValidity** - выдает о невалидности формы

#### ValidityState Object ####
* **inputElement.validity.[state name]** - что именно в нашем обекте не валидно
> valueMissing
> patternMissing
> tooLong
> tooShort
> valid
>customError 

***

## Object oriented programing ##

* **Encapsulation**
* **Abstraction**
* **Polymorphism**
* **Inheritance**

#### Classes ####

      function Car (mark, model, year = null) {
            this.mark = mark;
            this.model = model;
            this.year = year;
      }

      Car.prototype.setYear = function (year) {
            this.year = year;
      }

      Car.prototype.getInformation = function () {
            return `${this.mar} ${this.model}, ${this.year}`;
      };

      let obj = new Car('Audi','S8');

      obj.setYear(2020);

      console.log(obj.getInformation());  //Audi S8, 2020


