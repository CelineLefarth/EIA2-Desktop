namespace strand {
    export class Background {
        static draw(): void {
            let redness: number = (Math.sin((300 + i) / 200) * 0.9);
            ctx.fillStyle = "rgba(" + redness * 200 + ",50," + redness * -200 + "," + redness + ")";
            ctx.fillRect(0, 0, cw, ch);
    
            ctx.fillStyle = "#007DA5";
            ctx.fillRect(0, ch / 2, cw, ch);
    
            ctx.fillStyle = "#F5D78C";
            ctx.fillRect(0, ch / 1.5, cw, ch);
    
            ctx.resetTransform();
        }
    }
}