

const counterDisplay=document.querySelector(".score");

let counter=0;


const bubbleMaker = ()=>{

    const bubble=document.createElement("span");
    // console.log(bubble);
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    // console.log(Math.random()*200  +100);
    const size=Math.random()*100 +200+ "px";
    bubble.style.height=size;
    bubble.style.width=size;
    bubble.style.top=Math.random()*100 + 50+"%";
    bubble.style.left=Math.random()*100  +"%";
    const plusMinus = Math.random() >0.5?1:-1;
    // if (plusMinus>0.5){
    //     alert("1");
    // }else{
    //     alert("-1");
    // };
    bubble.addEventListener("click",
    ()=>{
        counter++;
        console.log(counter);
        bubble.remove();
        counterDisplay.textContent=counter;
    });


    setTimeout(()=>{
        bubble.remove();
    },8000);

    bubble.style.setProperty("--left", Math.random()*100+plusMinus+ "%");
};
setInterval(bubbleMaker,2001)




















