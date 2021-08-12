const buttonManageNew = document.getElementsByName('option_tab');
const displayManageCard = document.getElementsByClassName('form_manage_card')[0];
const displayNewCard = document.getElementsByClassName('form_new_card')[0];






// CHANGE TABS
function changeTab() {
    if (buttonManageNew[1].checked) {
        displayNewCard.classList.add('showElement');
        displayManageCard.classList.add('hiddeElement');
        
    } else if (buttonManageNew[0].checked) {
        displayNewCard.classList.remove('showElement');
        displayManageCard.classList.remove('hiddeElement');
    }
};
buttonManageNew[0].onclick = changeTab;
buttonManageNew[1].onclick = changeTab;
