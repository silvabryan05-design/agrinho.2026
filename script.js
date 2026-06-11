// 🔢 CONTADOR ANIMADO
const counters = document.querySelectorAll(".contador");

counters.forEach(counter=>{
    const update=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;

        const inc=target/100;

        if(count<target){
            counter.innerText=Math.ceil(count+inc);
            setTimeout(update,20);
        }else{
            counter.innerText=target;
        }
    }
    update();
});


// 💧 CALCULADORA
function calcular(){
    const litros=document.getElementById("litros").value;
    const resultado=litros*365;

    document.getElementById("resultado")
    .innerText=`Você economiza ${resultado} litros por ano.`;
}


// 🧠 QUIZ
function resposta(certa){
    const msg=document.getElementById("mensagem");

    if(certa){
        msg.innerText="✅ Correto!";
    }else{
        msg.innerText="❌ Tente novamente.";
    }
}


// 🌙 (opcional simples) tema futuro
document.addEventListener("keydown",(e)=>{
    if(e.key==="t"){
        document.body.classList.toggle("escuro");
    }
});
