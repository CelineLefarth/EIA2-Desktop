namespace GGSim {

    export class Pest {
        public position: number = 400;
        private fieldX: number;
        private fieldY: number;

        public constructor(_fiedX: number, _fieldY: number) {
            this.fieldX = _fiedX;
            this.fieldY = _fieldY;
        }

        public draw(_fieldX: number, _fieldY: number): void {
            ctx.resetTransform();
            this.fly(_fieldX, _fieldY);
            ctx.scale(0.3, 0.3);
            ctx.drawImage(Asset.moth, 0, 0);
        }


        private fly(_fieldX: number, _fieldY: number): void {

            ctx.translate(Field.size * _fieldX + Field.size / 2, Field.size * _fieldY + Field.size / 2 + this.position);
            if (this.position <= 0) {
                ctx.rotate(-animationTime);
                }
            else {
                this.position -= 5;
            }

        }

    }
}