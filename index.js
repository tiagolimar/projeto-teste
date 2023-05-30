fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(json=>{
        json.forEach(element => {
            content.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.email}</td></tr>`
        });
    })