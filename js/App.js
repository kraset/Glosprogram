
class App extends Domer {

  _appState = APP_STATE_ADD_WORDS;
  _wordList = null;

  constructor() {
    super(); //Anropa alltid super-klassens konstruktor först!
    this.setState(APP_STATE_ADD_WORDS);
  }


  /*
   * Den här metoden uppdaterar Appens tillstånd = "state".
   * Beroende på state, så väljer man vilken sorts panel som ska visas.
   *
   * Notera: som argument till Panel-konstruktors skickar vi this = det här App-objektet!
   * Om man vill komma åt någon metod i App-objektet från en panel, så måste vi ha en referens ("ett handtag") dit, på något sätt.
   * Man sparar denna referens i en panels attribut: "this._appObject"
   * 
   * Vad behövs det till? Jo... 
   * Med hjälp av denna kan panelerna anropa metoden setState i App-objektet: this._appObject.setState(...).
   * T ex när vi har gjort testet och vill ändra state:  APP_STATE_START_TEST -> APP_STATE_SHOW_RESULT.
   * Då kan testpanelen göra: this._appObject.setState(APP_STATE_SHOW_RESULT);
   * Då hamnar vi i denna metod, och Appen byter från TestPanek till ShowResultPanel nedan!
   */
  setState(state) {
    this._appState = state;

    switch (state) {
      case APP_STATE_ADD_WORDS:
        //Åsterställ App-komponenten.
        this._wordList = new WordList(); //Skapa en ny tom lista
        this._currentPanel = new AddWordsPanel(this, this._wordList); //visa add words panelen
        break;

      case APP_STATE_START_TEST:
        this._currentPanel = new TestPanel(this, this._wordList); //visa testpanelen
        break;

      case APP_STATE_SHOW_RESULT:
        this._currentPanel = new ShowResultPanel(this, this._wordList); //visa result panelen
        break;

    }

  }


  //Notera: man måste ha ett s.k root-element i render-metoden, t ex en div-tag som omsluter allt!
  render(html, route) {
    /*
     * Nedanstående innehåller den HTML-kod som ska renderas för den här komponenten.
     * Beroende på Appens "state" så kommer olika paneler att visas.
     */
    return html`
      <div>
        <h1>Welcome to the GlosTest</h1>
        ${this._currentPanel}
        <hr>
        </div>
        `
  }

}

new App();