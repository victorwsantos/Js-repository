const hoje = new Date()
const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}

const horas = hoje.getHours()
let  msg = ""
if (horas >= 0 && horas < 12 ){
    msg = "Bom dia"
}else if( horas >= 12 && horas <= 18){
    msg = "Boa tarde"
}else{
    msg = "Boa noite"
}
console.log(`Hoje é ${hoje.toLocaleDateString('PT-BR', option)}, ${msg}`)
console.log(`Bem vindo ao meu primiero programa em JavaScript \n`)
console.log(`Vamos Calcular o valor de parcelas  com e sem Juros?\n`)
var prod = 500
console.log(`o valor do porduto é R$${prod},00\n`)
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