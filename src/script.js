function gerarPdf() {
  let novaPagina = document.implementation.createHTMLDocument("Termo Do Dispositivo: ");
  let linkCSS = novaPagina.createElement("link");
  linkCSS.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  linkCSS.rel = "stylesheet";
  linkCSS.integrity =
    "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
  linkCSS.crossOrigin = "anonymous";
  novaPagina.head.appendChild(linkCSS);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const monthYear = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const year = date.getFullYear();

  let funcionario = document.getElementById("funcionario").value;
  console.log(funcionario);
  let cpf_number = document.getElementById("cpf_number").value;
  let modeloin = document.getElementById("modelodis").value;
  console.log(modeloin);
  let imeivalidado = document.getElementById("imei").value;
  console.log(imeivalidado);

  function cpf(numeroCPF) {
    let cpf = numeroCPF;
    let newcpf = undefined;

    if (cpf.length != 11 || cpf === null || isNaN(cpf)) {
      while (true) {
        alert(
          `ERRO - CPF INVÁLIDO!! Ceritifique-se de digitar:\n
        1- Onze digitos
        2- Apenas números

        \n\n Tente novamente!`
        );

        cpf = prompt("Digite o cpf do funcionario:");

        if (cpf.length === 11 && cpf !== null && isNaN(cpf) === false) {
          newcpf = `${cpf.substring(0, 3)} . ${cpf.substring(
            3,
            6
          )} . ${cpf.substring(6, 9)} - ${cpf.substring(9, 11)} `;

          document.getElementById("cpf_number").value = newcpf;
          return newcpf;
        }
      }
    } else {
      newcpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
        6,
        9
      )}-${cpf.substring(9, 11)} `;
      return newcpf;
    }
  }
  function coletarImei(imeivalidado) {
    let imei = imeivalidado;
    if (imei.length != 15 || imei === null || isNaN(imei)) {
      while (imei != 15) {
        alert(
          `ERRO - imei INVÁLIDO!! Ceritifique-se de digitar:\n
              1- Quinze digitos

          \n\n Tente novamente!`
        );
        imei = prompt("Digite o imei do Dispositivo:");
        if (imei.length === 15 && imei !== null && isNaN(imei) === false) {
          return imei;
        }
      }
    } else {
      return imei;
    }
  }

  let numbercpf = cpf(cpf_number);
  let imeivalidado2 = coletarImei(imeivalidado);

  function capitalizarNomefuncionario(nomeCompleto) {
    // Dividir o nome completo em palavras
    let palavras = nomeCompleto.split(" ");

    // Capitalizar cada palavra
    let nomeCapitalizado = palavras
      .map(function (palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
      })
      .join(" ");

    return nomeCapitalizado;
  }

  funcionario = capitalizarNomefuncionario(funcionario);
  modeloin = modeloin.toUpperCase();
  let objeto = {
    funcionario: funcionario,
    cpf: numbercpf,
    modelo: modeloin,
    imei: imeivalidado2,
    modelodis: modeloin,
  };

  function itens() {
    let item1 = document.getElementById("componenteCarregador");
    let item2 = document.getElementById("componenteUSB");
    let item3 = document.getElementById("componentechaveSlot");
    let item4 = document.getElementById("componenteChip");

    let itenstotal = `
  <b>Marca:  </b> ${objeto.modelodis} </br>
  <b>IMEI:</b> ${objeto.imei} </br> 
  <b>Acessório(s): </b>
`;

    if (item1.checked) {
      itenstotal += `${item1.value}, `;
    }
    if (item2.checked) {
      itenstotal += `${item2.value}, `;
    }
    if (item3.checked) {
      itenstotal += `${item3.value}, `;
    }
    if (item4.checked) {
      itenstotal += `${item4.value}, `;
    }

    // Removendo a vírgula extra no final, se houver
    itenstotal = itenstotal.replace(/, $/, "");

    return itenstotal;
  }

  function condicoes() {
    let condicional = document.getElementById("telatrincadaRadio");
    if (condicional.checked) {
      let condicoesgerais = `<br><b> Condições:  PALM COM A TELA TRINCADA</b>`;
      return condicoesgerais;
    } else {
      let condicoesgerais = ``;
      return condicoesgerais;
    }
  }

  novaPagina.body.innerHTML = ` <body style="font-size: small;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 10rem">
  <img
src="https://www.alvoarlacteos.com.br/wp-content/uploads/2022/04/Landing-Page-Desktop.png" alt="Logo Alvoar Lácetos"
style="width: 7rem;"
/>
<div class="mainNew">
  <div style="font-weight: 700;
    font-style: normal;
    display: flex;
    width: 100%;
    align-content: center;
    align-items: center;
    justify-content: center;">
    TERMO DE RESPONSABILIZAÇÃO PELA GUARDA E USO DE EQUIPAMENTO DE
    TRABALHO
  </div>

  <div style="text-align: justify;
  font-size: smaller;"> A <strong>ALVOAR LACTEOS NORDESTE S/A</strong>, nova denominação de BETÂNIA LÁCTEOS S/A, pessoa jurídica de direito privado, com
  matriz sediada na Rua Carlos Câmara, 1454, Jardim América, CEP: 60.425-810, Fortaleza – CE, inscrito no
  CNPJ nº 10.483.444/0001-89 e com filial sediada na RUA CARLOS CAMARA, nº 1454, bairro: JARDIM
  AMÉRICA, CEP: 60.425-810, cidade: FORTALEZA, inscrito no CNPJ nº 10.483.444/0001-89, entrega neste ato, o equipamento:</div>
  <div style="border: 1px solid black; padding: 2px; text-align: center; width 80%; padding 4rem">
      ${itens()}
      ${condicoes()}
  </div>
  <p style="text-align: justify;"> A Pessoa de nome <b>${
    objeto.funcionario
  }</b> portador do CPF/CNPJ <b>${objeto.cpf}</b>,
  doravante denominado simplesmente "<b>Usuário</b>" sob as seguintes condições:</p>
  <ol style="text-align: justify; margin-right: 2rem;">
  <li>
    O equipamento deverá ser utilizado ÚNICA e EXCLUSIVAMENTE a serviço da
    empresa tendo em vista a atividade a ser exercida pelo <b>Usuário</b>.
  </li>
  <li>
    O <b>Usuário</b> tem ciência que o equipamento contém dispositivo rastreador
    que poderá ser utilizado pela empresa a fim de localizar o
    equipamento.
  </li>
  <li>
    Ficará o <b>Usuário</b> responsável pelo uso e conservação do equipamento;
  </li>
  <li>
    O <b>Usuário</b> tem somente a POSSE do equipamento, tendo em vista o uso
    exclusivo desse para prestação de serviços profissionais, não sendo
    transferida a PROPRIEDADE do equipamento, restando terminantemente
    proibidos o empréstimo, aluguel ou cessão deste equipamento à
    terceiros
  </li>
  <li>
    Se o equipamento for danificado ou inutilizado por emprego inadequado,
    mau uso, negligência ou extravio do <b>Usuário</b> a empresa fornecerá outro
    equipamento e descontará o valor de um equipamento da mesma
    marca/modelo ou equivalente ao do fornecedor, procedimento com o qual
    o <b>Usuário</b> concorda expressamente.
  </li>
  <li>
    Em caso de dano ou extravio do equipamento o <b>Usuário</b> deverá comunicar
    imediatamente ao setor lotado e a área de T.I. da empresa.
  </li>
  <li>
    Ao término da prestação de serviço ou do contrato individual de
    trabalho, o <b>Usuário</b> compromete-se a devolver o equipamento em perfeito
    estado no mesmo dia em que for comunicado ou comunique seu
    desligamento, considerando o desgaste natural pelo uso normal do
    equipamento.
  </li>
  </ol>
  </br>
  <div class="devolucao" style="margin-top: -1.2rem;
    text-align: justify;" >
    <p style="text-align: justify;"> Fortaleza-Ce, ${day} de ${
    monthYear[month]
  } de ${year} </p>
    <div class="signature" style="text-align: justify;
  text-align: center;
  text-decoration: overline;
  font-weight: 700;
  margin-top: 2.5em;
  margin-bottom: 1.5em;">
      <p>Nome do Responsável pelo equipamento </p>
    </div>
    <div id="devolucao" style="display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;">
      <span style="margin-left: 0px; margin-right: 0px;">Atestamos que o bem foi <b>devolvido</b> em___________ de ______ de _____, nas seguintes condições: </span>
      <p style="text-align: justify; text-align: center;">(  &nbsp;  ) Em perfeito estado	(  &nbsp;  ) Apresentando defeito	( &nbsp; ) Faltando peças/     acessórios. </p>
    </div>
    <div class="signature"style="text-align: justify;
  text-align: center;
  text-decoration: overline;
  font-weight: 500;
  margin-top: 2.5em;
  margin-bottom: 2.5em;">
      <p>Nome do Responsável pelo RECEBIMENTO do  equipamento </p>
    </div>
  </div>
</div>
</body>`;
  let novaAba = window.open("", "_blank");
  novaAba.document.write(novaPagina.documentElement.outerHTML);
}

function limparCampo() {
  let funcionario = document.getElementById("funcionario");
  let cpf_number = document.getElementById("cpf_number");
  let modeloin = document.getElementById("modelodis");
  let imeivalidado = document.getElementById("imei");

  funcionario.value = "";
  cpf_number.value = "";
  modeloin.value = "";
  imeivalidado.value = "";
}
