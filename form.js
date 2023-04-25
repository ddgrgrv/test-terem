const btnSubmit = document.querySelector('.btn'),
    form = document.getElementById('form'),
    container = document.querySelector('.json-container'),
    collection = document.querySelectorAll('.form-control');

function createData(data){

    const jsonData = [];

    data.forEach((el)=>{
            const {name, value} = el;
            jsonData.push({name, value});
        }
    );
    
    container.append(JSON.stringify(jsonData));
    return jsonData;
}

async function sendData(){
    const data = createData(collection);

    let res = await fetch('/server/server.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
    
    if (res.ok) { 
        let json = res.json();
        alert(json);
    } 
    else {
        alert("Ошибка HTTP: " + res.status);
    }

    form.reset();
}

btnSubmit.addEventListener('click',sendData);
