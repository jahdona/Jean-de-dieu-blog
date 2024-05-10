
const form=document.getElementById('myForm');
const saveButton=document.getElementById('saveForm');
let username=document.getElementById('username');
let title=document.getElementById('title');
let content=document.getElementById('content');
// get data from the form by using constructor new FormData()
let dataArray=[];
let dataObject={};
function saveFormData(){
   
    //const formData= new FormData(form);
    
   
 
 //create object with the value from the form
 dataObject={
    username:username.value,
    title:title.value,
    content:content.value
 };
 if( dataObject.username==='' || dataObject.title===''||dataObject.content===''){
    alert("Username, Title or Content should not be empty");
    return;
 }
    //getting data using for each loop and store in object
   /* formData.forEach((value,key)=>{
        dataObject[key]=value;
        if(dataObject[key]===null)
        {
            return
        }
    });*/
    
    //Retrieve existing data from localStorage or initialize an empty array
    else{
     dataArray=JSON.parse(localStorage.getItem('formData'))||[];
    //add new form data to the array

    dataArray.push(dataObject);
    console.log(dataArray); 
    username.value='';
    title.value='';
    content.value='';
     
    const jsonData=JSON.stringify(dataArray);
    localStorage.setItem('formData',jsonData);

}}
saveButton.addEventListener('click',function(event){
    event.preventDefault();
    saveFormData();
    window.location.href='../Jean-de-dieu-blog/blog.html';
});
function init(){
    saveFormData();
}
init();

