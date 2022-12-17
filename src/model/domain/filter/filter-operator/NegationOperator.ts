import UnaryOperator from "./UnaryOperator";
import {Word} from "../../Word";

export default class NegationOperator extends UnaryOperator {
    public apply(word: Word): Boolean {
        return !this.operand.apply(word);
    }
}