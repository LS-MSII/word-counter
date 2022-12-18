import WordCounter from "../model/application/WordCounter";
import {NoFilter} from "../model/domain/filter/NoFilter";
import {Text} from "../model/domain/Text";

export class Main {
    public static main() {
        const rawText = "This is a cool text that serves as a test game for the word counter example. Don't make me a hyper-architect's design. I see you, arr!"

        const text = new Text(rawText)
        const counter = new WordCounter()

        const noFilter = new NoFilter()

        console.log("Total Words: " + counter.count(text, noFilter))
    }
}