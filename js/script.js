
let chiamata = fetch('../json/users.json').then(response => response.json()); 
console.log(chiamata);

  chiamata.then(data => {
    let utenti = document.querySelector('.contain');
        data.forEach(ele => {
            let li = document.createElement('div');
            li.innerHTML =` 
            
                    <div class="card" style="width: 18rem;">
                    <img src="${ele.profileURL}" class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title">${ele.username}</h5>
                        <p class="class-text">${ele.firstName} ${ele.lastName}</p>
                        <p class="class-text">Gender: ${ele.gender}</p>
                        <p class="class-text">Email: ${ele.email}</p>
                        
                    </div>
                    </div>
            `;
            let arrayut = new Array();
            arrayut.push(ele);
            console.log(arrayut[0]);
            utenti.appendChild(li);
        })
})  
