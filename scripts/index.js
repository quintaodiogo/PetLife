let elementosDuvida = document.querySelectorAll('.duvidaItem');
elementosDuvida.forEach(function(duvidaItem){
    duvidaItem.addEventListener('click', function(){
        duvidaItem.classList.toggle('ativa');
    });
});