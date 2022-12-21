import {Filter} from "../Filter";
import {Word} from "../../Word";

export class MoreThanLengthFilter implements Filter {
    private wordLengthToTest: number

    constructor(length: number) {
        this.wordLengthToTest = length
    }

    public apply(word: Word): boolean {
        return word.getRaw().length > this.wordLengthToTest;
    }

}