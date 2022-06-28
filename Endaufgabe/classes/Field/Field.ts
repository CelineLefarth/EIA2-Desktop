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
            _x = _x - 50;
            _y = _y - 50;
            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50 ) {
                console.log("Spalte: " + this.positionX / 50, "Zeile: " + this.positionY / 50);
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