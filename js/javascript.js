let listItems = document.querySelectorAll('.set li');
listItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const name = item.id;
        const audio = new Audio(`audio/${name}.mp3`);
        audio.play();
    });
});
