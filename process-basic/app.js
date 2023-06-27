import('./Server.js').then((Server) => {
    const server = new Server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
    });
});