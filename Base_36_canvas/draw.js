"use strict";
function drawPlate() {
    /** @type {HTMLCanvasElement} */
    var ele = document.getElementById("myCanvas");
    var ctx = ele.getContext("2d");

    ctx.save();
    ctx.translate(200, 200);

    //画外表盘
    ctx.save();
    ctx.strokeStyle = 'rgb(0,100,200)';
    ctx.lineWidth = 15;
    ctx.moveTo(180,0);
    ctx.arc(0, 0, 180, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();

    //画刻度
    for (var i = 0; i < 60; i++) {
        //用旋转的方法画刻度
        ctx.save();
        ctx.rotate(Math.PI / 30 * i);
        if (i % 5 == 0) {
            //画大刻度
            ctx.save();
            ctx.lineWidth = 8;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(140, 0);
            ctx.lineTo(160, 0);
            ctx.stroke();
            ctx.restore();
            ctx.restore();
            continue;

        }
        //画小刻度

        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(150, 0);
        ctx.lineTo(160, 0);
        ctx.stroke();
        ctx.restore();

    }
    //坐标中心还原
    ctx.restore();
}

function drawHourHand(hour, minute) {
    //画时针
    /** @type {HTMLCanvasElement} */
    var ele = document.getElementById("myCanvas");
    var ctx = ele.getContext("2d");
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(Math.PI / 6 * (hour - 3) + Math.PI / 360 * minute);
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.restore();

}
function drawMinHand(minute) {
    //画分针
    /** @type {HTMLCanvasElement} */
    var ele = document.getElementById("myCanvas");
    var ctx = ele.getContext("2d");
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(Math.PI / 30 * (minute - 15));
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(130, 0);
    ctx.stroke();
    ctx.restore();

}
function drawSecondHand(second) {
    //画秒针
    /** @type {HTMLCanvasElement} */
    var ele = document.getElementById("myCanvas");
    var ctx = ele.getContext("2d");
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(Math.PI / 30 * (second - 15));
    //先画秒针
    ctx.save();
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.beginPath();
    ctx.moveTo(-40, 0);
    ctx.lineTo(106, 0);
    ctx.stroke();
    ctx.restore();

    //再画中心圆
    ctx.save();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.fillStyle = 'grey';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 4, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //再画秒针尾部圆
    ctx.save();
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.beginPath();
    ctx.moveTo(134, 0);
    ctx.arc(120, 0, 14, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();

    //还原坐标系
    ctx.restore();


}
function clearCanvas() {
    //清除画布
    /** @type {HTMLCanvasElement} */
    
    var ele = document.getElementById("myCanvas");
    var ctx = ele.getContext("2d");
    ctx.save();
    
    ctx.fillStyle='white';  
    ctx.beginPath();  
    ctx.fillRect(0,0,ele.width,ele.height);  
    ctx.closePath(); 
    ctx.restore(); 
}

function drawClock() {
    var timeNow = new Date();
    var hour = timeNow.getHours();
    var minute = timeNow.getMinutes();
    var second = timeNow.getSeconds();
    clearCanvas();
    drawPlate();
    drawHourHand(hour, minute);
    drawMinHand(minute);
    drawSecondHand(second);
    
    
}
