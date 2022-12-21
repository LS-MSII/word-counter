import {Word} from "../Word";

export interface Filter {
    apply(word: Word): boolean
}