namespace strand {

    
    export abstract class BeachObject {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number) {
        this.mox = _mox;
        this.moy = _moy;
        this.mor = _mor;
        this.mosX = _mosX;
        this.mosY = _mosY; 
        }

        abstract interact?(_x: number, _y: number): void;
        abstract draw(): void;
        abstract move(): void;
    }
}