self.addEventListener('install', function(){
    console.log('install')
});

self.addEventListener('fetch', function(){
    console.log('fetch');
})