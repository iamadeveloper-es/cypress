console.log('App Works!');

const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
    renderContent()
});

function renderContent(){
    const contentNode = document.getElementById('content');
    if(contentNode.textContent){
        contentNode.innerHTML = ''
    }
    else{
        contentNode.innerHTML = 'Hola, soy un contenido dinámico'
    }
}