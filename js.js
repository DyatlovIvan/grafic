const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');


const randomValue = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

const update = () => {
    const Points = []
    const maxLength = randomValue(2, 10)

    for (let i = 0; Points.length < maxLength; i++) {
        let min = Points[i - 1] && Points[i - 1].x < 800 ? Points[i - 1].x : 0
        let max = Points[i - 1] && Points[i - 1].x < 800 ? Points[i - 1].x + 100 : 100
        Points.push({x: randomValue(min, max), y: randomValue(0, 800)})
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    Points.forEach((point, index, arr) => {
        if (arr.length > 1) {

            if (index === 0)
                ctx.moveTo(point.x, point.y);

            if (index !== arr.length - 1)
                ctx.lineTo(arr[index + 1].x, arr[index + 1].y);
        }
    });

    ctx.stroke();

    ctx.fillStyle = "#000"
    Points.forEach((point, index, arr) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

}

canvas.addEventListener("click", e => {
    update();
})

update();