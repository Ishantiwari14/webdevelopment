// Array.prototype.pop = function () {
//     console.log("Hey ho!!")
// }

function makeColor(r, g, b) {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    return color;
}


const newColor = makeColor(50, 240, 40)
newColor.rgb()

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // console.log(this)
}

const blue = new Color(0, 0, 255)

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
}