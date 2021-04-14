function openSlideMenu(){
    document.getElementById('menu').style.width = '80vw';
    document.getElementById('content').style.marginRight = '80vw';
    document.getElementById('allpage').style.overflowY = 'hidden';
}

function closeSlideMenu(){
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginRight = '0';
    document.getElementById('allpage').style.overflowY = 'auto';
}