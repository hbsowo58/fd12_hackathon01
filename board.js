
   const arr = new Array(16).fill(0);
   arr.forEach(function (element, index, array) {
           const div = document.createElement('div');
           let nanu = Math.floor(index/4);
           const blank = 120;
           
           div.style.position = 'absolute';
           div.style.width = '100px';
           div.style.height = '100px';
           div.style.backgroundColor = 'black';
           div.style.marginTop = '10px';
           div.id = index;
           document.body.appendChild(div);
           console.log(div.id);
           if(nanu < 1){
            div.style.left = `${index * blank}px`;
            div.style.backgroundColor = 'red';
           }
           else if(nanu >= 1 && nanu < 2){
            div.style.left = `${4 * blank}px`;
            div.style.top = `${(index-4) * blank}px`;
            div.style.backgroundColor = 'pink';
           }
           else if(nanu >= 2 && nanu < 3){
            div.style.top = `${4 * blank}px`;
            div.style.left = `${(4-index % 8)*blank}px`;
            div.style.backgroundColor = 'yellow';
           }
           else{
            div.style.top = `${(4-index % 12)*blank}px`;
            div.style.backgroundColor = 'blue';
          }
       }
   )