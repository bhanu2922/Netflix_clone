const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems =document.querySelectorAll('.tab-content-item');

//select tab content item
function secectItem(e){
    //remove all show and border classses
    removeBorder();
    removeShow();
    //Add border to current tab item
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

//remove bottom borders from all tab items
function removeBorder(){
    tabItems.forEach(item => {
        item.classList.remove('tab-border');

    });
}
//remove show class from all content item 
function removeShow(){
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}
//liat for tab item click
tabItems.forEach(item =>{
    item.addEventListener('click',secectItem);
});