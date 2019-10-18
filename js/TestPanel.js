/*
 * Den här klassen representerar test-panelen som visas när testet startar.
 * Den visar alla frågor som finns.
 * När man tryckt på Submit Answers, så summeras poängen.
 * Därefter kan man starta om hela appen om man vill.
 */
class TestPanel extends Panel {

    //När man trycker på knappen...
    onSubmitClick() {
        this._appObject.setState(APP_STATE_SHOW_RESULT); //uppdatera global state i programmet
    }

    /*
     * Visa alla ord.
     * Visa också knappen som gör "Submit" för att få fram resultatet.
     */
    render(html) {
        return html`
        <div> 
            <hr>
            ${this._wordList}
            <button click="onSubmitClick" type="button">Submit Result</button> 
          </div>
        `
    }
}