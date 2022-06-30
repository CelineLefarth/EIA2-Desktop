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
            ctx.translate(Field.size * _fieldX, Field.size * _fieldY);
            ctx.fillStyle = "white";
            ctx.fillRect(Field.size / 3, Field.size / 3, Field.size / 10, Field.size / 10);
        }

    }
}