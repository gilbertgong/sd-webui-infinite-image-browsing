(() => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
    <script type="module" crossorigin src="/baidu_netdisk/fe-static/assets/index-542652c2.js"></script>
    <link rel="stylesheet" href="/baidu_netdisk/fe-static/assets/index-9e7c5731.css">
  </head>
  <body>
    <div id="zanllp_dev_gradio_fe"></div>
    
  </body>
</html>
`
  const asyncCheck = async (getter, checkSize = 100, timeout = 1000) => {
    return new Promise(x => {
      const check = (num = 0) => {
        const target = getter();
        if (target !== undefined && target !== null) {
          x(target)
        } else if (num > timeout / checkSize) {// 超时
          x(target)
        } else {
          setTimeout(() => check(++num), checkSize);
        }
      };
      check();
    });
  }
  // eslint-disable-next-line no-undef
  asyncCheck(() => gradioApp().querySelector("#baidu_netdisk_container_wrapper"), 500, Infinity).then((el) => {
    /**
     * @type {HTMLDivElement}
     */
    const wrap = el
    wrap.childNodes.forEach(v => wrap.removeChild(v))
    const iframe = document.createElement('iframe')
    iframe.srcdoc = html 

    iframe.style = `width:100%;height:${window.innerHeight - 128}px`
    window.addEventListener('resize', () => {
      iframe.style = `width:100%;height:${window.innerHeight - 128}px`
    })
    wrap.appendChild(iframe)
  })
})()