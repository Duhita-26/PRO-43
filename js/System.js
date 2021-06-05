class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        textSize(40);
        text("TRESURE UNLOCKED", 250, 200);
        //add code to return true if correct answer entered.
        
        if(actualCode === enteredCode.toUpperCase())
           return true
        else
           return false
    }
    
}