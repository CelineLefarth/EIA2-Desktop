namespace GGSim {

    export interface Price {
        type: string;
        amount: number;
        cost: number;
    }

    export class Market {
        price: Price;
        fluctuation: number[];
    }
}