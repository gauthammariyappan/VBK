function func1(str){
    func2(str);
}

function func2(str){
    func3(str);
}

function func3(str){
    func4(str);
}

function func4(str){
    func5(str);
}

function func5(str){
    func6(str);
}

function func6(str){
    func7(str);
}

function func7(str){
    func8(str);
}

function func8(str){
    func9(str);
}

function func9(str){
    convertUpperCase(str);
}

function ReferenceError2(){
    console.log(myVariable);
}

function TypeError(){
    const obj = null;
    obj.foo();
}

function RangeError(){
    infiniteLoop();
}

function infiniteLoop() {
    infiniteLoop();
}
