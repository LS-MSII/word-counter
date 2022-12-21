import UnaryOperator from "./UnaryOperator";
import {Word} from "../../Word";

export default class NegationOperator extends UnaryOperator {
    public apply(word: Word): boolean {
        return !this.operand.apply(word);
    }
}