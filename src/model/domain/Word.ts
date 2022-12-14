export class Word {
    private rawWord: string

    constructor(rawWord: string) {
        this.rawWord = rawWord
    }

    public getRaw(): string {
        return this.rawWord;
    }

    public static wordsFromStringArray(stringArray: string[]): Array<Word> {
        return stringArray.map((rawWord) => new Word(rawWord))
    }

    public static wordsFromStrings(...strings: string[]): Array<Word> {
        return this.wordsFromStringArray(strings)
    }
}