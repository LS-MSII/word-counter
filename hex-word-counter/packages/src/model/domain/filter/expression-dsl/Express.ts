import ExpressionDsl from "./ExpressionDsl";
import {Filter} from "../Filter";
import NegationOperator from "../filter-operator/NegationOperator";

export default class Express {
    private constructor() {
    }

    public static toFilterBy(filter: Filter): ExpressionDsl {
        return new ExpressionDsl(filter);
    }

    public static toFilterByNot(filter: Filter): ExpressionDsl {
        return Express.toFilterBy(new NegationOperator(filter));
    }
}