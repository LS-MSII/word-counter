import {TextVal} from "../domain/TextVal";
import {Filter} from "../domain/filter/Filter";

export default class WordCounter {
    public count(text: TextVal, filter: Filter) {
        const words = text.getWords()
        return words.filter(word => filter.apply(word)).length
    }
}