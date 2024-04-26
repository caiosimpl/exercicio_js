const form = document.getElementById('formJS');


form.addEventListener('submit', function(e){
    e.preventDefault()
    const valorA = document.getElementById('valor-a')
    const valorB = document.getElementById('valor-b')
    
    const mensagemSucesso = `Correto! o ${valorB.value} é maior que o ${valorA.value}`
    const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')

    console.log(valorB.value)
    console.log(valorA.value)

    if (valorB.value >= valorA.value) {
    
        document.querySelector('.mensagem-erro').style.display='none';
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        document.querySelector('.mensagem-erro').style.display='none';
        valorA.value = ''
        valorB.value = ''

    } else {
        
        containerMensagemSucesso.style.display = 'none';
        document.querySelector('.mensagem-erro').style.display = 'block'
        
      
    }   
})



