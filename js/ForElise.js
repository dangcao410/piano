document.getElementById('play').addEventListener('click', async (event) => {
    const tempo = 500;
    const map = [
        'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-b4', 'Eighth-d5', 'Eighth-c5', 'Quarter-a4',

        'EighthRest',

        'Eighth-c4', 'Eighth-e4', 'Eighth-a4', 'Quarter-b4',

        'EighthRest',

        'Eighth-e4', 'Eighth-gs4', 'Eighth-b4', 'Quarter-c5',

        'EighthRest',

        'Eighth-e4', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-b4', 'Eighth-d5', 'Eighth-c5', 'Quarter-a4',

        'EighthRest',

        'Eighth-c4', 'Eighth-e4', 'Eighth-a4', 'Quarter-b4',

        'EighthRest',

        'Eighth-e4', 'Eighth-c5', 'Eighth-b4', 'Quarter-a4',

        'EighthRest',

        'Eighth-b4', 'Eighth-c5', 'Eighth-d5', 'Quarter-e5',

        'EighthRest',

        'Eighth-g4', 'Eighth-f5', 'Eighth-e5', 'Quarter-d5',

        'EighthRest',

        'Eighth-f4', 'Eighth-e5', 'Eighth-d5', 'Quarter-c5',

        'EighthRest',

        'Eighth-e4', 'Eighth-d5', 'Eighth-c5', 'QuarterDotted-b4',

        'EighthRest',

        'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-b4', 'Eighth-d5', 'Eighth-c5', 'Quarter-a4',

        'EighthRest',

        'Eighth-c4', 'Eighth-e4', 'Eighth-a4', 'Quarter-b4',

        'EighthRest',

        'Eighth-e4', 'Eighth-gs4', 'Eighth-b4', 'Quarter-c5',

        'EighthRest',

        'Eighth-e4', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-ds5', 'Eighth-e5', 'Eighth-b4', 'Eighth-d5', 'Eighth-c5', 'Quarter-a4',

        'EighthRest',

        'Eighth-c4', 'Eighth-e4', 'Eighth-a4', 'Quarter-b4',

        'EighthRest',

        'Eighth-e4', 'Eighth-c5', 'Eighth-b4', 'Half-a4'
    ];

    let time;
    for (let i = 0; i < map.length; i++) {
        const note = map[i].split('-');

        if (note[0] == 'Eighth') time = tempo/2; //Nốt móc đơn: Eighth note.
        if (note[0] == 'Quarter') time = tempo; //Nốt đen: Quarter note.
        if (note[0] == 'Half') time = tempo*2; //Nốt trắng: Half note.
        if (note[0] == 'EighthRest') time = tempo/2; //Dấu lặng: Rest.
        if (note[0] == 'QuarterDotted') time = tempo + tempo/2; //Dấu chấm dôi: Dotted note.

        if (note[1]) {
            $('#' + note[1]).click().addClass('active').wait(time).removeClass('active');
        }
        await new Promise(resolve => setTimeout(resolve, time));
    }
})


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
