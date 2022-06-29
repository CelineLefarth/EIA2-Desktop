namespace GGSim {
    export class Pest {
        fieldX: number;
        fieldY: number;
        corrupting: boolean;

        constructor(_fiedX: number, _fieldY: number) {
            this.fieldX = _fiedX;
            this.fieldY = _fieldY;
        }

        timeupdate(): void {
            //
        }

        fly(): void {
            //
        }

        eat(): void {
            //
        }

        draw(_fieldX: number, _fieldY: number): void {
            ctx.resetTransform();
            ctx.translate(50 * _fieldX, 50 * _fieldY);
            ctx.fillStyle = "white";
            ctx.fillRect(25, 25, 5, 5);
        }

    }
}