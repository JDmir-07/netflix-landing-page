const list = document.querySelectorAll('.list-item')
const last_clicked = {button : null, clicked : 0};
for(let item of list) {
    const mainButton = item.children[0];
    const divElement = item.children[1];
    mainButton.addEventListener('click', function() {
        if (last_clicked.clicked < 1) {
            last_clicked.clicked = 1;
            last_clicked.button = item;
            divElement.style.height = '100%';
            divElement.style.padding = '20px';
            mainButton.children[0].innerText = 'x';
        } else if (item === last_clicked.button) {
            last_clicked.clicked = 0;
            last_clicked.button = null;
            divElement.style.height = '0';
            divElement.style.padding = '0 20px';
            mainButton.children[0].innerText = '+';
        } else {
            const temp = last_clicked.button.children[1];
            temp.style.height = '0';
            temp.style.padding = '0 20px';
            last_clicked.button.children[0].children[0].innerText = '+';
            last_clicked.button = item;
            divElement.style.height = '100%';
            divElement.style.padding = '20px';
            mainButton.children[0].innerText = 'x';
        }
    })
}