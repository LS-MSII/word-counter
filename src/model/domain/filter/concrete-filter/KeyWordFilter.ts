import {Filter} from "../Filter";
import {Word} from "../../Word";

export default class KeyWordFilter implements Filter {
    private keywordsToTest: Array<Word>

    constructor(keywords: Array<Word>) {
        this.keywordsToTest = keywords
    }

    apply(word: Word): Boolean {
        return this.keywordsToTest.map(w => w.getRaw()).includes(word.getRaw().toLowerCase())
    }

}