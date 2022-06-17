namespace strand {

    export let titanicTurn: number = 0;
    export let titanicDirection: number = 1;
    export let titanicDrag: number = 0;
    let hitboxClicked: boolean = false;

    export class Ship {
        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        color: string;
        color2: string;
        color3: string;
        color4: string;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _color?: string, _color2?: string, _color3?: string, _color4?: string) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
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
        

        interact(_x: number, _y: number): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 500 && distanceY < 150 && hitboxClicked == false) {
            console.log("Schiff", distanceX, distanceY);
            hitboxClicked = true;
            picked = true;
            titanicDirection = 0;
            titanicTurn = 1.6;
            titanicDrag = 2;
            }
        }

    }
}