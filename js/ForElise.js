const tempo = 500;

document.getElementById('play').addEventListener('click', async (event) => {
    const Queue = (arr) => {
        let index = 0;
        let next = () => {
            if (index >= arr.length) {return;}
            arr[index++](next);
        };
        return next;
    };

    Queue([
        e5Eighth, ds5Eighth, e5Eighth, ds5Eighth, e5Eighth, b4Eighth, d5Eighth, c5Eighth, a4Quarter,

        eighthRest,

        c4Eighth, e4Eighth, a4Eighth, b4Quarter,

        eighthRest,

        e4Eighth, gs4Eighth, b4Eighth, c5Quarter,

        eighthRest,

        e4Eighth, e5Eighth, ds5Eighth, e5Eighth, ds5Eighth, e5Eighth, b4Eighth, d5Eighth, c5Eighth, a4Quarter,

        eighthRest,

        c4Eighth, e4Eighth, a4Eighth, b4Quarter,

        eighthRest,

        e4Eighth, c5Eighth, b4Eighth, a4Quarter,

        eighthRest,

        b4Eighth, c5Eighth, d5Eighth, e5Quarter,

        eighthRest,

        g4Eighth, f5Eighth, e5Eighth, d5Quarter,

        eighthRest,

        f4Eighth, e5Eighth, d5Eighth, c5Quarter,

        eighthRest,

        e4Eighth, d5Eighth, c5Eighth, b4QuarterDotted,

        eighthRest,

        e5Eighth, ds5Eighth, e5Eighth, ds5Eighth, e5Eighth, b4Eighth, d5Eighth, c5Eighth, a4Quarter,

        eighthRest,

        c4Eighth, e4Eighth, a4Eighth, b4Quarter,

        eighthRest,

        e4Eighth, gs4Eighth, b4Eighth, c5Quarter,

        eighthRest,

        e4Eighth, e5Eighth, ds5Eighth, e5Eighth, ds5Eighth, e5Eighth, b4Eighth, d5Eighth, c5Eighth, a4Quarter,

        eighthRest,

        c4Eighth, e4Eighth, a4Eighth, b4Quarter,

        eighthRest,

        e4Eighth, c5Eighth, b4Eighth, a4Half
    ])();
});

//Nốt đen: Quarter note.
//Nốt móc đơn: Eighth note.
//Nốt trắng: Half note.
//Dấu chấm dôi: Dotted note.
//Dấu lặng: Rest.

function e5Eighth(next) {
    document.getElementById('e5').click();
    document.getElementById('e5').classList.add('active');
    setTimeout(() => {
        document.getElementById('e5').classList.remove('active');
        next();
    }, tempo/2);
}

function ds5Eighth(next) {
    document.getElementById('ds5').click();
    document.getElementById('ds5').classList.add('active');
    setTimeout(() => {
        document.getElementById('ds5').classList.remove('active');
        next();
    }, tempo/2);
}

function b4Eighth(next) {
    document.getElementById('b4').click();
    document.getElementById('b4').classList.add('active');
    setTimeout(() => {
        document.getElementById('b4').classList.remove('active');
        next();
    }, tempo/2);
}

function d5Eighth(next) {
    document.getElementById('d5').click();
    document.getElementById('d5').classList.add('active');
    setTimeout(() => {
        document.getElementById('d5').classList.remove('active');
        next();
    }, tempo/2);
}

function c5Eighth(next) {
    document.getElementById('c5').click();
    document.getElementById('c5').classList.add('active');
    setTimeout(() => {
        document.getElementById('c5').classList.remove('active');
        next();
    }, tempo/2);
}

function a4Quarter(next) {
    document.getElementById('a4').click();
    document.getElementById('a4').classList.add('active');
    setTimeout(() => {
        document.getElementById('a4').classList.remove('active');
        next();
    }, tempo);
}

function eighthRest(next) {
    setTimeout(next, tempo/2);
}

function c4Eighth(next) {
    document.getElementById('c4').click();
    document.getElementById('c4').classList.add('active');
    setTimeout(() => {
        document.getElementById('c4').classList.remove('active');
        next();
    }, tempo/2);
}

function e4Eighth(next) {
    document.getElementById('e4').click();
    document.getElementById('e4').classList.add('active');
    setTimeout(() => {
        document.getElementById('e4').classList.remove('active');
        next();
    }, tempo/2);
}

function a4Eighth(next) {
    document.getElementById('a4').click();
    document.getElementById('a4').classList.add('active');
    setTimeout(() => {
        document.getElementById('a4').classList.remove('active');
        next();
    }, tempo/2);
}

function b4QuarterDotted(next) {
    document.getElementById('b4').click();
    document.getElementById('b4').classList.add('active');
    setTimeout(() => {
        document.getElementById('b4').classList.remove('active');
        next();
    }, tempo + tempo/2);
}

function b4Quarter(next) {
    document.getElementById('b4').click();
    document.getElementById('b4').classList.add('active');
    setTimeout(() => {
        document.getElementById('b4').classList.remove('active');
        next();
    }, tempo);
}

function gs4Eighth(next) {
    document.getElementById('gs4').click();
    document.getElementById('gs4').classList.add('active');
    setTimeout(() => {
        document.getElementById('gs4').classList.remove('active');
        next();
    }, tempo/2);
}

function c5Quarter(next) {
    document.getElementById('c5').click();
    document.getElementById('c5').classList.add('active');
    setTimeout(() => {
        document.getElementById('c5').classList.remove('active');
        next();
    }, tempo);
}

function e5Quarter(next) {
    document.getElementById('e5').click();
    document.getElementById('e5').classList.add('active');
    setTimeout(() => {
        document.getElementById('e5').classList.remove('active');
        next();
    }, tempo);
}

function g4Eighth(next) {
    document.getElementById('g4').click();
    document.getElementById('g4').classList.add('active');
    setTimeout(() => {
        document.getElementById('g4').classList.remove('active');
        next();
    }, tempo/2);
}

function f5Eighth(next) {
    document.getElementById('f5').click();
    document.getElementById('f5').classList.add('active');
    setTimeout(() => {
        document.getElementById('f5').classList.remove('active');
        next();
    }, tempo/2);
}

function d5Quarter(next) {
    document.getElementById('d5').click();
    document.getElementById('d5').classList.add('active');
    setTimeout(() => {
        document.getElementById('d5').classList.remove('active');
        next();
    }, tempo);
}

function f4Eighth(next) {
    document.getElementById('f4').click();
    document.getElementById('f4').classList.add('active');
    setTimeout(() => {
        document.getElementById('f4').classList.remove('active');
        next();
    }, tempo/2);
}

function a4Half(next) {
    document.getElementById('a4').click();
    document.getElementById('a4').classList.add('active');
    setTimeout(() => {
        document.getElementById('a4').classList.remove('active');
        next();
    }, tempo*2);
}


// E5 moc
// DS5 moc
// E5 moc
// DS5 moc
// E5 moc
// B4 moc
// D5 moc
// C5 moc
// A4 den

//8th rest

// C4 moc
// E4 moc
// A4 moc
// B4 den

//8th rest

// E4 moc
// GS4 moc
// B4 moc
// C5 den

//8th rest

// E4 moc
// E5 moc
// DS5 moc
// E5 moc
// DS5 moc
// E5 moc
// B4 moc
// D5 moc
// C5 moc
// A4 den

//8th rest

// C4 moc
// E4 moc
// A4 moc
// B4 den

//8th rest

// E4 moc
// C5 moc
// B4 moc
// A4 den

//8th rest

// B4 moc
// C5 moc
// D5 moc
// E5 den

//8th rest

// G4 moc
// F5 moc
// E5 moc
// D5 den

//8th rest

// F4 moc
// E5 moc
// D5 moc
// C5 den

//8th rest

// E4 moc
// D5 moc
// C5 moc
// B4 den cham doi

//8th rest

// E5 moc
// DS5 moc
// E5 moc
// DS5 moc
// E5 moc
// B4 moc
// D5 moc
// C5 moc
// A4 den

//8th rest

// C4 moc
// E4 moc
// A4 moc
// B4 den

//8th rest

// E4 moc
// GS4 moc
// B4 moc
// C5 den

//8th rest

// E4 moc
// E5 moc
// DS5 moc
// E5 moc
// DS5 moc
// E5 moc
// B4 moc
// D5 moc
// C5 moc
// A4 den

//8th rest

// C4 moc
// E4 moc
// A4 moc
// B4 den

//8th rest

// E4 moc
// C5 moc
// B4 moc
// A4 trang
