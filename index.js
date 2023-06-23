"use strict";

const construir_tabela = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()

    content.innerHTML = ''

    usuarios.forEach(usuario => {
        const html = `<tr><td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.username}</td>
        <td>${usuario.website}</td></tr>`

        if (!filter.value || html.toLowerCase().includes(filter.value.toLowerCase())) {
            content.innerHTML += html
        }
    })
}

construir_tabela()
