namespace strand {

    export abstract class Hitbox {

        abstract mox: number;
        abstract moy: number;
        abstract mor: number;
        abstract mosX: number;
        abstract mosY: number;

        abstract interact(_x: number, _y: number, _type: string): void;
    }
}