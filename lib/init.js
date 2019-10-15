window.onload = () => {
    const buildFlag = process.env.BUILD_FLAG
    let src = 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-11-1-41.f61896f6.png'
    if (buildFlag === 'yinghekongjian'){
        src = 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-11-4-27.png'
    }
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/x-icon';
    link.href = src;
    document.head.appendChild(link);
}