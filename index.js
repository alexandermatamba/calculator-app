let result = document.getElementById('result');
const btns = document.getElementsByClassName('btns');
const calculateResults = document.getElementById('calculate')
const deleteValues = document.getElementById('delete');

// val => value
function screenResult(val){
     result.innerHTML = val
     return result;
}

function display(){
     for(const iteratorBtn of btns){
     
          iteratorBtn.addEventListener('click', () => {
               result.innerHTML += iteratorBtn.value
          });
     }
}
display();

calculateResults.addEventListener('click', () => {
     let valuesGeneral = eval(result.innerHTML);
     screenResult(valuesGeneral);
})

deleteValues.addEventListener('click', () => {
     screenResult('');
});

