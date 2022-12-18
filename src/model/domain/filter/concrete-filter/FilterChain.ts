import {Filter} from "../Filter";
import {Word} from "../../Word";

export class FilterChain implements Filter {
    private innerFilter: Filter
    private nextFilter: FilterChain | undefined = undefined

    private constructor(filter: Filter) {
        this.innerFilter = filter
    }

    public static startWith(filter: Filter): FilterChain {
        if (filter instanceof FilterChain) {
            return filter
        }
        return new FilterChain(filter)
    }

    public apply(word: Word): Boolean {
        const result = this.innerFilter.apply(word)

        if (!this.hasNext()) {
            return result
        }
        // @ts-ignore
        return result && this.nextFilter.apply(word)
    }

    public setNext(filter: Filter): FilterChain {
        this.nextFilter = new FilterChain(filter)
        return this.nextFilter
    }

    public hasNext(): Boolean {
        return this.nextFilter !== undefined
    }
}