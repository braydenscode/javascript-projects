const characterUsed = '$';
const whiteSpaceUsed = ' ';

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += characterUsed;
    }
    return line;
}

console.log(makeLine(5));
console.log('---------------');

function makeSquare(size) {
    let line = '';
    let square = '';
    for (let i = 0; i < size; i++) {
        line += characterUsed;
    } for (let j = 0; j < size; j++) {
        square += `\n${line}`
    }
    return square.slice(1);
}

console.log(makeSquare(5));
console.log('---------------');

function makeRectangle(width, height) {
    let lineVertical = '';
    let lineHorizontal = '';
    for (let i = 0; i < width; i++) {
        lineHorizontal += characterUsed;
    } for (let j = 0; j < height; j++) {
        lineVertical += `\n${lineHorizontal}`
    }
    return lineVertical.slice(1);
}

console.log(makeRectangle(5, 3));
console.log('---------------');


function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i+1) + '\n';
    }
    return stairs.slice(0, -1);  
}

console.log(makeDownwardStairs(5));
console.log('---------------');

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    let characters = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += whiteSpaceUsed;
    }
    for (let j = 0; j < numChars; j++) {
        characters += characterUsed;
    }
    return spaces + characters + spaces;
}

console.log(makeSpaceLine(3, 5));
console.log('---------------');

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));
console.log('---------------');

function makeDiamond(height) {
    let triangle = '';
    let upsideDownTriangle = '';
    for (let i = 0; i < height;i++) {
        triangle += (makeSpaceLine(height - i -1, 2*i + 1) + '\n');
    }
    for (let j = height - 1; j >= 0;j--) {
        upsideDownTriangle += (makeSpaceLine(height - j - 1, 2*j + 1) + '\n');
    }
    return triangle.slice(0, -1) + '\n' + upsideDownTriangle.slice(0, -1);
}

console.log(makeDiamond(9));