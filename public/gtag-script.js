(function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', `${process.env.NEXT_PUBLIC_GTAG}`);
})();