const slider = document.querySelector(".slider");
const form = document.querySelector(".form");
const slider1 = document.querySelector(".slider1");
const form1 = document.querySelector(".form1");
let mouseDownAt = 0;
let left = 0;
slider.onmousedown = (e) => {
    mouseDownAt = e.clientX;
    console.log(mouseDownAt);
};
slider1.onmousedown = (e) => {
    mouseDownAt = e.clientX;
    console.log(mouseDownAt);
};
slider.onmouseup = () => {
    mouseDownAt = 0;  
    slider.style.userSelect = 'unset';
    slider.style.cursor = 'unset';
    form.style.pointerEvents = 'unset';
    form.classList.remove('left');
    form.classList.remove('right');
}
slider1.onmouseup = () => {
    mouseDownAt = 0;  
    slider1.style.userSelect = 'unset';
    slider1.style.cursor = 'unset';
    form1.style.pointerEvents = 'unset';
    form1.classList.remove('left');
    form1.classList.remove('right');
}
slider.onmousemove = e => {
    if(mouseDownAt == 0) return;
    slider.style.userSelect = 'none';
    slider.style.cursor = 'grab';
    form.style.pointerEvents = 'none';
    
    if(e.clientX > mouseDownAt){
        form.classList.add('left');
        form.classList.remove('right');
    }else if(e.clientX < mouseDownAt){
        form.classList.remove('left');
        form.classList.add('right');
    }
    // increase or decrease the speed 
    //by changing the value of 'speed'
    let speed = 3;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form.offsetWidth - slider.offsetWidth / 2;

    
    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
        form.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }

}
slider1.onmousemove = e => {
    if(mouseDownAt == 0) return;
    slider1.style.userSelect = 'none';
    slider1.style.cursor = 'grab';
    form1.style.pointerEvents = 'none';
    
    if(e.clientX > mouseDownAt){
        form1.classList.add('left');
        form1.classList.remove('right');
    }else if(e.clientX < mouseDownAt){
        form1.classList.remove('left');
        form1.classList.add('right');
    }
    // increase or decrease the speed 
    //by changing the value of 'speed'
    let speed = 3;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form1.offsetWidth - slider1.offsetWidth / 2;

    
    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
        form1.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }

}