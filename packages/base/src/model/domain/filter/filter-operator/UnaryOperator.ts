import Operator from "./Operator";
import {Filter} from "../Filter";
import {Word} from "../../Word";

export default abstract class UnaryOperator implements Operator {
    protected operand: Filter;

    constructor(operand: Filter) {
        this.operand = operand;
    }

    public abstract apply(word: Word): boolean
}