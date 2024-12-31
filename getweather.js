addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

//定义返回的 html 结构
const html = `
<div id="he-plugin-standard"></div>
<script>
WIDGET = {
  "CONFIG": {
    "layout": "2",
    "width": 230,
    "height": 270,
    "background": "1",
    "dataColor": "FFFFFF",
    "key": "xxx"
  }
}
</script>
<script src="https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"></script>
`

async function handleRequest(request) {
  return new Response(html, {
      //设置响应头
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}
