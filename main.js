let currentCard = 0;
const minCard = 0;
const maxCard = 2;
const cards = document.getElementsByClassName('card');
const buttons = document.getElementsByClassName('eightbit-btn');

const changePage = (e) => {
    hideItem(cards[currentCard]);
    currentCard += e;
    showItem(cards[currentCard]);
    checkVisibleButtons();
}

const checkVisibleButtons = () => {
    if (currentCard === minCard) {
        hideItem(buttons[0]);
        showItem(buttons[1]);
    }

    if (currentCard === maxCard) {
        showItem(buttons[0]);
        hideItem(buttons[1]);
    }

    if (currentCard > minCard && currentCard < maxCard) {
        showItem(buttons[0]);
        showItem(buttons[1]);
    }
}

const hideItem = item => {
    item.classList.remove('show-item');
    item.classList.add('hide-item');
}

const showItem = item => {
    item.classList.remove('hide-item')
    item.classList.add('show-item')
}
