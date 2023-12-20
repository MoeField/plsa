if(window.navigator.onLine){
    console.log("在线");
    document.write('<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>');
}
else{
    console.log("离线");
    document.write('<script src="./js/vue.global.js"></script>');
}