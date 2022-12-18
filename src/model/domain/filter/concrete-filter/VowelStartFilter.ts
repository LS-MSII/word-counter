import {Filter} from "../Filter";
import {Word} from "../../Word";

export class VowelStartFilter implements Filter {
    public apply(word: Word): Boolean {
        const vowelsToTest = ["a", "e", "i", "o", "u"]
        const wordFirstCharacter = word.getRaw().at(0)

        // wordFirstCharacter is of type string | undefined, so we need to check first
        if (wordFirstCharacter === undefined) {
            return false
        }
        return vowelsToTest.includes(wordFirstCharacter.toLowerCase());
    }

}