Array.prototype.subarray = function(start, end) {
    if(!end) {
        end = -1;
    }
    return this.slice(start, this.length + 1 - (end * -1));
};

function rainbow(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return parseInt(c, 16);
}

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

function get_yadisk_link(code) {
    let link_1 = 'https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=https://yadi.sk/d/' + code;
    let response = JSON.parse(loadtext(link_1));
    return response.href;
}

function distSqr(a, b) {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]);
}

function prepareCanvasHolder(canvasHolderId, dataJson) {
    let ch = document.getElementById(canvasHolderId);
    let preview = ch.getElementsByClassName('preview')[0];
    ch.clientHeight = ch.clientWidth;
    let foo = function() {
        preview.innerHTML = 'Loading...';
        setTimeout(function(){
            animations.push(visualize_everything(dataJson, canvasHolderId));
            ch.removeChild(preview);
        }, 100);
    };
    document.currentScript.parentElement.addEventListener('mousedown', foo, {once:true});

}