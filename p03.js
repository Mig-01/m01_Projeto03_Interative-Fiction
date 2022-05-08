const prompt = require('prompt-sync')();


//___________________________INTRODUÇÃO________________________________-
let nome = prompt ('Digite o nome do seu/ sua personagem: ').toLowerCase();
// STATUS do personagem
// controle de alteração de status
let status= { nome: nome,
            saude : 100,
            dinheiro_R$: 1500.00,
            tempo_h: 8,          

 exibirHora: function(){console.log(`${this.tempo_h}:00 horas`)},

 exibirStatus: function () {
  console.log('========================')
  console.log('STATUS:\n ');
// this pra pegar a chave do próprio objeto:
 console.log(`Nome: ${this.nome}`);
 console.log(`Saude: ${this.saude}`);
 console.log(`Dinheiro: R$ ${this.dinheiro_R$},00`);
 console.log(`Hora Exata: ${this.tempo_h}:00 horas`) 
console.log('========================\n')

}, aumentarSaude(valor){ this.saude = this.saude + valor},

diminuirSaude(valor){this.saude = this.saude - valor},
//===========================================================
aumentarDinheiro(valor){this.dinheiro_R$ = this.dinheiro_R$ + valor},

diminuirDinheiro(valor){this.dinheiro_R$ = this.dinheiro_R$ - valor},
//==================================================================

perderTempo(valor){this.tempo_h = this.tempo_h + valor},

recuperarTempo(valor){this.tempo_h = valor }
        
}
// método é uma função dentro de um objeto 
// É uma função que serve para modificar um objeto 
 //EXEMPLO:
 //status.aumentarSaude(10)
 status.exibirStatus()
 prompt('\nAperte ENTER para continuar...')

 segFeira ()
  

//______________________________________________________________________________________
//====================================================================================================
// FUNÇÕES ALEATÓRIAS
//=============================================================================
//*** FUNÇÃO FREELANCE
 //freela de segunda
 function freela(){
    
  console.clear()
   
console.log(" Você encontrou um cliente, negociou o valores. Após 8 horas de trabalho intenso você foi pago: ")
 console.log()

  prompt('Aperte ENTER para continuar...')
   console.log()
  //-----------------------------------------------------------------
     const valores = [ 100, 150, 200, 250 , 300 ];

     let sortDePag = Math.floor(Math.random()*4)+1
     let servico = valores[sortDePag]

     console.log (`Você recebeu R$${servico},00 pelo seu trabalho.`)
    //--------------------------------------------------------
    
     
     status.aumentarDinheiro(servico)

     status.exibirStatus()
    
   

     prompt('Aperte ENTER para continuar...')
    
     console.clear() 
     
     segFeiraDesemp()
 }

//freela de terça
function freelaT(){
    
  console.clear()
   
console.log(" Você encontrou um cliente, negociou o valores. Após 8 horas de trabalho intenso você foi pago: ")
 console.log()

  prompt('Aperte ENTER para continuar...')
   console.log()
  //-----------------------------------------------------------------
     const valores = [ 100, 150, 200, 250 , 300 ];

     let sortDePag = Math.floor(Math.random()*4)+1
     let servico = valores[sortDePag]

     console.log (`Você recebeu R$${servico},00 pelo seu trabalho.`)
    //--------------------------------------------------------
    
     
     status.aumentarDinheiro(servico)

     status.exibirStatus()
    
   

     prompt('Aperte ENTER para continuar...')
    
     console.clear() 
     
     tercDesemp2()
    }
//freela de quarta   
function freelaQua(){
    
  console.clear()
   
console.log(" Você encontrou um cliente, negociou o valores. Após 8 horas de trabalho intenso você foi pago: ")
 console.log()

  prompt('Aperte ENTER para continuar...')
   console.log()
  //-----------------------------------------------------------------
     const valores = [ 100, 150, 200, 250 , 300 ];

     let sortDePag = Math.floor(Math.random()*4)+1
     let servico = valores[sortDePag]

     console.log (`Você recebeu R$${servico},00 pelo seu trabalho.`)
    //--------------------------------------------------------
    
     
     status.aumentarDinheiro(servico)

     status.exibirStatus()
    
   

     prompt('Aperte ENTER para continuar...')
    
     console.clear() 
     
     quaFeiraDesemp2()
   }
// freela de quinta
function freelaQui(){
    
  console.clear()
   
console.log(" Você encontrou um cliente, negociou o valores. Após 8 horas de trabalho intenso você foi pago: ")
 console.log()

  prompt('Aperte ENTER para continuar...')
   console.log()
  //-----------------------------------------------------------------
     const valores = [ 100, 150, 200, 250 , 300 ];

     let sortDePag = Math.floor(Math.random()*4)+1
     let servico = valores[sortDePag]

     console.log (`Você recebeu R$${servico},00 pelo seu trabalho.`)
    //--------------------------------------------------------
    
     
     status.aumentarDinheiro(servico)

     status.exibirStatus()
    
   

     prompt('Aperte ENTER para continuar...')
    
     console.clear() 
     
     quintaDesemp2()
   }
 //freela de sexta
    function freelaSexta(){
    
      console.clear()
       
    console.log(" Você encontrou um cliente, negociou o valores. Após 8 horas de trabalho intenso você foi pago: ")
     console.log()
    
      prompt('Aperte ENTER para continuar...')
       console.log()
      //-----------------------------------------------------------------
         const valores = [ 100, 150, 200, 250 , 300 ];
    
         let sortDePag = Math.floor(Math.random()*4)+1
         let servico = valores[sortDePag]
    
         console.log (`Você recebeu R$${servico},00 pelo seu trabalho.`)
        //--------------------------------------------------------
        
         
         status.aumentarDinheiro(servico)
    
         status.exibirStatus()
        
       
    
         prompt('Aperte ENTER para continuar...')
        
         console.clear() 
         
         sextaDesemp2()
      }
//===============================================================================
// ***FUNÇAO JOB/P - SEGUNDA FEIRA
function job (){
  console.log()
 console.log('Você chegou ao local do exame. As regras são simples: O exame de admissão é constiuído de 3 etapas, onde cada etapa vai gerar uma nota e em cima das notas será calculada sua média. Se a média for igual ou maior que 7, você será aprovado(a). Caso contrário, você será reprovado(a). Então boa sorte!')
 console.log()
 prompt('\nAperte ENTER para continuar...')
 console.log()
  for (let i=0 ;i<1; i++) {

  const notas = [0,1,2,3,4,5,6,7,8,9,10]

  let  desemp1 = Math.floor(Math.random()*10)+1
  let  desemp2 = Math.floor(Math.random()*10)+1
  let  desemp3 = Math.floor(Math.random()*10)+1
  
  console.log('Primeira Etapa:')
  let n1 = notas[desemp1]
  console.log(`Sua primmeira nota foi: ${n1}\n`)
  console.log()
  prompt('\nAperte ENTER para continuar...')

  console.log('Segunda Etapa:')   
  let n2 = notas[desemp2]
  console.log(`Sua segunda nota foi: ${n2}\n`)
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.log() 

  console.log('Terceira Etapa:')
  let n3 = notas[desemp3]
  console.log(`Sua terceira nota foi: ${n3}\n`)
  console.log() 

  prompt('\nAperte ENTER para continuar...')
  console.log() 
 console.log('=================================================') 
  media = (n1 + n2 + n3) / 3

  console.log(`Sua média foi: ${media.toFixed(1)}\n`)
  console.log('==================================================')
  if( media >= 7) {
 
    console.log('Parabéns! Você foi APROVADO! Seja bem-vindo ao seu novo emprego!')
          console.log()
          prompt('\nAperte ENTER para continuar...')
          segFeiraAprovado()
    

  } 
  else {
    console.log('Infelizmente você foi REPROVADO... Fica para uma próxima vez...');
    console.log()
    prompt('\nAperte ENTER para continuar...')
    segFeiraDesemp()
  }
  
}
  
}
// ***FUNÇAO JOB/P - QUARTA FEIRA
function job2 (){
  console.log()
 console.log('Você chegou ao local do exame. As regras são simples: O exame de admissão é constiuído de 3 etapas, onde cada etapa vai gerar uma nota e em cima das notas será calculada sua média. Se a média for igual ou maior que 7, você será aprovado(a). Caso contrário, você será reprovado(a). Então boa sorte!')
 console.log()
 prompt('\nAperte ENTER para continuar...')
 console.log()
  for (let i=0 ;i<1; i++) {

  const notas = [0,1,2,3,4,5,6,7,8,9,10]

  let  desemp1 = Math.floor(Math.random()*10)+1
  let  desemp2 = Math.floor(Math.random()*10)+1
  let  desemp3 = Math.floor(Math.random()*10)+1
  
  console.log('Primeira Etapa:')
  let n1 = notas[desemp1]
  console.log(`Sua primmeira nota foi: ${n1}\n`)
  console.log()
  prompt('\nAperte ENTER para continuar...')

  console.log('Segunda Etapa:')   
  let n2 = notas[desemp2]
  console.log(`Sua segunda nota foi: ${n2}\n`)
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.log() 

  console.log('Terceira Etapa:')
  let n3 = notas[desemp3]
  console.log(`Sua terceira nota foi: ${n3}\n`)
  console.log() 

  prompt('\nAperte ENTER para continuar...')
  console.log() 
 console.log('=================================================') 
  media = (n1 + n2 + n3) / 3

  console.log(`Sua média foi: ${media.toFixed(1)}\n`)
  console.log('==================================================')
  if( media >= 7) {
 
    console.log('Parabéns! Você foi APROVADO! Seja bem-vindo ao seu novo emprego!')
          console.log()
          prompt('\nAperte ENTER para continuar...')
          quaFeiraAprovado()
    

  } 
  else {
    console.log('Infelizmente você foi REPROVADO... Fica para uma próxima vez...');
    console.log()
    prompt('\nAperte ENTER para continuar...')
    quaFeiraDesemp2()
  }
  
}
  
}
//=============================================    
//***FUNÇÃO DE APOSTA
//aposta de terça
function apostaTer( ){

  let quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
  console.clear()

 while (quantidade > 3) {
 console.log('Você não pode apostar mais que 3 vezes.')
 console.clear()
 quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
}
               
for (let i=0; i< quantidade; i++){
  
    

    const lancamento = prompt('Aperte ENTER para lançar os dados:')

    status.perderTempo(2)
    
    let d6a = Math.floor(Math.random()*6)+1
    let d6b = Math.floor(Math.random()*6)+1
    console.log(d6a)
    console.log(d6b)
    
      
    let soma  = d6a + d6b
    console.log(`\nTotal = ${soma}`)
       
     
    
    
    if (soma <=6) {
       console.log(`Você ganhou R$ 50.00!\n`)
       status.aumentarDinheiro(50)
       
      
     } 
      if (soma > 6) {
    
        console.log('Você perdeu R$ perdeu 50.00!\n')
          status.diminuirDinheiro(50)
          status.diminuirSaude(2)   
      
      }

      
       status.exibirStatus()
       prompt('Aperte ENTER para continuar...')}
       
       tercDesemp2()
     
     
}


//aposta de quinta
function apostaQui( ){
  
  let quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
  console.clear()

 while (quantidade > 3) {
 console.log('Você não pode apostar mais que 3 vezes.')
 console.clear()
 quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
}
               
for (let i=0; i< quantidade; i++){  
    

    const lancamento = prompt('Aperte ENTER para lançar os dados:')

    status.perderTempo(2)
    
    let d6a = Math.floor(Math.random()*6)+1
    let d6b = Math.floor(Math.random()*6)+1
    console.log(d6a)
    console.log(d6b)
    
      
    let soma  = d6a + d6b
    console.log(`\nTotal = ${soma}`)
       
     
    
    
    if (soma <=6) {
       console.log(`Você ganhou R$ 50.00!\n`)
       status.aumentarDinheiro(50)
       
      
     } 
      if (soma > 6) {
    
        console.log('Você perdeu R$ perdeu 50.00!\n')
          status.diminuirDinheiro(50)
          status.diminuirSaude(2)   
      
      }

      
       status.exibirStatus()
       prompt('Aperte ENTER para continuar...')
       
     }



  quintaDesemp2() 
}
//aposta de sexta
function apostaSexta( ){
  
  let quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
  console.clear()

 while (quantidade > 3) {
 console.log('Você não pode apostar mais que 3 vezes.')
 console.clear()
 quantidade = +prompt('Digite quantas vezes você deseja apostar: ')
}
               
for (let i=0; i< quantidade; i++){ 
    

    const lancamento = prompt('Aperte ENTER para lançar os dados:')

    status.perderTempo(2)
    
    let d6a = Math.floor(Math.random()*6)+1
    let d6b = Math.floor(Math.random()*6)+1
    console.log(d6a)
    console.log(d6b)
    
      
    let soma  = d6a + d6b
    console.log(`\nTotal = ${soma}`)
       
     
    
    
    if (soma <=6) {
       console.log(`Você ganhou R$ 50.00!\n`)
       status.aumentarDinheiro(50)
       
      
     } 
      if (soma > 6) {
    
        console.log('Você perdeu R$ perdeu 50.00!\n')
          status.diminuirDinheiro(50)
          status.diminuirSaude(2)   
      
      }

      
       status.exibirStatus()
       prompt('Aperte ENTER para continuar...')
       
    
     }
     
    sextaDesemp2()
}

//=======================================

// Funções de dias da semana
//=============================================


// SEGUNDA-FEIRA INICIAL [ PONTO DE PARTIDA] - DA HISTÓRIA
 function segFeira () {
               
                       console.log()
              console.log('SEGUNDA-FEIRA')
            console.log('================')
                         status.exibirHora()
             console.log('==================')

     
    console.log('A semana acaba de começar e as contas não param de chegar... Você precisar arranjar um trampo pois os boletos não vão se pagar sozinhos. No momento, você tem pelo menos umas 2 formas de conseguir dinheiro.\n')
    console.log()
    prompt('Aperte ENTER para continuar...')
    console.clear()
    console.log('Para conseguir dinheiro você prefere:')
    console.log()
    
    console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Procurar um emprego formal\n')
    console.log()
    let esc1 = + prompt('Faça sua escolha: ')
 
    //___________________RESTRIÇÃO______________________________________________   
    while(esc1 < 1 || esc1 > 2){
       console.log ('Escolha apenas as opções 1 ou 2!')
       prompt('\nAperte ENTER para continuar...')
       console.clear()
       console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Procurar um emprego formal')
       console.log()
       esc1 = + prompt('Faça sua escolha:')

    }
//CONSEQUÊNCIA DAS ESCOLHAS_____________________________________________________

// PARA ESCOLHA - TRILHA  1 -- DESEMPREGO- freelance
if ( esc1 == 1) { 

//_________informação de custo - benefício de cada escolha p/ confirmação_____
  console.clear()
  
  console.log( 'Essa opçao terá o custo de: -3 h do seu tempo para achar um cliente, -6 h do seu tempo no trabalho, -7 pontos de saúde. O benefício de: pagamento que vai de R$ 100 a R$ 300,00 dependendo do cliente.\n Você confirma essa opção?\n')
  let confirm1 = prompt('Digite sim ou nao: ').toLowerCase()
 //_nova_restrição para sim ou não__________________________________________________ 
   
  while ( confirm1 !== "sim" && confirm1 !== "nao") {
    console.log('Resposta Inválida!')
    console.log()
    prompt('\nAperte ENTER para continuar...')
    console.clear()
    confirm1 = prompt('Digite sim ou nao: ').toLowerCase()}
  //_____________________________________________________________________________________
    
  // consequencias da confirmação_________________________________
  if (confirm1 == 'sim') { 
    status.diminuirSaude(7)
    status.diminuirDinheiro(10)
    status.perderTempo(9)
    
    status.exibirStatus()
   
    prompt('\nAperte ENTER para continuar...')
    
    freela()
  }
    else if (confirm1 == 'nao') { 
      console.clear()
      segFeira()
    }
   //__________________________________________________________________________ 
  // PARA ESCOLHA - TRILHA 2 - EMPREGO
  } else if (esc1 == 2){ 
//_________informação de custo - benefício de cada escolha p/ confirmação_____
 console.clear()
  console.log()
  console.log( 'Essa opção terá o custo de: 2 h do seu tempo durante o deslocamento + 6 h durante o exame de admissão , 5 pontos de saúde e R$ 10,00 de custo com o deslocamento até o local da prova. SE APROVADO você terá o benefício de: pagamento diário de R$ 50,00, uma jornada de trabalho de 8 horas diárias e o custo de 3 pontos diários de saúde.\n Você deseja confirma essa opção?\n')
  
  let confirm2 = prompt('Digite sim ou nao: ').toLowerCase()
   console.clear()
//_nova_restrição para sim ou não__________________________________________________ 
   
while ( confirm2 !== "sim" && confirm2 !== "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.clear()
  confirm2 = prompt('Digite sim ou nao: ').toLowerCase()}

  // consequencias da confirmação_________________________________
if (confirm2 == 'sim') { 
  status.diminuirSaude(5)
  
  status.perderTempo(8)
  
  status.diminuirDinheiro(10)
  
  status.exibirStatus()
 
  prompt('\nAperte ENTER para continuar...')
  
     job()   
  }
  else if (confirm2 == 'nao') 
  { 
    console.clear()
    segFeira()
  }
 //__________________________________________________________________________ 
  } 

}
  //==========================================================
//***********TRILHA DE DESEMPREGADO***********

// SEGUNDA FEIRA PT 2 - DESEMPREGADO=====================
 function segFeiraDesemp () { 
    console.clear()
  //     c--------------------------------despesa-------------------------------------------------------------------------------------
  console.log('Ao ativar o wi-fi do seu celular, o aparelho vibra e você recebe a notificação de que a fatura de água foi debitada na sua conta. Seu saldo teve - R$45,00 subtraídos por essa despesa. ')
   status.diminuirDinheiro(45)
   console.log()
   status.exibirStatus()
   prompt( 'Aperte Enter para continuar...')   
  

//-------------------Janta-------------------------
 console.clear()
 console.log()
 console.log('SEGUNDA-FEIRA')
 console.log('================')
 status.exibirHora()
 console.log('==================')
 console.log(`Nossa! O tempo voou, você ficou tão ocupado que até pulou a hora do almoço. Somente agora se deu conta que a fome não espera. Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)
    
  console.log()

let comer = prompt('Digite sim ou nao: ').toLowerCase()
 console.log()
//_______________ restrição _______________________________________________

while (comer != "sim" && comer != "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('Aperte ENTER para continuar...')
  console.clear()
  comer = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer == 'sim'){
  status.aumentarSaude(3)
  status.perderTempo(2)
 
  console.log('SEGUNDA-FEIRA')
   console.log('================')
              status.exibirHora()
   console.log('==================')
  
  console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
   console.log()
  status.exibirStatus()

} else if( comer == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
  console.log()
  status.exibirStatus()

}

 console.log()
 prompt('Aperte ENTER para continuar...')
 console.clear()

 console.log('Hora de dormir ...')
 status.aumentarSaude(5)
  prompt('Aperte ENTER para continuar...')
    
    tercDesemp()

}

//=TERÇA DESEMPREGADO= parte 1==========================
function tercDesemp () {
       
       status.recuperarTempo(8)
                          status.exibirStatus()
             console.log()
        console.log('TERÇA-FEIRA')
   console.log('================')
              status.exibirHora()
   console.log('==================')

      
    
  console.log( 'Você já tomou café e se arrumou. As contas não param de chegar. Agora é hora você de decidir como vai conseguir dinheiro:')
  
  console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Apostar dinheiro em lançamento de dados\n')
  console.log()
  
  let esc2 = +prompt('Faça sua escolha: ')

//  ___________________RESTRIÇÃO______________________________________________   
  while(esc2 < 1 || esc2 > 2){
     console.log ('Escolha apenas as opções 1 ou 2!')
     prompt('\nAperte ENTER para continuar...')
     console.clear()
     console.log('[1] - Procurar um trabalho como freelancer.\n[2] - Apostar a sorte num lançamento de dados.')
     console.log()
     esc2 = + prompt('Faça sua escolha:')}
//-----------------condicionais----------------------------
if ( esc2 == 1) {

  //_________informação de custo - benefício de cada escolha p/ confirmação_____
    console.clear()
    
 console.log( 'Essa opçao terá o custo de: -2 h do seu tempo para achar um cliente, -6 h do seu tempo no trabalho, -7 pontos de saúde. O benefício de: pagamento que vai de R$ 100 a R$ 300,00 dependendo do cliente.\n Você deseja confirma essa opção?\n')
    
   let confirm3 = prompt('Digite sim ou nao: ') 

//=============================================================
  while ( confirm3 !== "sim" && confirm3 !== "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.clear()
  confirm3 = prompt('Digite sim ou nao: ').toLowerCase()}
//--------------------------------------------------------------

 // consequencias da confirmação_________________________________
 if (confirm3 == 'sim') { 
  status.diminuirSaude(7)
  
  status.perderTempo(9)
  
  status.exibirStatus()
 
  prompt('\nAperte ENTER para continuar...')
  
  freelaT()
}
  else if (confirm3 == 'nao') { 
    console.clear()
    tercDesemp()
  }

  }

   // apostas------------------------------------------------

   else if ( esc2 == 2){ 
     console.clear()
    console.log('Você está prestes a entrar na casa de apostas e pode ganhar ou perder dinheiro num lançe de dados a depender da sua sorte.\nCusto: Você apostará R$ 50,00 por cada em cada rodada. Cada rodada custará 2 h de seu tempo. Você terá -2 pontos de saúde A CADA RODADA QUE VOCÊ perder.\nOBS:Você não pode jogar mais do que 3 rodadas\nBenefício: Se tiver sorte, pode ganhar até R$ 150,00! Você confirma essa opção?');
   console.log()
   
    let confirm4 = prompt('Digite sim ou nao: ') 
 //---------------restrição -------------------------------    
    while ( confirm4 !== "sim" && confirm4 !== "nao") {
      console.log('Resposta Inválida!')
      console.log()
      prompt('\nAperte ENTER para continuar...')
      console.clear()
      confirm4 = prompt('Digite sim ou nao: ').toLowerCase()}
       apostaTer()

     
                        


   }
 }
 
//TERÇA DESEMPREGADO PARTE 2====================================================
 function tercDesemp2 ()  {    
  console.clear()
  console.log('TERÇA-FEIRA')
  console.log('================')
  status.exibirHora()
   console.log('==================')

  
//-------------------------------------------despesa------------------------------------------------------------------------------
   console.clear()
  console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura da conta de luz acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 250, 00 descontado em sua conta.')
    status.diminuirDinheiro(250)
    console.log()
    status.exibirStatus()
    prompt('Aperte ENTER para continuar...')
    


//--------------------------------------------janta---------------------------------------------------------------------------
 console.clear()
 console.log(`Agora você tá sentindo seu estômago roncar... Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)
    
     console.log()

let comer2 = prompt('Digite sim ou nao: ').toLowerCase()
 console.log()

//_______________ restrição _______________________________________________

while (comer2 != "sim" && comer2 != "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('Aperte ENTER para continuar...')
  console.clear()
  comer2 = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer2 == 'sim'){
  status.aumentarSaude(3)
  status.perderTempo(2)
 
  console.log('TERÇA-FEIRA')
   console.log('================')
              status.exibirHora()
   console.log('==================')
  
  console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
   console.log()
  status.exibirStatus()

} else if( comer2 == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
  console.log()
  status.exibirStatus()

}

   console.log()
   prompt('Aperte ENTER para continuar...')
   console.clear()
   console.log
   
     console.log()
        console.log('TERÇA-FEIRA')
   console.log('================')
              status.exibirHora()
   console.log('==================')

   
   console.log('Hoje seu dia foi agitado. Hora de descansar...')
    status.aumentarSaude(5)
    prompt('Aperte ENTER para continuar...')
      status.recuperarTempo(8)
       quaFeiraDesmp1()


 }


//=============QUARTA FEIRA DESEMPREGADO PARTE 1===============================
function quaFeiraDesmp1 () {
      
  console.clear()
  console.log()
console.log('QUARTA-FEIRA')
console.log('================')
    status.exibirHora()
console.log('==================')


console.log('Ainda estamos no meio da semana as contas não param de chegar... Você precisar arranjar um trampo pois os boletos não vão se pagar sozinhos. No momento, você tem pelo menos umas 2 formas de conseguir dinheiro.\n')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
console.log('Para conseguir dinheiro você prefere:')
console.log()

console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Procurar um emprego formal\n')
console.log()
let esc1 = + prompt('Faça sua escolha: ')

//___________________RESTRIÇÃO______________________________________________   
while(esc1 < 1 || esc1 > 2){
console.log ('Escolha apenas as opções 1 ou 2!')
prompt('\nAperte ENTER para continuar...')
console.clear()
console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Procurar um emprego formal')
console.log()
esc1 = + prompt('Faça sua escolha:')

}
//CONSEQUÊNCIA DAS ESCOLHAS_____________________________________________________

// Freelance
if ( esc1 == 1) { 

//_________informação de custo - benefício de cada escolha p/ confirmação_____
console.clear()

console.log( 'Essa opçao terá o custo de: -3 h do seu tempo para achar um cliente, -6 h do seu tempo no trabalho, -7 pontos de saúde. O benefício de: pagamento que vai de R$ 100 a R$ 300,00 dependendo do cliente.\n Você confirma essa opção?\n')
let confirm1 = prompt('Digite sim ou nao: ').toLowerCase()
//_nova_restrição para sim ou não__________________________________________________ 

while ( confirm1 !== "sim" && confirm1 !== "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('\nAperte ENTER para continuar...')
console.clear()
confirm1 = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________________________________

// consequencias da confirmação_________________________________
if (confirm1 == 'sim') { 
status.diminuirSaude(7)

status.perderTempo(9)

status.exibirStatus()

prompt('\nAperte ENTER para continuar...')

freelaQua()
}
else if (confirm1 == 'nao') { 
console.clear()
quaFeiraDesmp1()
}
//__________________________________________________________________________ 
// PARA ESCOLHA - TRILHA 2 - EMPREGO
} else if (esc1 == 2){ 
//_________informação de custo - benefício de cada escolha p/ confirmação_____
console.clear()
console.log()
console.log( 'Essa opção terá o custo de: 2 h do seu tempo durante o deslocamento + 6 h durante o exame de admissão , 5 pontos de saúde e R$ 10,00 de custo com o deslocamento até o local da prova. SE APROVADO você terá o benefício de: pagamento diário de R$ 50,00, uma jornada de trabalho de 8 horas diárias e o custo de 3 pontos diários de saúde.\n Você deseja confirma essa opção?\n')

let confirm2 = prompt('Digite sim ou nao: ').toLowerCase()
console.clear()
//_nova_restrição para sim ou não__________________________________________________ 

while ( confirm2 !== "sim" && confirm2 !== "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('\nAperte ENTER para continuar...')
console.clear()
confirm2 = prompt('Digite sim ou nao: ').toLowerCase()}

// consequencias da confirmação_________________________________
if (confirm2 == 'sim') { 
status.diminuirSaude(5)

status.perderTempo(8)

status.diminuirDinheiro(10)

status.exibirStatus()

prompt('\nAperte ENTER para continuar...')

job2()   
}
else if (confirm2 == 'nao') 
{ 
console.clear()
quaFeiraDesmp1()
}
//__________________________________________________________________________ 
} 

}
//===================QUARTA FEIRA DESEMPREGADO - PARTE 2=======================
function quaFeiraDesemp2 () { 
               
  console.log()
console.log('QUARTA-FEIRA')
console.log('================')
   status.exibirHora()
console.log('==================')

console.log('Hoje é dia de pagar o aluguel! Seu saldo teve - R$500,00 subtraídos por essa despesa. ')
status.diminuirDinheiro(500)
console.log()
status.exibirStatus()

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()

console.log('Quarta é o dia oficial da faxina e a casa está uma bagunça.Você decide que se quer fazer uma faxina ou não. Caso se negue a fazê-la, sofrerá uma penalidade de -2 na saúde por se expor a sujeira. A faxina tomará 2 h de seu tempo. Você vai limpar a sua casa?')
console.log()

let faxina = prompt('Digite sim ou nao:').toLowerCase()
console.log()

console.log()
//_______________ restrição _______________________________________________

while (faxina != "sim" && faxina != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
faxina = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( faxina == 'sim'){
  
  status.perderTempo(2)
  
  console.log('QUARTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
  
  console.log('Você gastou 2 h na faxina!')
  console.log()
  status.exibirStatus()
  prompt('Aperte ENTER para continuar...')
  } 
  else if( faxina == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade na saúde por exposição a sujeira!');
  console.log()
  status.exibirStatus()
  
  }

console.clear()
console.log(`Nossa! O tempo voou, você ficou tão ocupado que até pulou a hora do almoço. Somente agora se deu conta que a fome não espera. Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)

console.log()

let comer = prompt('Digite sim ou nao:').toLowerCase()
console.log()
//_______________ restrição _______________________________________________

while (comer != "sim" && comer != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
comer = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer == 'sim'){
status.aumentarSaude(3)
status.perderTempo(2)

console.log('QUARTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
console.log()
status.exibirStatus()

} else if( comer == 'nao') { status.diminuirSaude(3)
console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
console.log()
status.exibirStatus()

}

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
console.log
// despesa
console.log()
console.log('QUARTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Hora de dormir ...')
status.aumentarSaude(5)
prompt('Aperte ENTER para continuar...')  
quintaDesemp1()

}

//====================QUINTA-FEIRA DESEMPREGADO-- PARTE 1=====================
 
function quintaDesemp1 () { 
  
   console.clear()
  status.recuperarTempo(8)
  status.exibirStatus()
console.log()
console.log('QUINTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')



console.log( 'Você já tomou café e se arrumou. As contas não param de chegar. Agora é hora você de decidir como vai conseguir dinheiro:')

console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Apostar dinheiro em lançamento de dados:\n')
console.log()

let esc2 = +prompt('Faça sua escolha: ')

//  ___________________RESTRIÇÃO______________________________________________   
while(esc2 < 1 || esc2 > 2){
console.log ('Escolha apenas as opções 1 ou 2!')
prompt('\nAperte ENTER para continuar...')
console.clear()
console.log('[1] - Procurar um trabalho como freelancer.\n[2] - Apostar a sorte num lançamento de dados.')
console.log()
esc2 = + prompt('Faça sua escolha:')}
//-----------------condicionais----------------------------
if ( esc2 == 1) {

//_________informação de custo - benefício de cada escolha p/ confirmação_____
console.clear()

console.log( 'Essa opçao terá o custo de: -2 h do seu tempo para achar um cliente, -6 h do seu tempo no trabalho, -7 pontos de saúde. O benefício de: pagamento que vai de R$ 100 a R$ 300,00 dependendo do cliente.\n Você deseja confirma essa opção?\n')

let confirm3 = prompt('Digite sim ou nao: ') 

//=============================================================
while ( confirm3 !== "sim" && confirm3 !== "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('\nAperte ENTER para continuar...')
console.clear()
confirm3 = prompt('Digite sim ou nao: ').toLowerCase()}
//--------------------------------------------------------------

// consequencias da confirmação_________________________________
if (confirm3 == 'sim') { 
status.diminuirSaude(7)

status.perderTempo(9)

status.exibirStatus()

prompt('\nAperte ENTER para continuar...')

freelaQui()
}
else if (confirm3 == 'nao') { 
console.clear()
quintaDesemp1()
}

}

// apostas------------------------------------------------

else if ( esc2 == 2){ 
console.clear()
console.log('Você está prestes a entrar na casa de apostas e pode ganhar ou perder dinheiro num lançe de dados a depender da sua sorte.\nCusto: Você apostará R$ 50,00 por cada em cada rodada. Cada rodada custará 2 h de seu tempo. Você terá -2 pontos de saúde A CADA RODADA QUE VOCÊ perder.\nOBS:Você não pode jogar mais do que 3 rodadas\nBenefício: Se tiver sorte, pode ganhar até R$ 150,00! Você confirma essa opção?');
console.log()

let confirm4 = prompt('Digite sim ou nao: ') 
//---------------restrição -------------------------------    
while ( confirm4 !== "sim" && confirm4 !== "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.clear()
  confirm4 = prompt('Digite sim ou nao: ').toLowerCase()}
  apostaQui()


}
}
//QUINTA-FEIRA PARTE=2==================================================
function quintaDesemp2 (){
  console.clear()
console.log('QUINTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')



console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura da conta de internet acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 80, 00 descontado em sua conta.')
status.diminuirDinheiro(80)
status.exibirStatus()
console.log()
prompt('\nAperte ENTER para continuar...')
console.clear()

console.log(`Agora você tá sentindo seu estômago roncar... Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)

console.log()

let comer2 = prompt('Digite sim ou nao: ').toLowerCase()
console.log()

//_______________ restrição _______________________________________________

while (comer2 != "sim" && comer2 != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
comer = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer2 == 'sim'){
status.aumentarSaude(3)
status.perderTempo(2)

console.log('QUINTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
console.log()
status.exibirStatus()

} else if( comer2 == 'nao') { status.diminuirSaude(3)
console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
console.log()
status.exibirStatus()

}

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
console.log
// despesa
console.log()
console.log('QUINTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')


console.log('Hoje seu dia foi agitado. Hora de descansar...')
status.aumentarSaude(5)
prompt('Aperte ENTER para continuar...')
status.recuperarTempo(8)
console.clear()
 sextaDesemp1()

}

//SEXTA FEIRA DESEMP =PARTE 1=====================================================================================================

function sextaDesemp1 () { 
  
  console.clear()
  status.recuperarTempo(8)
  status.exibirStatus()
console.log()
console.log('SEXTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')



console.log( 'Você já tomou café e se arrumou. As contas não param de chegar. Agora é hora você de decidir como vai conseguir dinheiro:')

console.log('[1] - Procurar um trabalho como freelancer:\n[2] - Apostar dinheiro em lançamento de dados\n')
console.log()

let esc2 = +prompt('Faça sua escolha: ')

//  ___________________RESTRIÇÃO______________________________________________   
while(esc2 < 1 || esc2 > 2){
console.log ('Escolha apenas as opções 1 ou 2!')
prompt('\nAperte ENTER para continuar...')
console.clear()
console.log('[1] - Procurar um trabalho como freelancer.\n[2] - Apostar a sorte num lançamento de dados.')
console.log()
esc2 = + prompt('Faça sua escolha:')}
//-----------------condicionais----------------------------
if ( esc2 == 1) {

//_________informação de custo - benefício de cada escolha p/ confirmação_____
console.clear()

console.log( 'Essa opçao terá o custo de: -2 h do seu tempo para achar um cliente, -6 h do seu tempo no trabalho, -7 pontos de saúde. O benefício de: pagamento que vai de R$ 100 a R$ 300,00 dependendo do cliente.\n Você deseja confirma essa opção?\n')

let confirm3 = prompt('Digite sim ou nao: ') 

//=============================================================
while ( confirm3 !== "sim" && confirm3 !== "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('\nAperte ENTER para continuar...')
console.clear()
confirm3 = prompt('Digite sim ou nao: ').toLowerCase()}
//--------------------------------------------------------------

// consequencias da confirmação_________________________________
if (confirm3 == 'sim') { 
status.diminuirSaude(7)

status.perderTempo(9)

status.exibirStatus()

prompt('\nAperte ENTER para continuar...')

freelaSexta()
}
else if (confirm3 == 'nao') { 
console.clear()
tercDesemp()
}

}

// apostas------------------------------------------------

else if ( esc2 == 2){ 
console.clear()
console.log('Você está prestes a entrar na casa de apostas e pode ganhar ou perder dinheiro num lançe de dados a depender da sua sorte.\nCusto: Você apostará R$ 50,00 por cada em cada rodada. Cada rodada custará 2 h de seu tempo. Você terá -2 pontos de saúde A CADA RODADA QUE VOCÊ perder.\nOBS:Você não pode jogar mais do que 3 rodadas\nBenefício: Se tiver sorte, pode ganhar até R$ 150,00! Você confirma essa opção?');
console.log()

let confirm4 = prompt('Digite sim ou nao: ') 
//---------------restrição -------------------------------    
while ( confirm4 !== "sim" && confirm4 !== "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('\nAperte ENTER para continuar...')
  console.clear()
  confirm4 = prompt('Digite sim ou nao: ').toLowerCase()}
apostaSexta()

}
}


//---------SEXTA DESEMP= PARTE 2----------------------------

function sextaDesemp2 (){
  console.clear()
console.log('SEXTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

//-----------------despesa-------------------------------------------
console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura do seu cartão de crédito acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 400, 00 descontado em sua conta.')
status.diminuirDinheiro(400)
console.log()

prompt('Aperte ENTER para continuar...')
console.clear()

console.log('SEXTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

//---------- atividade extra----------------
console.log('A dispensa está vazia e você precisar fazer compras. Caso não queira, sofrerá -3 de penalidade em sua saúde por fome. O custo das compras é R$ 200,00 e 3 h do seu tempo incluindo o preparo da janta. Você deseja fazer compras?')
console.log()
let compras = prompt('Digite sim ou nao: ').toLowerCase()

//_______________ restrição _______________________________________________

while (compras != "sim" && compras != "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('Aperte ENTER para continuar...')
  console.clear()
  compras = prompt('Digite sim ou nao: ').toLowerCase()}
  //_____________________________________________________________
  
  if ( compras == 'sim'){
  
  status.perderTempo(3)
  
  console.log('SEXTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
  
  console.log('Você gastou 3 h indo ao supermercado e R$ 200,00 .')
  console.log()
  status.exibirStatus()
  prompt('Aperte ENTER para encerrar...')
  console.clear()
  }

 else if( compras == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade de fome.');
  console.log()
  status.exibirStatus()
  
  }

  
  console.log('SEXTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')


//----------------------encerramento-----------------------------------
 
 console.log('Sua semana foi muito agitada. Hora de descansar... SEXTOU!')
 status.aumentarSaude(5)
 status.exibirStatus()
 prompt('Aperte ENTER para encerrar...')
 console.clear()

}
 //===================================================================================
//****************************************** APROVADO***********************
 
function segFeiraAprovado () { 
               
  console.log()
console.log('SEGUNDA-FEIRA')
console.log('================')
   status.exibirHora()
console.log('==================')

console.log(`Nossa! O tempo voou, você ficou tão ocupado e até pulou a hora do almoço. Somente agora se deu conta que a fome não espera. Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)

console.log()

let comer = prompt('Digite sim ou nao:').toLowerCase()
console.log()
//_______________ restrição _______________________________________________

while (comer != "sim" && comer != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
comer = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer == 'sim'){
status.aumentarSaude(3)
status.perderTempo(2)

console.log('SEGUNDA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
console.log()
status.exibirStatus()

} else if( comer == 'nao') { status.diminuirSaude(3)
console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
console.log()
status.exibirStatus()

}

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
console.log
// despesa
console.log()
console.log('SEGUNDA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

//----------------------------------------despesa-------------------------------------------------------------------------------
console.log('Ao ativar o wi-fi do seu celular, o aparelho vibra e você recebe a notificação de que a fatura de água foi debitada na sua conta. Seu saldo teve - R$45,00 subtraídos por essa despesa. ')
status.diminuirDinheiro(45)
console.log()
status.exibirStatus()

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()

console.log('Hora de dormir pois amanhã você precisa trabalhar e uma nova rotina te aguarda.')
status.aumentarSaude(5)
prompt('Aperte ENTER para continuar...')

tercaEmpregado()  


}
function quaFeiraAprovado () { 
               
  console.log()
console.log('QUARTA-FEIRA')
console.log('================')
   status.exibirHora()
console.log('==================')

console.log('Hoje é dia de pagar o aluguel! Seu saldo teve - R$500,00 subtraídos por essa despesa. ')
status.diminuirDinheiro(500)
console.log()
status.exibirStatus()

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()

console.log('Quarta é o dia oficial da faxina e a casa está uma bagunça.Você decide que se quer fazer uma faxina ou não. Caso se negue a fazê-la, sofrerá uma penalidade de -2 na saúde por se expor a sujeira. A faxina tomará 2 h de seu tempo. Você vai limpar a sua casa?')
console.log()

let faxina = prompt('Digite sim ou nao:').toLowerCase()
console.log()

console.log()
//_______________ restrição _______________________________________________

while (faxina != "sim" && faxina != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
faxina = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( faxina == 'sim'){
  
  status.perderTempo(2)
  
  console.log('QUARTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
  
  console.log('Você gastou 2 h na faxina!')
  console.log()
  status.exibirStatus()
  prompt('Aperte ENTER para continuar...')
  } 
  else if( faxina == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade na saúde por exposição a sujeira!');
  console.log()
  status.exibirStatus()
  
  }

console.clear()
console.log(`Nossa! O tempo voou, você  ficou tão ocupado que até pulou a hora do almoço. Somente agora se deu conta que a fome não espera. Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)

console.log()

let comer = prompt('Digite sim ou nao:').toLowerCase()
console.log()
//_______________ restrição _______________________________________________

while (comer != "sim" && comer != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
comer = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( comer == 'sim'){
status.aumentarSaude(3)
status.perderTempo(2)

console.log('QUARTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
console.log()
status.exibirStatus()

} else if( comer == 'nao') { status.diminuirSaude(3)
console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
console.log()
status.exibirStatus()

}

console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
console.log
// despesa
console.log()
console.log('QUARTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Hora de dormir pois amanhã você precisa trabalhar e uma nova rotina te aguarda.')
status.aumentarSaude(5)
prompt('Aperte ENTER para continuar...')  
 
quintaEmpregado()

}
//==============================================================*****EMPREGADO*****===================================


//TERÇA-EMPREGADO /testado
function tercaEmpregado() { 
  console.clear()
  status.recuperarTempo(8)
           
   console.log('TERÇA-FEIRA')
   console.log('================')
   status.exibirHora()
   console.log('==================')
         
   console.log('Você acordou e foi trabalhar...')
    
   console.log()
   prompt('Aperte Enter para continuar...')
   status.perderTempo(8)
   status.aumentarDinheiro(50)
   status.diminuirSaude(3)
   console.clear()
   
  // escolha HORA EXTRA------------------------------------------------------------------------------------------------------------  
  console.log('TERÇA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
   
  status.exibirStatus()
  console.log()
  console.log('Agora que acabou sua jornada de trabalho, você tem aopção de ficar um tempo a mais e fazer hora extra.\nCaso você aceite, isso lhe custará - 2 h de seu tempo e - 2 pontos de saúde. Em troca, você receberá R$ 20,00 a mais. Você deseja fazer hora extra?')
  console.log()
  let horaExtra = prompt('Digite sim ou nao: ').toLowerCase()
  //--------------restrição-------------------------------------------
  while ( horaExtra !== "sim" && horaExtra !== "nao") {
    console.log('Resposta Inválida!')
    console.log()
    prompt('\nAperte ENTER para continuar...')
    console.clear()
    horaExtra = prompt('Digite sim ou nao: ').toLowerCase()}
 
    //--------------------condições------------------------------------------------------
    
    if (horaExtra == 'sim') { 
      status.diminuirSaude(2)
      status.perderTempo(2)
      status.aumentarDinheiro(20)
      status.exibirStatus()
      console.log() 
      console.log('Você concluiu a hora extra e recebeu $20,00')
      console.log()
      prompt('\nAperte ENTER para continuar...')
      console.clear()
    }
      else if (horaExtra == 'nao') { 
        console.clear()
        }
//-------------------------despesa------------------------------------------------------------------------------------------------
             console.log('TERÇA-FEIRA')
             console.log('================')
             status.exibirHora()
            console.log('==================')

   console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura da conta de luz acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 250, 00 descontado em sua conta.')
  status.diminuirDinheiro(250)
  console.log()
  status.exibirStatus()
   prompt('Aperte ENTER para continuar...')
  console.clear()
//----------------------------------janta-------------------------------------------------------------------------------------------
            console.log('TERÇA-FEIRA')
            console.log('================')
            status.exibirHora()
            console.log('==================')
                
    console.log(`Agora você tá sentindo seu estômago roncar... Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)
    
    console.log()
       
    let comer2 = prompt('Digite sim ou nao: ').toLowerCase()
        console.log()
       
   //_______________ restrição _______________________________________________
       while (comer2 != "sim" && comer2 != "nao") {
       console.log('Resposta Inválida!')
       console.log()
      prompt('Aperte ENTER para continuar...')
      console.clear()
     comer2 = prompt('Digite sim ou nao: ').toLowerCase()}
       //_____________________________________________________________
       
     if ( comer2 == 'sim'){
        status.aumentarSaude(3)
        status.perderTempo(2)
        
       console.log('TERÇA-FEIRA')
       console.log('================')
                 status.exibirHora()
       console.log('==================')
         
         console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
          console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
          console.clear()

       } else if( comer2 == 'nao') { status.diminuirSaude(3)
         console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
         console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
         console.clear()
       }
       
//---------------------------------------dormir----------------------------------------------------------------------
      console.log('TERÇA-FEIRA')
      console.log('================')
                status.exibirHora()
    console.log('==================')

    console.log('Hoje seu dia foi agitado. Hora de descansar...')
    status.aumentarSaude(5)
    prompt('Aperte ENTER para continuar...')
    status.recuperarTempo(8)

    quartaEmpregado()

}
//QUARTA- EMPREGADO /testado
function quartaEmpregado() { 
  console.clear()
  status.recuperarTempo(8)
           
   console.log('QUARTA-FEIRA')
   console.log('================')
   status.exibirHora()
   console.log('==================')
         
   console.log('Você acordou e foi trabalhar...')
    
   console.log()
   prompt('Aperte Enter para continuar...')
   status.perderTempo(8)
   status.aumentarDinheiro(50)
   status.diminuirSaude(3)
   console.clear()
   
  // escolha HORA EXTRA------------------------------------------------------------------------------------------------------------  
  console.log('QUARTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
   
  status.exibirStatus()
  console.log()
  console.log('Agora que acabou sua jornada de trabalho, você tem aopção de ficar um tempo a mais e fazer hora extra.\nCaso você aceite, isso lhe custará - 2 h de seu tempo e - 2 pontos de saúde. Em troca, você receberá R$ 20,00 a mais. Você deseja fazer hora extra?')
  console.log()
  let horaExtra = prompt('Digite sim ou nao: ').toLowerCase()
  //--------------restrição-------------------------------------------
  while ( horaExtra !== "sim" && horaExtra !== "nao") {
    console.log('Resposta Inválida!')
    console.log()
    prompt('\nAperte ENTER para continuar...')
    console.clear()
    horaExtra = prompt('Digite sim ou nao: ').toLowerCase()}
 
    //--------------------condições------------------------------------------------------
    
    if (horaExtra == 'sim') { 
      status.diminuirSaude(2)
      status.perderTempo(2)
      status.aumentarDinheiro(20)
      status.exibirStatus()
      console.log() 
      console.log('Você concluiu a hora extra e recebeu $20,00')
      console.log()
      prompt('\nAperte ENTER para continuar...')
      console.clear()
    }
      else if (horaExtra == 'nao') { 
        console.clear()
        }
//-------------------------despesa------------------------------------------------------------------------------------------------
             console.log('QUARTA-FEIRA')
             console.log('================')
             status.exibirHora()
            console.log('==================')

   console.log('Hoje é dia de pagar o aluguel! Seu saldo teve - R$500,00 subtraídos por essa despesa.')
  status.diminuirDinheiro(500)
  console.log()
  status.exibirStatus()
   prompt('Aperte ENTER para continuar...')
  console.clear()
//--------------atividade(faxina)----------------------------------
console.log('QUARTA-FEIRA')
console.log('================')
status.exibirHora()
console.log('==================')

console.log('Quarta é o dia oficial da faxina e a casa está uma bagunça.Você decide que se quer fazer uma faxina ou não. Caso se negue a fazê-la, sofrerá uma penalidade de -2 na saúde por se expor a sujeira. A faxina tomará 2 h de seu tempo. Você vai limpar a sua casa?')
console.log()

let faxina = prompt('Digite sim ou nao: ').toLowerCase()
console.log()

console.log()
//_______________ restrição _______________________________________________

while (faxina != "sim" && faxina != "nao") {
console.log('Resposta Inválida!')
console.log()
prompt('Aperte ENTER para continuar...')
console.clear()
faxina = prompt('Digite sim ou nao: ').toLowerCase()}
//_____________________________________________________________

if ( faxina == 'sim'){
  
  status.perderTempo(2)
  
  console.log('Você gastou 2 h na faxina!')
  console.log()
  status.exibirStatus()
  prompt('Aperte ENTER para continuar...')
  } 
  else if( faxina == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade na saúde por exposição a sujeira!');
  console.log()
  status.exibirStatus()
  
  }
//----------------------------------janta-------------------------------------------------------------------------------------------
            console.clear()
            console.log('QUARTA-FEIRA')
            console.log('================')
            status.exibirHora()
            console.log('==================')
                
    console.log(`Agora você tá sentindo seu estômago roncar... Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)
    
    console.log()
       
    let comer2 = prompt('Digite sim ou nao: ').toLowerCase()
        console.log()
       
   //_______________ restrição _______________________________________________
       while (comer2 != "sim" && comer2 != "nao") {
       console.log('Resposta Inválida!')
       console.log()
      prompt('Aperte ENTER para continuar...')
      console.clear()
     comer2 = prompt('Digite sim ou nao: ').toLowerCase()}
       //_____________________________________________________________
       
     if ( comer2 == 'sim'){
        status.aumentarSaude(3)
        status.perderTempo(2)
        
       console.log('QUARTA-FEIRA')
       console.log('================')
                 status.exibirHora()
       console.log('==================')
         
         console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
          console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
          console.clear()

       } else if( comer2 == 'nao') { status.diminuirSaude(3)
         console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
         console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
         console.clear()
       }
       
//---------------------------------------dormir----------------------------------------------------------------------
      console.log('QUARTA-FEIRA')
      console.log('================')
                status.exibirHora()
    console.log('==================')

    console.log('Hora de descansar...')
    status.aumentarSaude(5)
    prompt('Aperte ENTER para continuar...')
    status.recuperarTempo(8)

}
//QUINTA- EMPREGADO /testado
function quintaEmpregado() { 
  console.clear()
  status.recuperarTempo(8)
           
   console.log('QUINTA-FEIRA')
   console.log('================')
   status.exibirHora()
   console.log('==================')
         
   console.log('Você acordou e foi trabalhar...')
    
   console.log()
   prompt('Aperte Enter para continuar...')
   status.perderTempo(8)
   status.aumentarDinheiro(50)
   status.diminuirSaude(3)
   console.clear()
   
  // escolha HORA EXTRA------------------------------------------------------------------------------------------------------------  
  console.log('QUINTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
   
  status.exibirStatus()
  console.log()
  console.log('Agora que acabou sua jornada de trabalho, você tem aopção de ficar um tempo a mais e fazer hora extra.\nCaso você aceite, isso lhe custará - 2 h de seu tempo e - 2 pontos de saúde. Em troca, você receberá R$ 20,00 a mais. Você deseja fazer hora extra?')
  console.log()
  let horaExtra = prompt('Digite sim ou nao: ').toLowerCase()
  //--------------restrição-------------------------------------------
  while ( horaExtra !== "sim" && horaExtra !== "nao") {
    console.log('Resposta Inválida!')
    console.log()
    prompt('\nAperte ENTER para continuar...')
    console.clear()
    horaExtra = prompt('Digite sim ou nao: ').toLowerCase()}
 
    //--------------------condições------------------------------------------------------
    
    if (horaExtra == 'sim') { 
      status.diminuirSaude(2)
      status.perderTempo(2)
      status.aumentarDinheiro(20)
      status.exibirStatus()
      console.log() 
      console.log('Você concluiu a hora extra e recebeu $20,00')
      console.log()
      prompt('\nAperte ENTER para continuar...')
      console.clear()
    }
      else if (horaExtra == 'nao') { 
        console.clear()
        }
//-------------------------despesa------------------------------------------------------------------------------------------------
             console.log('QUINTA-FEIRA')
             console.log('================')
             status.exibirHora()
            console.log('==================')

   console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura da conta de internet acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 80, 00 descontado em sua conta.')
  status.diminuirDinheiro(80)
  console.log()
  status.exibirStatus()
   prompt('Aperte ENTER para continuar...')
  console.clear()

//----------------------------------janta-------------------------------------------------------------------------------------------
            console.clear()
            console.log('QUINTA-FEIRA')
            console.log('================')
            status.exibirHora()
            console.log('==================')
                
    console.log(`Agora você tá sentindo seu estômago roncar... Você vai fazer algo pra comer? Caso deseje comer você recuperará +3 pontos de saúde, caso contrário, sofrerá uma penalidade de -3 pontos de saúde. Digite sim para fazer algo para comer e não caso ache que dá pra aguentar:`)
    
    console.log()
       
    let comer2 = prompt('Digite sim ou nao: ').toLowerCase()
        console.log()
       
   //_______________ restrição _______________________________________________
       while (comer2 != "sim" && comer2 != "nao") {
       console.log('Resposta Inválida!')
       console.log()
      prompt('Aperte ENTER para continuar...')
      console.clear()
     comer2 = prompt('Digite sim ou nao: ').toLowerCase()}
       //_____________________________________________________________
       
     if ( comer2 == 'sim'){
        status.aumentarSaude(3)
        status.perderTempo(2)
        
       console.log('QUINTA-FEIRA')
       console.log('================')
                 status.exibirHora()
       console.log('==================')
         
         console.log('Você gastou 2 h no preparo da refeição e acaba de recuperar 3 pontos de saúde!')
          console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
          console.clear()

       } else if( comer2 == 'nao') { status.diminuirSaude(3)
         console.log('Você recebeu -3 de penalidade de fome.  Seu estômago está roncando!');
         console.log()
         status.exibirStatus()
         prompt('Aperte ENTER para continuar...')
         console.clear()
       }
       
//---------------------------------------dormir----------------------------------------------------------------------
      console.log('QUINTA-FEIRA')
      console.log('================')
                status.exibirHora()
    console.log('==================')

    console.log('Hora de descansar...')
    status.aumentarSaude(5)
    prompt('Aperte ENTER para continuar...')
    status.recuperarTempo(8)
     sextaEmpregado()

}
//SEXTA/EMPREGADO/testado
function sextaEmpregado() { 
  console.clear()
  status.recuperarTempo(8)
           
   console.log('SEXTA-FEIRA')
   console.log('================')
   status.exibirHora()
   console.log('==================')
         
   console.log('Você acordou e foi trabalhar...')
    
   console.log()
   prompt('Aperte Enter para continuar...')
   status.perderTempo(8)
   status.aumentarDinheiro(50)
   status.diminuirSaude(3)
   console.clear()
   
  // escolha HORA EXTRA------------------------------------------------------------------------------------------------------------  
  console.log('SEXTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
   
  status.exibirStatus()
  console.log()
  console.log('Agora que acabou sua jornada de trabalho, você tem aopção de ficar um tempo a mais e fazer hora extra.\nCaso você aceite, isso lhe custará - 2 h de seu tempo e - 2 pontos de saúde. Em troca, você receberá R$ 20,00 a mais. Você deseja fazer hora extra?')
  console.log()
  let horaExtra = prompt('Digite sim ou nao: ').toLowerCase()
  //--------------restrição-------------------------------------------
  while ( horaExtra !== "sim" && horaExtra !== "nao") {
    console.log('Resposta Inválida!')
    console.log()
    prompt('\nAperte ENTER para continuar...')
    console.clear()
    horaExtra = prompt('Digite sim ou nao: ').toLowerCase()}
 
    //--------------------condições------------------------------------------------------
    
    if (horaExtra == 'sim') { 
      status.diminuirSaude(2)
      status.perderTempo(2)
      status.aumentarDinheiro(20)
      status.exibirStatus()
      console.log() 
      console.log('Você concluiu a hora extra e recebeu $20,00')
      console.log()
      prompt('\nAperte ENTER para continuar...')
      console.clear()
    }
      else if (horaExtra == 'nao') { 
        console.clear()
        }
//-------------------------despesa------------------------------------------------------------------------------------------------
             console.log('SEXTA-FEIRA')
             console.log('================')
             status.exibirHora()
            console.log('==================')

   console.log('Você acaba de receber mais outra notificação no seu smartphone:"A fatura do seu cartão de crédito acaba de ser debitada da sua conta no banco." Agora sua conta corrente possui - R$ 400, 00 descontado em sua conta.')
  status.diminuirDinheiro(400)
  console.log()
  status.exibirStatus()
   prompt('Aperte ENTER para continuar...')
  console.clear()
//--------------atividade(compras)----------------------------------
console.log('A dispensa está vazia e é preciso que vá fazer compras.Caso não queira, você sofrerá -3 de penalidade em sua saúde por fome. O custo das compras é R$ 200,00 e 3 h do seu tempo incluindo o preparo da janta. Você deseja fazer compras?')
console.log()
let compras = prompt('Digite sim ou nao: ').toLowerCase()

//_______________ restrição _______________________________________________

while (compras != "sim" && compras != "nao") {
  console.log('Resposta Inválida!')
  console.log()
  prompt('Aperte ENTER para continuar...')
  console.clear()
  compras = prompt('Digite sim ou nao: ').toLowerCase()}
  //_____________________________________________________________
  
  if ( compras == 'sim'){
  
  status.perderTempo(3)
  
  console.log('SEXTA-FEIRA')
  console.log('================')
  status.exibirHora()
  console.log('==================')
  
  console.log('Você gastou 3 h indo ao supermercado e R$ 200,00 .')
  console.log()
  status.exibirStatus()
  prompt('Aperte ENTER para encerrar...')
  console.clear()
  

  
  } else if( compras == 'nao') { status.diminuirSaude(3)
  console.log('Você recebeu -3 de penalidade de fome.');
  console.log()
  status.exibirStatus()
  
  }
//---------------------------------------dormir----------------------------------------------------------------------
      console.log('SEXTA-FEIRA')
      console.log('================')
                status.exibirHora()
    console.log('==================')

    console.log('Sua semana foi muito agitada. Hora de descansar... SEXTOU!')
    status.aumentarSaude(5)
    prompt('Aperte ENTER para encerrar...')
    status.recuperarTempo(8)
    console.clear()}

//======================================================================
  // EXECUÇÃO DAS FUNÇÕES___________________________________________________
  //*****PONTO DE PARTIDA****************************************************
  /*segFeira ();//testado
  //CHAMADAS DE FUNÇÕES DIÁRIAS EM ORDEM_PARA DESEMPREGADO_______________________________
  tercDesemp();//testado
  tercDesemp2();//testado
  quaFeiraDesmp1(); //testado 
  quaFeiraDesemp2();//testado
  quintaDesemp1();// testado
  quintaDesemp2();// testado
  sextaDesemp1();//testado
  sextaDesemp2();//testado*/
  
  




