addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response(request.body, {
    headers: { 'content-type': 'text/plain' },
  });
}
