function imprimirDado (dado){
    console.log(dado())
}
imprimirDado(function(){
    return 'ola mundo!'
})

setTimeout(function(){
    caches.log('depois de 1s')
},1000)