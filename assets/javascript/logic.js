//function to change the theme from dark to light or from light to dark
function changeTheme(){

    let themEl=document.getElementById('theme');
    let imgEl=document.getElementById('myImage');
    
        //change the image source and class
        if(themEl.className==='light'){
        imgEl.src='./assets/images/moon.jpg';
        themEl.className='dark';
        }
        else{
            imgEl.src='./assets/images/sun.jpg';
        themEl.className='light';
        } 
}