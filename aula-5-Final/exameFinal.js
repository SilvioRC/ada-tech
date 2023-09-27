// QUESTÃO 1
/*const readline = require('readline');

const horario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function conversorDeHorario(hora12Horas) {
  // Separa a hora, minutos, segundos e AM/PM
  const horaMinSegAMPM = hora12Horas.match(/(\d{2}):(\d{2}):(\d{2})([APM]{2})/);

  if (!horaMinSegAMPM) {
    return 'Formato de hora inválido';
  }

  let horas = parseInt(horaMinSegAMPM[1]);
  const minutos = horaMinSegAMPM[2];
  const segundos = horaMinSegAMPM[3];
  const ampm = horaMinSegAMPM[4];

  if (ampm === 'PM' && horas !== 12) {
    horas += 12;
  } else if (ampm === 'AM' && horas === 12) {
    horas = 0;
  }

  return `${horas}:${minutos}:${segundos}`;
}

horario.question('Digite um horário no formato 12hs (exemplo: 06:15:25PM): ', (hora12Horas) => {
  const hora24Horas = conversorDeHorario(hora12Horas);
  console.log(`Horário no formato 24hs: ${hora24Horas}`);
  horario.close();
});
*/


// QUESTÃO 2
/*function contaPalavras(s) {
    return s.split(/(?=[A-Z])/).length;
}

var frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
console.log(contaPalavras(frase));*/


// QUESTÃO 3
/*function encontrarNumerosSolitarios(array) {
    const contador = {};
  
    for (const numero of array) {
      if (contador[numero]) {
        contador[numero]++;
      } else {
        contador[numero] = 1;
      }
    }
  
    const numerosSolitarios = [];
    for (const numero in contador) {
      if (contador[numero] === 1) {
        numerosSolitarios.push(parseInt(numero));
      }
    }
  
    return numerosSolitarios;
  }
  
  const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
  const solitarios = encontrarNumerosSolitarios(numeros);
  console.log("Números solitários:", solitarios); 
  */

// QUESTÃO 4
// Alternativa E) 1 1 2 1 2 3 1 2 3 4

// QUESTÃO 5
// Alternative A) true

// QUESTÃO 6
// Alternativa B) 2