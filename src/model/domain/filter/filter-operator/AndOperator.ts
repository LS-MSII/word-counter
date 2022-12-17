import BinaryOperator from "./BinaryOperator";
import {Word} from "../../Word";

export default class AndOperator extends BinaryOperator {
    public apply(word: Word): Boolean {
        return this.left.apply(word) && this.right.apply(word);
    }

}