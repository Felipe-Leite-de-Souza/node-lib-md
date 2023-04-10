import fs from "fs";
import chalk from "chalk";
import { error } from "console";

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
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro);
    }
}




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

pegaArquivo("./arquivos/texto.md");
pegaArquivo("./arquivos/");