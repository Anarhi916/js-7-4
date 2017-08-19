
let button1 = document.querySelector('.button1');
let buttons = document.querySelector('.buttons');
let write = document.querySelector('.write');


button1.addEventListener('click', show);
buttons.addEventListener('click', hide);



function show(){
					document.getElementById('window').style.display = 'block';			
					document.getElementById('wrap').style.display = 'block'; 			
      }
function hide(e){
					document.getElementById('window').style.display = 'none';			
          document.getElementById('wrap').style.display = 'none';
          if(e.target.className == 'button2'){
           write.textContent = 'Вы выбрали опцию 1';            
          }	
          if(e.target.className == 'button3'){
            write.textContent = 'Вы выбрали опцию 2';            
          }	          		
			}