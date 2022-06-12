
let chiamata = fetch('../json/users.json').then(response => response.json()); 
console.log(chiamata);

  chiamata.then(data => {
    let utenti = document.querySelector('.cont');
        data.forEach(ele => {
            let li = document.createElement('div');
            li.innerHTML =` 
                
                    <div id=${ele.username} class="card" style="width: 18rem;">
                    <img src="${ele.profileURL}" class="card-img-top"></img>
                    <h5 class="card-title">${ele.username}</h5>
                    <div id=${ele.username}-card class="card-body">
                        
                        <p class="class-text">${ele.firstName} ${ele.lastName}</p>
                        <p class="class-text">Gender: ${ele.gender}</p>
                        <p class="class-text">Email: ${ele.email}</p>
                        
                    </div>
                    </div>
            `;
            
            utenti.appendChild(li);
            let img = document.querySelector('#'+ ele.username);
            img.addEventListener('click',function(){
                esce(ele.username);         
            
            });
            
        })

})  
  
    function esce(username) {
        let testo = document.querySelector('#'+username + '-card');

        testo.classList.toggle('on');
    
    } 

 

