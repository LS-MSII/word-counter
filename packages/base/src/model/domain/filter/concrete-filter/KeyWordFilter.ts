import {Filter} from "../Filter";
import {Word} from "../../Word";

export default class KeyWordFilter implements Filter {
    private keywordsToTest: Array<Word>

    public constructor(keywords: Array<Word>) {
        this.keywordsToTest = keywords
    }

    public apply(word: Word): boolean {
        return this.keywordsToTest.map(w => w.getRaw()).includes(word.getRaw().toLowerCase())
    }

}