import {Filter} from "../Filter";
import {Word} from "../../Word";
import Operator from "./Operator";

export default abstract class BinaryOperator implements Operator {
    protected left: Filter;
    protected right: Filter;

    constructor(left: Filter, right: Filter) {
        this.left = left;
        this.right = right;
    }

    public abstract apply(word: Word): Boolean
}