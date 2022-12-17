import WordCounter from "../model/application/WordCounter";
import {NoFilter} from "../model/domain/filter/concrete-filter/NoFilter";
import {TextVal} from "../model/domain/TextVal";
import {VowelStartFilter} from "../model/domain/filter/concrete-filter/VowelStartFilter";
import {MoreThanLengthFilter} from "../model/domain/filter/concrete-filter/MoreThanLengthFilter";
import KeyWordFilter from "../model/domain/filter/concrete-filter/KeyWordFilter";
import {Word} from "../model/domain/Word";
import {FilterChain} from "../model/domain/filter/concrete-filter/FilterChain";

export class Main {
    public static main() {
        const rawText = "This is a cool text that serves as a test game for the word counter example. Don't make me a hyper-architect's design. I see you, arr!"

        const text = new TextVal(rawText)
        const counter = new WordCounter()

        const noFilter = new NoFilter()
        console.log("Total Words: " + counter.count(text, noFilter))

        const vowelStartFilter = new VowelStartFilter()
        console.log("Starting with vowel: " + counter.count(text, vowelStartFilter))

        const moreThanTwoCharactersFilter = new MoreThanLengthFilter(2)
        console.log("More than two characters: " + counter.count(text, moreThanTwoCharactersFilter))

        const keywords = Word.wordsFromStrings("cool", "text", "make", "a", "arr")
        const keyWordFilter = new KeyWordFilter(keywords)
        console.log("Keywords: " + counter.count(text, keyWordFilter))

        const fc1Chain = FilterChain.startWith(vowelStartFilter)
            fc1Chain.setNext(moreThanTwoCharactersFilter)
        console.log("Starts with vowel and has more than two characters: "
            + counter.count(text, fc1Chain))

        const fc2Chain = FilterChain.startWith(keyWordFilter)
                fc2Chain.setNext(vowelStartFilter)
        console.log("Keywords that start with vowel: "
            + counter.count(text, fc2Chain))

        const fc3Chain = FilterChain.startWith(keyWordFilter)
                fc3Chain
                    .setNext(fc1Chain)
        console.log("Keywords that start with vowel with more than two characters: "
            + counter.count(text, fc3Chain))


    }
}