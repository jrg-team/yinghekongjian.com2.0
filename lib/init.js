window.onload = () => {
    const buildFlag = process.env.BUILD_FLAG
    let src = 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-11-1-41.f61896f6.png'
    if (buildFlag === 'yinghekongjian') {
        src = 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-11-4-27.png'
    }
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon';
    link.href = src;
    document.head.appendChild(link);
}

(function (m, ei, q, i, a, j, s) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    j = ei.createElement(q),
        s = ei.getElementsByTagName(q)[0];
    j.async = true;
    j.charset = 'UTF-8';
    j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
    s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', 61296);
_MEIQIA('withoutBtn');
let meqiaButton = document.createElement('img')
meqiaButton.className = 'meqia-button'
meqiaButton.onclick = () => _MEIQIA('showPanel')
meqiaButton.src = "https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-24-21-18-27.png"
document.body.append(meqiaButton)