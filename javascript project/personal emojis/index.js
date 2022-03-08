
let myEmoji=[]

const localEm=JSON.parse(localStorage.getItem('emoji'))

let empojiContainer=document.getElementById('emojicontainer')
let pushBtn= document.getElementById('push-btn')
let unshiftBtn=document.getElementById('unshift-btn')
let emojiInp=document.getElementById('emoji-input')
let popBtn=document.getElementById('pop-btn')
let shiftBtn=document.getElementById('shift-btn')
if(localEm){
  myEmoji=localEm
   render()
}
function render(){
   for(let i=0;i<myEmoji.length;i++)
  {
     let em=document.createElement('span')
     em.textContent+=myEmoji[i]
     empojiContainer.append(em)
  }
}


function emojiModify(va){
   if(emojiInp.value){
      myEmoji.va(emojiInp.value)
      emojiInp.value=''   
      empojiContainer.innerHTML=' '
      localStorage.setItem('emoji',JSON.stringify(myEmoji))
       render()
   }
}
pushBtn.addEventListener('click',function(){
 emojiModify("push")
   
})

 unshiftBtn.addEventListener('click',function(){
   emojiModify("unshift")    


 })
 shiftBtn.addEventListener('click',function(){
       myEmoji.shift()
       localStorage.setItem('emoji',JSON.stringify(myEmoji))
       empojiContainer.innerHTML=''
        render()
       


 })

 popBtn.addEventListener('click',function(){
    myEmoji.pop()
      empojiContainer.innerHTML=''
      localStorage.setItem('emoji',JSON.stringify(myEmoji))
      render()
    


})










