//tipo nome(parametros){}

void main() {
  var minhaClasse = MinhaClasse();
  printHelloWorld(message:minhaClasse.message);
}

void printHelloWorld({required String message}) {
  print(message.replaceAll("DEU", "NÃO DEU"));
}

//classe - class NameFunctions{}
class MinhaClasse {
  var message = "DEU CERTO! ";
}
