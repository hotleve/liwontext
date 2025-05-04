export async function onRequest(context) {
    const userAgent = context.request.headers.get('user-agent') || '';
  
    if (/bot|crawl|spider/i.test(userAgent)) {
      return new Response('Access denied: bot detected', { status: 403 });
    }
  
    return await context.next();
  }