import {Word} from "./Word";

export class Text {
    private rawText: string

    constructor(text: string) {
        this.rawText = text
    }

    public getWords(): Array<Word> {
        const normalizedText = this.rawText.replaceAll(new RegExp(/[.,!?]/, "g"), "")
        const rawWords = normalizedText.split(" ")
        console.log(rawWords)

        return Word.wordsFromStringArray(rawWords)
    }
}