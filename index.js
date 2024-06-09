const toggleButton = document.getElementById('dark-mode-toggle'); // The dark mode toggle button
const body = document.body;
let cur="light";
let icon=document.querySelector('#icon');


toggleButton.addEventListener("click",()=>{
    if(cur=="light"){
        body.classList.add('dark-mode');
        cur="dark";
        icon.src="sun.png";
    }else{
        body.classList.remove('dark-mode');
        cur="light";
        icon.src="moon.png";
    }
});
