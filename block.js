// :-)

function findFavIcon(){
    var link = document.querySelector("link[rel~='icon']");
    
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    return link    
}

function isAnimated(link){
    return link.href.includes('.gif')
}

link = findFavIcon()

if(isAnimated(link)){
    link.href = 'https://www.mozilla.org/favicon.ico';
}
