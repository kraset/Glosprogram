/*
 * Den här panelen visar resultatet av testet.
 */
class ShowResultPanel extends Panel{

    constructor(appObject, wordList){
        super(appObject, wordList);
        this._points = this._wordList.getResultAndSetColors(); 
    }

    onRestartProgramClick(){
        this._appObject.setState(APP_STATE_ADD_WORDS);
    }

    onRestartTestClick(){
        //Återställ alla ord
        this._wordList.clearAnswers();
        this._appObject.setState(APP_STATE_START_TEST);
    }

    /*
     * Visa alla ord.
     * Man kan sedan göra testet igen eller starta om hela appen.
     */
    render(html) {
        return html`
        <div> 
            <hr>
            ${this._wordList}
            <button click="onRestartTestClick" type="button">Do Test Again</button> 
            <button click="onRestartProgramClick" type="button">Restart Program</button> 
            <h3>Points: ${this._points}</h3>
          </div>
        `
    }
}