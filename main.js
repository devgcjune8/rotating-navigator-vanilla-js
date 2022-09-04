const navigateBtn = document.querySelector('#navigate');
const exitBtn = document.querySelector('#exit');
const containerDiv = document.querySelector('.container');
const linkBtns = document.querySelector('.links')

navigateBtn.addEventListener("click", () => {
    containerDiv.classList.add('active-nav');

    
});

exitBtn.addEventListener("click", () => {
    containerDiv.classList.remove('active-nav');
})

linkBtns.addEventListener("click", () => 
 
    containerDiv.classList.remove('active-nav')
)
