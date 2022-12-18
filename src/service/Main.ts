import WordCounter from "../model/application/WordCounter";
import {NoFilter} from "../model/domain/filter/concrete-filter/NoFilter";
import {Text} from "../model/domain/Text";
import {VowelStartFilter} from "../model/domain/filter/concrete-filter/VowelStartFilter";
import {MoreThanLengthFilter} from "../model/domain/filter/concrete-filter/MoreThanLengthFilter";
import KeyWordFilter from "../model/domain/filter/concrete-filter/KeyWordFilter";
import {Word} from "../model/domain/Word";

export class Main {
    public static main() {
        const rawText = "This is a cool text that serves as a test game for the word counter example. Don't make me a hyper-architect's design. I see you, arr!"

        const text = new Text(rawText)
        const counter = new WordCounter()

        const noFilter = new NoFilter()
        console.log("Total Words: " + counter.count(text, noFilter))

        const vowelStartFilter = new VowelStartFilter()
        console.log("Starting with vowel: " + counter.count(text, vowelStartFilter))

        const moreThanLengthFilter = new MoreThanLengthFilter(2)
        console.log("More than two characters: " + counter.count(text, moreThanLengthFilter))

        const keywords = Word.wordsFromStrings("cool", "text", "make", "a", "arr")
        const keyWordFilter = new KeyWordFilter(keywords)
        console.log("Keywords: " + counter.count(text, keyWordFilter))

    }
}