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
    $('#e5').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function ds5Eighth(next) {
    $('#ds5').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function b4Eighth(next) {
    $('#b4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function d5Eighth(next) {
    $('#d5').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function c5Eighth(next) {
    $('#c5').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function a4Quarter(next) {
    $('#a4').click().addClass('active').wait(tempo).removeClass('active');
    setTimeout(next, tempo);
}

function eighthRest(next) {
    setTimeout(next, tempo/2);
}

function c4Eighth(next) {
    $('#c4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function e4Eighth(next) {
    $('#e4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function a4Eighth(next) {
    $('#a4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function b4QuarterDotted(next) {
    $('#b4').click().addClass('active').wait(tempo + tempo/2).removeClass('active');
    setTimeout(next, tempo + tempo/2);
}

function b4Quarter(next) {
    $('#b4').click().addClass('active').wait(tempo).removeClass('active');
    setTimeout(next, tempo);
}

function gs4Eighth(next) {
    $('#gs4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function c5Quarter(next) {
    $('#c5').click().addClass('active').wait(tempo).removeClass('active');
    setTimeout(next, tempo);
}

function e5Quarter(next) {
    $('#e5').click().addClass('active').wait(tempo).removeClass('active');
    setTimeout(next, tempo);
}

function g4Eighth(next) {
    $('#g4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function f5Eighth(next) {
    $('#f5').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function d5Quarter(next) {
    $('#d5').click().addClass('active').wait(tempo).removeClass('active');
    setTimeout(next, tempo);
}

function f4Eighth(next) {
    $('#f4').click().addClass('active').wait(tempo/2).removeClass('active');
    setTimeout(next, tempo/2);
}

function a4Half(next) {
    $('#a4').click().addClass('active').wait(tempo*2).removeClass('active');
    setTimeout(next, tempo*2);
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
