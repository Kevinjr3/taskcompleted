class calculator{
    constructor(previousoperand,currentoperand){
        this.previousoperand=previousoperand
        this.currentoperand=currentoperand
    }

    clear(){
        
    }
    delete(){

    }
    appendNumber(num){

    }
    chooseoperation(operation){

    }
    compute(){

    }
    updatedisplay(){
        
    }
}



const numberbuttons = document.querySelectorAll('[data-number]')
const operationbuttons =document.querySelectorAll('[data-operation]')
const equalbutton =document.querySelectorAll('[data-equals]')
const deletebutton =document.querySelectorAll('[data-delete]')
const allclearbutton =document.querySelectorAll('[data-all-clear]')
const previousoperand =document.querySelectorAll('[data-previous-operand]')
const currentoperand =document.querySelectorAll('[data-current-operand]')