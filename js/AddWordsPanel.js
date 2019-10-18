/*
 * Den här panelen visas när man matar in nya ord.
 */
class AddWordsPanel extends Panel {

    //När vi klickar på Add New Word knappen...
    onAddWordClick() {
        this._wordList.add(new Word(this._sweWord, this._engWord));  //Lägg till nytt ord

        //Rensa inputboxarna
        this._sweWord = '';
        this._engWord = '';
    }

    onStartTestClick() {
        this._appObject.setState(APP_STATE_START_TEST);
    }

    /*
     * Visa alla ord.
     */
    render(html) {
        return html`<div>
        <hr>
        <input style="color:black;" type="text" bind="_sweWord" placeholder="Enter the Swedish Word">
        <input type="text" bind="_engWord" placeholder="Enter the English Word">
        <button click="onAddWordClick" type="button">Add New Word</button> 
        <hr>
        <p>Number of words in test: ${this._wordList.getNumWords()}</p>
        <button click="onStartTestClick" type="button">Start the Test</button>
        </div>`
    }
}