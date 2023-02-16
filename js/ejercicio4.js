class InputDevice{
    constructor(inputType,mark){
        this._inputType = inputType;
        this._mark = mark;
    }
    get inputType(){
        return this._inputType;
    }
    get mark(){
        return this._mark;
    }
    set inputType(inputType){
        this._inputType = inputType;
    }
    set mark(mark){
        this._mark = mark;
    }
}

class Mouse extends InputDevice{
    static counterMouse = 0;
    constructor(inputType,mark){
        super(inputType,mark);
        this._idM = ++Mouse.counterMouse;
    }
    get idMouse(){
        return this._idM;
    }
    toString(){
        return `Mouse: [idM: ${this._idM}, inputType: ${this._inputType}, mark: ${this._mark}]`;
    }
}

let mouse1 = new Mouse('RGB','SEIZA');
console.log(mouse1.toString());
let mouse2 = new Mouse('RG2','SEIZ2');
console.log(mouse2.toString());

class Keyboard extends InputDevice{
    static counterKeyboard = 0;
    constructor(inputType,mark){
        super(inputType,mark);
        this._idK = ++Keyboard.counterKeyboard;
    }
    get idMouse(){
        return this._idM;
    }
    toString(){
        return `Keyboard: [idK: ${this._idK}, inputType: ${this._inputType}, mark: ${this._mark}]`;
    }
}

let key1 = new Keyboard('RGB4','seiza');
console.log(key1.toString());

let key2 = new Keyboard('RGB4','seiza');
console.log(key2.toString());


class Monitor{
    static counterMonitor = 0;
    constructor(mark,size){
        this._idMo = ++Monitor.counterMonitor;
        this._mark = mark;
        this._size = size;
    }

    get idMonitor(){
        return this._idMo;
    }
    get mark(){
        return this._mark;
    }
    set mark(mark){
        this._mark = mark;
    }
    get size(){
        return this._size;
    }
    set size(size){
        this._size = size
    }
    toString(){
        return `Monitor: [idK: ${this._idMo}, mark: ${this._mark}, size: ${this._size}]`;
    }
}

let m1 = new Monitor('HP','Medio');
console.log(m1.toString());
let m2 = new Monitor('P','Grande');
console.log(m2.toString());



class Computer{
    static counterComputer = 0;
    constructor(name,monitor,keyboard,mouse){
        this._idComputer = ++Computer.counterComputer;
        this._name = name;
        this._monitor = monitor;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }

    toString(){
        return `Computer ${this._idComputer}: ${this._name} \n ${this._monitor} \n ${this._mouse} \n ${this._keyboard}`
    }
}


let computer1 = new Computer('Samsung',m1,key1,mouse1);
console.log(computer1)
