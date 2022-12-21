import BinaryOperator from "./BinaryOperator";
import {Word} from "../../Word";

export default class OrOperator extends BinaryOperator {
    public apply(word: Word): boolean {
        return this.left.apply(word) || this.right.apply(word);
    }
}