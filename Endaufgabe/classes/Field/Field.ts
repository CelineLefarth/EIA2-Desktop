namespace GGSim {
    export class Field {
        time: number;
        positionX: number;
        positionY: number;

        constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }

        clicked(_x: number, _y: number): void {
            if (0 < this.positionX / 50 && this.positionX / 50 < 50 && 0 < this.positionY / 50 && this.positionY / 50 < 50) {
                console.log(this.positionX, this.positionY);
            }
            
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX, this.positionY);
            ctx.fillStyle = "darkbrown";
            ctx.fillRect(5, 5, 45, 45);
            }

        clearField(): void {
            //
        }
    }
}