
    let img = document.querySelector('.btn');
    img.addEventListener('click',esce);

function esce(){
let chiamata = fetch('../json/users.json').then(response => response.json()); 
console.log(chiamata);

  chiamata.then(data => {
    let utenti = document.querySelector('.cont');
        data.forEach(ele => {
            let li = document.createElement('div');
            li.innerHTML =` 

                    <div class="card" style="width: 18rem;">
                    <img src="${ele.profileURL}" class="card-img-top"></img>
                    <div id="card" class="card-body">
                        <h5 class="card-title">${ele.username}</h5>
                        <p class="class-text">${ele.firstName} ${ele.lastName}</p>
                        <p class="class-text">Gender: ${ele.gender}</p>
                        <p class="class-text">Email: ${ele.email}</p>
                        
                    </div>
                    </div>
            `;
            
            utenti.appendChild(li);
            
        })

    })  
}
/* img.addEventListener('dbclick',esce); */


 

