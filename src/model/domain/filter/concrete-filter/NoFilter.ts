import {Filter} from "../Filter";
import {Word} from "../../Word";

export class NoFilter implements Filter {
    public apply(word: Word): Boolean {
        return true;
    }

}