const btnSubmit = document.querySelector('.btn'),
    selects = document.getElementsByTagName('select'),
    comment = document.getElementById('comment'),
    feedback = document.getElementById('feedback'),
    div = document.querySelector('.json-container');



function validation(){
    let elements = document.getElementById("form").elements;
    Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      if(element.value != ''){
        btnSubmit.disabled = false;
    }
    else{
        btnSubmit.disabled = true;
    }
});


    
        
        

}

function DataItem(comment,feedback,value) {
    
        this.comment = comment.value;
        this.feedback = feedback.value;
        this.selects = value;
};


function createData(){

    let arr = [].slice.call(selects);
    let value= [];

    arr.forEach(el => {
        value.push(el.value);
    });
    
    let objData = new DataItem(comment,feedback,value);
    
    let jsonData = document.createElement('div');
    let data = JSON.stringify(objData);
    
    jsonData.append(data);
    div.append(jsonData);
    return jsonData;
}


setInterval(validation, 100);



btnSubmit.addEventListener('click', async (e)=>{
        
    e.preventDefault();
    
    let data = createData();
    document.getElementById("form").reset();

    
    let res = await fetch('/server/server.js', {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          body: data,
        });
    
    if (res.ok) { 
            let json = await res.json();
            alert(json);
        } else {
            alert("Ошибка HTTP: " + res.status);
        }

    

});
