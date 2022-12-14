import {Text} from "../domain/Text";
import {Filter} from "../domain/filter/Filter";

export default class WordCounter {
    public count(text: Text, filter: Filter) {
        const words = text.getWords()
        return words.filter((word) => filter.apply(word)).length
    }
}