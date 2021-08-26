var prod = 500
var cont  = 1
var parcela = 9
while (cont <= parcela){
    if (cont>4){
        valor_parcela =  ((prod *(15/100))+ prod)  / cont;
        console.log(`Pode ser pago em ${cont} Vezes de ${valor_parcela.toFixed(2)} Com Juros de 15%`)
        cont = cont + 1;
    }else{

    
    valor_parcela = prod / cont;
    console.log(`Pode ser pago em ${cont} Vezes de ${valor_parcela.toFixed(2)}`)
    cont = cont + 1;}
    
}

console.log(`A parcela fica em R$${valor_parcela.toFixed(2)} dividindo em ${cont} Vezes`)