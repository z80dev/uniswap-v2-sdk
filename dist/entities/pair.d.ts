import { BigintIsh, ChainId, Price, Token, CurrencyAmount } from '@uniswap/sdk-core';
export declare const computePairAddress: ({ factoryAddress, initHash, tokenA, tokenB }: {
    factoryAddress: string;
    initHash: string;
    tokenA: Token;
    tokenB: Token;
}) => string;
export declare class Pair {
    readonly liquidityToken: Token;
    private readonly tokenAmounts;
    static getAddress(tokenA: Token, tokenB: Token): string;
    static getAddressForFactory(tokenA: Token, tokenB: Token, factoryAddress: string, initHash: string): string;
    constructor(currencyAmountA: CurrencyAmount, tokenAmountB: CurrencyAmount);
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token: Token): boolean;
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price(): Price;
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price(): Price;
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token: Token): Price;
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId(): ChainId | number;
    get token0(): Token;
    get token1(): Token;
    get reserve0(): CurrencyAmount;
    get reserve1(): CurrencyAmount;
    reserveOf(token: Token): CurrencyAmount;
    getOutputAmount(inputAmount: CurrencyAmount): [CurrencyAmount, Pair];
    getInputAmount(outputAmount: CurrencyAmount): [CurrencyAmount, Pair];
    getLiquidityMinted(totalSupply: CurrencyAmount, tokenAmountA: CurrencyAmount, tokenAmountB: CurrencyAmount): CurrencyAmount;
    getLiquidityValue(token: Token, totalSupply: CurrencyAmount, liquidity: CurrencyAmount, feeOn?: boolean, kLast?: BigintIsh): CurrencyAmount;
}
