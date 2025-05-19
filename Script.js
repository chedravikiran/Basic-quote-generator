let generatequote=document.querySelector('#generatequote')
let quote=document.querySelector('#quote');
let author=document.querySelector('#author');
let soundbtn=document.querySelector('#listen');
let copbtn=document.querySelector('#copy');
function newquote(){
  generatequote.innerHTML='loading quote';
  generatequote.classList.add('add');
  
  fetch("https://dummyjson.com/quotes/random").then(res=>res.json()).then(result=>{
    console.log(result);
    quote.innerText=result.quote;
    author.innerText=result.author;
    generatequote.innerHTML='generate quote';
    generatequote.classList.remove('add');
  })
}

soundbtn.addEventListener("click",function () {
  
  let utterance=SpeechSynthesisUtterance(`${quote.innerText}by${author.innerText}`);
  SpeechSynthesis.speak(utterance);
  
  
})

copbtn.addEventListener('click',()=>{
  navigator.clipboard.writeText(quote.innerText);
})

