namespace strand {

    export class Ship extends BeachObject {
        color: string;
        color2: string;
        color3: string;
        color4: string;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _color?: string, _color2?: string, _color3?: string, _color4?: string) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
            this.color2 = _color2;
            this.color3 = _color3;
            this.color4 = _color4;
        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            //Black Ship Body
            path = new Path2D;
            path.moveTo(0, 0);
            path.lineTo(-100, 100);
            path.lineTo(400, 100);
            path.lineTo(400, 0);
            ctx.fillStyle = this.color2;
            ctx.fill(path);
            //Red Ship Body
            path = new Path2D;
            path.moveTo(0, 0);
            path.lineTo(-40, 40);
            path.lineTo(400, 40);
            path.lineTo(400, 0);
            ctx.fillStyle = this.color;
            ctx.fill(path);
            //White Ship Body-Stripe
            path = new Path2D;
            path.moveTo(-90, 90);
            path.lineTo(-100, 100);
            path.lineTo(400, 100);
            path.lineTo(400, 90);
            ctx.fillStyle = this.color3;
            ctx.fill(path);
            //White Ship Body-Roof
            path = new Path2D;
            path.moveTo(-60, 99);
            path.lineTo(-40, 120);
            path.lineTo(340, 120);
            path.lineTo(360, 99);
            ctx.fillStyle = this.color3;
            ctx.fill(path);

            for (let chimnieCount: number = 0; chimnieCount < 4; chimnieCount++) {
                let sizeChimnieCount: number = chimnieCount * 60 + 40;
                //Ship Chimni Gold
                path = new Path2D;
                path.moveTo(0 + sizeChimnieCount, 120);
                path.lineTo(0 + sizeChimnieCount, 160);
                path.lineTo(30 + sizeChimnieCount, 160);
                path.lineTo(30 + sizeChimnieCount, 120);
                ctx.fillStyle = this.color4;
                ctx.fill(path);

                //Ship Chimni Black
                path = new Path2D;
                path.moveTo(0 + sizeChimnieCount, 160);
                path.lineTo(0 + sizeChimnieCount, 180);
                path.lineTo(30 + sizeChimnieCount, 180);
                path.lineTo(30 + sizeChimnieCount, 160);
                ctx.fillStyle = this.color2;
                ctx.fill(path);
            }
            reset();

            //console.log(this.mox, this.moy);
            

        }
        
        move(): void {
            this.mox = 1.5 * i + 600;
            this.mor = Math.sin(i / 50) * 0.05 + 0;
        }

        interact(_x: number, _y: number): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 50 * this.mosX && distanceY < 150 && picked == false) {
            console.log("Schiff", distanceX, distanceY);
            picked = true;
            alert("Hier gibt es keine Eisberge");
            }
        }

    }
}