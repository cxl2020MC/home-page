self.addEventListener('install', async function (event) { 
    await self.skipWaiting();
});

self.addEventListener('activate', async function (event) { 
    if (await self.registration.unregister()) {
        
    }
    
});