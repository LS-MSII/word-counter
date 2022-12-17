import {Filter} from "../Filter";
import {Word} from "../../Word";
import NegationOperator from "../filter-operator/NegationOperator";
import AndOperator from "../filter-operator/AndOperator";
import OrOperator from "../filter-operator/OrOperator";

export default class ExpressionDsl {
    protected innerFilter: Filter;

    constructor(filter: Filter) {
        this.innerFilter = filter;
    }

    public apply(word: Word): Boolean {
        return this.innerFilter.apply(word);
    }

    private expression(filter: Filter): ExpressionDsl {
        return new ExpressionDsl(filter);
    }

    public or(filter: Filter): ExpressionDsl {
        return this.expression(new OrOperator(this, filter));
    }

    public orNot(filter: Filter): ExpressionDsl {
        return this.expression(new OrOperator(this, new NegationOperator(filter)));
    }

    public and(filter: Filter): ExpressionDsl {
        return this.expression(new AndOperator(this, filter));
    }

    public andNot(filter: Filter): ExpressionDsl {
        return this.expression(new AndOperator(this, new NegationOperator(filter)));
    }
}