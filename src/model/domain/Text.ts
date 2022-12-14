import {Word} from "./Word";

export class Text {
    rawText: string

    constructor(text: string) {
        this.rawText = text
    }

    public getWords(): Array<Word> {
        const normalizedText = this.rawText.replaceAll(new RegExp(/[.,!?]/, "g"), "")
        const rawWords = normalizedText.split(" ")

        return rawWords.map((rawWord) => new Word(rawWord))
    }
}