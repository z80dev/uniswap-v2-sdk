import { ChainId, Currency, Price, Token } from '@uniswap/sdk-core';
import { Pair } from './pair';
export declare class Route {
    readonly pairs: Pair[];
    readonly path: Token[];
    readonly input: Currency;
    readonly output: Currency;
    get midPrice(): Price;
    constructor(pairs: Pair[], input: Currency, output?: Currency);
    get chainId(): ChainId | number;
}
