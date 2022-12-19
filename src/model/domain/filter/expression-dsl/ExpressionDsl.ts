import {Filter} from "../Filter";
import {Word} from "../../Word";
import NegationOperator from "../filter-operator/NegationOperator";
import AndOperator from "../filter-operator/AndOperator";
import OrOperator from "../filter-operator/OrOperator";
import Express from "./Express";

export default class ExpressionDsl implements Filter {
    protected innerFilter: Filter;

    constructor(filter: Filter) {
        this.innerFilter = filter;
    }

    public apply(word: Word): Boolean {
        return this.innerFilter.apply(word);
    }

    public orBy(filter: Filter): ExpressionDsl {
        return Express.toFilterBy(new OrOperator(this, filter));
    }

    public orByNot(filter: Filter): ExpressionDsl {
        return Express.toFilterBy(new OrOperator(this, new NegationOperator(filter)));
    }

    public andBy(filter: Filter): ExpressionDsl {
        return Express.toFilterBy(new AndOperator(this, filter));
    }

    public andByNot(filter: Filter): ExpressionDsl {
        return Express.toFilterBy(new AndOperator(this, new NegationOperator(filter)));
    }
}