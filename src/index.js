import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(capturas => ({[capturas[1]]: capturas[2]}));
    return resultados.length !== 0 ? resultados : "não há links no arquivo.";
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "caminho informado pertence a um diretório."));
}

/* função assíncrona
 * async/await
*/

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

export default pegaArquivo;



/* função assíncrona
 * promises com then()
*/

//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = "utf-8";
//    fs.promises.readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(chalk.green(texto)))
//        .catch(trataErro);
//}





// função síncrona

//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = "utf-8";
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//        if (erro){
//            trataErro(erro);
//        }
//        console.log(chalk.green(texto));
//    });
//}

//pegaArquivo("./arquivos/texto.md");
//pegaArquivo("./arquivos/");