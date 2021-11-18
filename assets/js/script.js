document.querySelector('.barras').addEventListener('click', () => {
    let menu = document.querySelector('.menuLista');
    if (menu.style.width == '200px') {
        menu.style.display = 'hidden';
        menu.style.width = '0px';
        document.body.style.height = '100%';
    } else {
        menu.style.display = 'block';
        setTimeout(() => (
            menu.style.width = '200px'
        ), 100)
        
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100vh';
    }
});
