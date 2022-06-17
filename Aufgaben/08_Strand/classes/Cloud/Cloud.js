var strand;
(function (strand) {
    strand.cloudColor1 = "#F5F5FF";
    strand.cloudColor2 = "#F5F5FF";
    strand.cloudColor3 = "#F5F5FF";
    let hitboxClickedCloudOne = false;
    let hitboxClickedCloudTwo = false;
    let hitboxClickedCloudThree = false;
    class Cloud {
        mox;
        moy;
        mor;
        mosX;
        mosY;
        color;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            strand.ctx.strokeStyle = this.color;
            strand.ctx.lineCap = "round";
            strand.ctx.lineWidth = 150;
            strand.ctx.beginPath();
            strand.ctx.moveTo(0, 0);
            strand.ctx.lineTo(0, 0);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 200;
            strand.ctx.beginPath();
            strand.ctx.moveTo(100 + 100 * Math.sin(strand.i / 50) * 0.2, 100);
            strand.ctx.lineTo(100 + 100 * Math.sin(strand.i / 50) * 0.3, 100);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 100;
            strand.ctx.beginPath();
            strand.ctx.moveTo(100, 0);
            strand.ctx.lineTo(100, 0);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 100;
            strand.ctx.beginPath();
            strand.ctx.moveTo(-70, 100 * Math.sin(strand.i / 50) * 0.3);
            strand.ctx.lineTo(-70, 100 * Math.sin(strand.i / 50) * 0.2);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 120;
            strand.ctx.beginPath();
            strand.ctx.moveTo(-10 * Math.sin(strand.i / 50) * 0.3, 100);
            strand.ctx.lineTo(-10 * Math.sin(strand.i / 50) * 0.2, 100);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 150;
            strand.ctx.beginPath();
            strand.ctx.moveTo(200, 50 * Math.sin(strand.i / 50) * 0.3);
            strand.ctx.lineTo(200, 50 * Math.sin(strand.i / 50) * 0.3);
            strand.ctx.stroke();
            strand.reset();
        }
        interact(_x, _y, _type) {
            const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 250 && distanceY < 150) {
                if (_type == "one" && hitboxClickedCloudOne == false && strand.picked == false) {
                    hitboxClickedCloudOne = true;
                    strand.picked = true;
                    console.log("Cloud " + _type, distanceX, distanceY);
                    strand.cloudColor1 = "#333";
                }
                else if (_type == "two" && distanceY < 100 && distanceX < 70 && hitboxClickedCloudTwo == false && strand.picked == false) {
                    hitboxClickedCloudTwo = true;
                    strand.picked = true;
                    console.log("Cloud " + _type, distanceX, distanceY);
                    strand.cloudColor2 = "#444";
                }
                else if (_type == "three" && distanceY < 100 && distanceX < 70 && hitboxClickedCloudThree == false && strand.picked == false) {
                    hitboxClickedCloudThree = true;
                    strand.picked = true;
                    console.log("Cloud " + _type, distanceX, distanceY);
                    strand.cloudColor3 = "#555";
                }
            }
        }
    }
    strand.Cloud = Cloud;
})(strand || (strand = {}));
//# sourceMappingURL=Cloud.js.map