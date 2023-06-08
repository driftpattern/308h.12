// PS 308h.12

// let titleEl = document.getElementById('title');
// console.log(titleEl);

// console.dir()





// --------------------------


document.addEventListener('DOMContentLoaded', () => {


    const body = document.body;
  
    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const ol = document.createElement('ol');
    const ul = document.createElement('ul');
 
    

    // function to make the lists keeping JS dry 
    function createListItems(parent, count) {
      for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        parent.appendChild(li);
      }
    }
  
    
    createListItems(ol, 3);
    createListItems(ul, 3);
  
    
    div1.appendChild(ol);
    div2.appendChild(ul);
    body.appendChild(div1);
    body.appendChild(div2);



    const googleLink = document.getElementById('googleLink');
    googleLink.href = 'https://www.google.com';


  });
  
