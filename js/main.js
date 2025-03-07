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

//site load
var originalContent = document.getElementById('content2');
var content = document.getElementById('content');
document.getElementById('contact-tab').addEventListener('click', function() {
    loadPage('contact.html', originalContent, content);
});
document.getElementById('home-tab').addEventListener('click', function() {
    goHome(originalContent, content);
});
document.getElementById('about-tab').addEventListener('click', function() {
    loadPage('about.html', originalContent, content);
});

function loadPage(page, ogContent, content) {
    fetch(page)
      .then(response => response.text())
      .then(data => {
        content.style.display = 'block';
        content.innerHTML = data;
        ogContent.style.display = 'none';
      });
}

function goHome(ogContent, content) {
    ogContent.style.display = 'block';
    content.innerHTML = '';
    content.style.display = 'none';
}

//form
function validateInput(input) {
    if (input.value.trim() === '') {
        input.classList.add('invalid');
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('msgError').style.display = 'block';
    } else {
        input.classList.remove('invalid');
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('msgError').style.display = 'none';
    }
}

function validateForm(event) {
    var emailInput = document.getElementById('infor-input-email');
    var msgInput = document.getElementById('msg-input');
    if (emailInput.value.trim() === '') {
        event.preventDefault();
        emailInput.classList.add('invalid');
        document.getElementById('emailError').style.display = 'block';
    }
    if (msgInput.value.trim() === '') {
        event.preventDefault();
        msgInput.classList.add('invalid');
        document.getElementById('msgError').style.display = 'block';
    }
}

AOS.init();
$(document).ready(function() {
    $('#btn-close').click(function() {
        $('#alert').slideUp(500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("./lol.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("dukmig-text2").innerHTML = data;
        })
        .catch(error => console.error("error while loading filefile HTML: ", error));
});


function toggleDivs() {
    var div1 = document.getElementById("dukmig-text1");
    var div2 = document.getElementById("dukmig-text2");

    if (div1.style.display === "none") {
        div1.style.display = "block";
        div2.style.display = "none";
    } else {
        div1.style.display = "none";
        div2.style.display = "block";
    }
}


