function include(filename)
{
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

    head.appendChild(script)
}

function getChromeVersion () {     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

var chromeVersionNo = getChromeVersion();
if(chromeVersionNo < 79){
include('https://fastly.jsdelivr.net/gh/insoxin/bz@main/bz_js/inso_httpimages.js');
}else{
include('https://fastly.jsdelivr.net/gh/insoxin/bz@main/bz_js/inso_httpsimages.js');
}
