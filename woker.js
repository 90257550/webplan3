addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    
    if (url.pathname === '/api/status') {
      const SERVER_IP = "cadteam.net" // 使用你的域名
      const response = await fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}`)
      const data = await response.json()
      
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    // 返回HTML页面
    const html = `<!DOCTYPE html>
    <html lang="zh">
    <!-- 使用上面HTML文件的内容 -->
    </html>`
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    })
  }