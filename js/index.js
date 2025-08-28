function getElement(id){
    const element=document.getElementById(id)
    return element
}

// For heart Icon
const hearts=document.getElementsByClassName('heart-icon')
for(let heart of hearts){
    heart.addEventListener('click', function(){
        const redHeart=getElement('heart-numbers').innerText
        const heartNum=Number(redHeart)+1;
        getElement('heart-numbers').innerText=heartNum

    })
}

// For call button

const callbtns=document.getElementsByClassName('call-btn')
for(let callbtn of callbtns){
    callbtn.addEventListener('click',function(){
        const title=callbtn.parentNode.parentNode.children[1].children[0].innerText
        const subtitle=callbtn.parentNode.parentNode.children[1].children[1].innerText
        const number=callbtn.parentNode.parentNode.children[1].children[2].innerText   
          const iconsNum=getElement('coins').innerText
        const reduceCoins=Number(iconsNum)-20 
        getElement('coins').innerText=reduceCoins

        if(iconsNum>0){
            alert(`📞Calling ${subtitle} ${number} `)
             const callhistoryContainer=getElement('call-historys')
        const div=document.createElement('div')
        const now=new Date()
        const localSring=now.toLocaleTimeString()
        div.innerHTML=`
        <div class="w-full bg-[#FAFAFA] rounded-lg p-4 shadow-md mb-4"> 
        <div class="flex justify-between">
        <div>
        <h3 class="font-semibold text-lg">${title}</h3>
        <p class="text-gray-600 text-lg" >${number}</p>
        </div>
        <h3>${localSring}</h3>
        </div>
        </div> `
        callhistoryContainer.appendChild(div)
        }
        else{
       alert('❌ You have no sufficient coins.You need at least 20 coins to make a call')
       getElement('coins').innerText=0

            
        }


    })
}
// For clear button
document.getElementById('clear-btn').addEventListener('click',function(){
     const callhistoryContainer=getElement('call-historys')
     callhistoryContainer.innerHTML=""

})

// For copy 
const copyBtns=document.getElementsByClassName('copy')
for(let copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){
        const copy=getElement('copy-btn').innerText
        const copyNum=Number(copy)+1
        getElement('copy-btn').innerText=copyNum
        const copiedNumber=copyBtn.parentNode.parentNode.children[1].children[2].innerText
        alert(`The number has been copied ${copiedNumber}`)
        navigator.clipboard.writeText(copiedNumber)
    })

}