class Panel extends Domer{

    //En panel har referensen till ett appObject och en lista på ord.
    _wordList = null;
    _appObject = null;

    //Konstruktorn, den anropas när vi gör new TestPanel().
    constructor(appObject, wordList){
        super(); //anropa superklassens konstruktor
        this._wordList = wordList;
        this._appObject = appObject; //lagra en referens till App-objektet
    }

}