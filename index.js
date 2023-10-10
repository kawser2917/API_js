function loadUser2(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser2(data) )
}

function displayUser2(data){
    for(const user of data){
        const userList = document.getElementById('user-list')
        const li = document.createElement('li')
        li.innerText = user.name
        userList.appendChild(li)
    }
}