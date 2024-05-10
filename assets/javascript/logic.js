//function to change the theme from dark to light or from light to dark
function changeTheme(){

    let themEl=document.getElementById('theme');
    let imgEl=document.getElementById('myImage');
    
        //change the image source and class
        if(themEl.className==='light'){
            imgEl.src='./assets/images/moon.jpg';
            themEl.className='dark';
            document.body.style.backgroundColor='#082d51';
            
            }
            else{
                imgEl.src='./assets/images/sun.jpg';
            themEl.className='light';
            document.body.style.backgroundColor='#f9fbfd';
            } 
}