/*
 * Den här klassen är en samling av glosor.
 * Den exponerar ett antal metoder som andra klasser kan använda.
 */
class WordList extends Domer{

    _words = [];
    constructor(){
        super();
    }

    //Lägg till ett nytt ord till testet.
    add(newWord){
        this._words.push(newWord);
    }

    getNumWords(){
        return this._words.length;
    }

    //Töm alla svarsrutorna
    clearAnswers(){
        for (let word of this._words){
            word.reset();
        }
    }

    //Beräkna slutresultat och färga svaren
    getResultAndSetColors(){
        let points = 0;
        //Gå igenom alla ord!
        for (let word of this._words){
            //Kolla om ordet har rätt svar...
            let isCorrectAnswer = word.isCorrectAnswer();

            //Uppdatera färgen på ordet ifall rätt eller fel...
            word.setCorrectAnswer(isCorrectAnswer); 

            //Om svaret var rätt, öka antal poäng...
            if (isCorrectAnswer){
                points++;
            }
        }
        return points;
    }

    render(html) {
        return html`
        <div> 
            ${this._words}
          </div>
        `
    }

}