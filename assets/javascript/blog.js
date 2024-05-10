const blogData=document.getElementById('blog-main');
const formDataList=document.getElementById('formDataList');

// retrieve the data stored in localstorage and passed it to array 
const storedArray=JSON.parse(localStorage.getItem('formData'))||[];
storedArray.forEach((data,i )=> {
    
    const div=document.createElement('div');
    const parT=document.createElement('p');
    const parT1=document.createElement('p');
    const parT2=document.createElement('p');
    const hr=document.createElement('hr');
    parT.style.margin='20px';
    parT.style.fontWeight='bold';
    parT.textContent=`Blog Title ${i+1}:   ${data.title}`;
    div.appendChild(parT);
    hr.style.width='98%';
    div.appendChild(hr);

    parT1.textContent=`${data.content}`;
    div.appendChild(parT1);
    parT2.textContent=`Posted by: ${data.username}`;
    div.appendChild(parT2);
    div.style.border='2px solid black';
    div.style.marginTop='5px';
    formDataList.appendChild(div);
});