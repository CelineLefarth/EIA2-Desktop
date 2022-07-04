namespace GGSim {

    export class Pest {
        fieldX: number;
        fieldY: number;

        constructor(_fiedX: number, _fieldY: number) {
            this.fieldX = _fiedX;
            this.fieldY = _fieldY;
        }

        fly(): void {
            //
        }

        draw(_fieldX: number, _fieldY: number): void {
            ctx.resetTransform();
            ctx.translate(Field.size * _fieldX + Field.size / 2, Field.size * _fieldY + Field.size / 2);
            ctx.rotate(-animationTime);
            ctx.scale(0.3, 0.3);
            ctx.drawImage(Asset.moth, 0, 0);
        }

    }
}