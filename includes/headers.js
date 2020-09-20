var head  = document.getElementsByTagName('head')[0];

// to add meta
var meta = document.createElement('meta');
meta.charset = "UTF-8";
head.appendChild(meta);

meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
head.appendChild(meta);

// to add links
var link_items = [
    {
        'rel':'stylesheet',
        'type':'text/css',
        'href':'scripts/css/style.css',
        'sizes':''
    },
    {
        'rel':'stylesheet',
        'type':'text/css',
        'href':'scripts/css/mapsed.css',
        'sizes':''
    },
    {
        'rel':'apple-touch-icon',
        'type':'image/png',
        'href':'assets/icon/apple-touch-icon.png',
        'sizes':'180x180'
    },
    {
        'rel':'icon',
        'type':'image/png',
        'href':'assets/icon/favicon-32x32.png',
        'sizes':'32x32'
    },
    {
        'rel':'icon',
        'type':'image/png',
        'href':'assets/icon/favicon-16x16.png',
        'sizes':'16x16'
    },
    {
        'rel':'manifest',
        'type':'',
        'href':'assets/icon/site.webmanifest',
        'sizes':''
    }
]
link_items.forEach(item => {
    var link  = document.createElement('link');
    link.rel  = item.rel;
    link.type = item.type;
    link.href = item.href;
    link.media = 'all';
    head.appendChild(link);
});