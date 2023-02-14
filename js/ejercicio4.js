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
    constructor(inputType,mark,idM){
        super(inputType,mark);
        this._id = idM;
        this._counterMouse = ++Mouse.counterMouse;
    }
    toString(){
        return 'Mouse';
    }
}

class Keyboard extends InputDevice{
    static counterKeyboard = 0;
    constructor(inputType,mark,idK){
        super(inputType,mark);
        this._idK = idK;
        this._counterKeyboard = ++Keyboard.counterKeyboard;
    }
}