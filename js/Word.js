/*
 * Den här klassen representerar en glosa.
 * Ett svenskt ord, kopplat till ett engelskt ord.
 */
class Word extends Domer {

    _sweWord = '';
    _engWord = '';
    _answer = '';  //detta är svaret som är bind:at till Inputboxen
    _color = 'blue'; //Färgen i input-boxen. 

    //När vi skapar glosan skickar vi in ord-paret.
    constructor(sweWord, engWord) {
        super();
        this._sweWord = sweWord;
        this._engWord = engWord;
    }

    //Återställ en glosa
    reset(){
        this._answer = ''; //Rensa svaret
        this._color = "green"; //Återställ färgen
    }

    keyupHandler() {
        // input must have a keyup event with a handler
        // else the bind to a variable will be delayed
        console.log("keyupHandler");
    }

    changeHandler() {
        //Denna sker när ett inputfält ändras
        console.log("changeHandler");
    }

    //Kolla ifall vi hade rätt svar, dvs om texten i InputBox är samma som det engelska ordet...
    isCorrectAnswer(){
        return this._engWord === this._answer;
    }

    //Uppdatera färgen på texten i InputBoxen beroende på om svaret var rätt eller fel...
    setCorrectAnswer(isCorrect){
        if (isCorrect)
            this._color = "green"; //rätt svar!
        else
            this._color = "red"; //fel svar!
    }

    //Vi låter användaren mata in ordet. Ordet visas i en färg som kan variera: ${this._color}
    render(html) {
        return html`
        <div> 
          <p><b>Swedish word: ${this._sweWord} </b>
          <input type="text" style="color:${this._color};" bind="_answer" placeholder="Enter the English Word">
          </p>
          </div>
        `
    }
}