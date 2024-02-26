document.addEventListener('DOMContentLoaded', carregarUsers);

async function carregarUsers(){
    try {
        //fazendo requisição ao jsonplaceholder - users
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await resposta.json();
        console.log(users)
        const usersHTML = users.map( user => {
            return`<div class='user'>
                        <h2>User:   ${user.name}</h2>
                        <p>Username:${user.username} </p>
                        <p>Email:   ${user.email} </p>
                        <p>Phone:   ${user.phine} </p>
                    </div>`
        })
        const userContainer = document.getElementById('container')
        userContainer.innerHTML = usersHTML.join('');
    }

    catch(error) {
        console.error('Ocorreu um erro ao carregar o usuario', error);
    }

}