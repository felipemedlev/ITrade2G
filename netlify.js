// netlify.js
// This file helps Netlify handle Next.js routes properly
exports.handler = async function(event, context) {
  // Get path from event
  const path = event.path;

  // Check if path is for a static asset
  if (path.startsWith('/_next/') || path.startsWith('/static/')) {
    // Let Netlify handle static assets normally
    return {
      statusCode: 404,
      body: 'Not found'
    };
  }

  // For all other paths, return the index.html content
  // This allows Next.js client-side routing to work
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: require('fs').readFileSync('./out/index.html', 'utf8')
  };
};