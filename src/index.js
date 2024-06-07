let nomeHeroi = "Nelsin";
let nivelHeroi = 45421;

if(nivelHeroi <= 1000){
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Ferro");
}else if((nivelHeroi > 1000) && (nivelHeroi <= 2000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Bronze");
}else if((nivelHeroi > 2000) && (nivelHeroi <= 5000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Prata");
}else if((nivelHeroi > 5000) && (nivelHeroi <= 7000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Ouro");
}else if((nivelHeroi > 7000) && (nivelHeroi <= 8000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Platina");
}else if((nivelHeroi > 8000) && (nivelHeroi <= 9000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Ascendente");
}else if((nivelHeroi > 9000) && (nivelHeroi <= 10000)) {
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Imortal");
}else if((nivelHeroi > 10000)){
    console.log("O Heroi " +nomeHeroi, "tem o nivel de Radiante com " +nivelHeroi, "Pontos!");
}else{
    console.log("erro");
}