# ESTORIAS DE USUÁRIO

## US001: Visualizar lista de procedimentos
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo <br />
Quero visualizar uma lista de procedimentos de emergência contendo título e foto e descrição <br />
Para escolher o procedimento necessário<br />
E acessar as orientações <br />
**Critérios de Aceite**<br />
1- Os procedimentos devem ser listados em ordem alfabética <br />
2- Os procedimentos devem ser listados no formato “lista infinita” <br />

## US002: Visualizar procedimento selecionado
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo <br />
Quero acessar um procedimento da lista exibida<br />
Para aprender como realizar o atendimento<br />
E prestar atendimento de primeiros socorros <br />
**Critérios de Aceite**<br />
1- O procedimento deve conter os passos necessários para executá-lo.<br />
2-O procedimento deve  conter as palavras chaves que identificam o mesmo <br />

## US003: Entrar em contato com as autoridades de resgate
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo <br />
Quero ligar para o número de emergência  sem precisar sair do app <br />
Para entrar em contato com as autoridades de resgate o mais rápido possível <br />
**Critérios de Aceite**<br />
1 - Deve ser possível acessar o botão de emergência em qualquer tela do aplicativo e a qualquer momento da jornada do usuário <br />
2 - O número para o qual o aplicativo encaminhará a mensagem deve ser o ‘193’ (número do corpo de bombeiros) <br />

## US004: Filtrar procedimento por palavra chave
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero filtrar os procedimentos listados por palavra chave <br />
Para encontrar o procedimento que preciso mais rápido <br />
**Critérios de Aceite**<br />
1- Deve ser possível selecionar uma ou mais palavras chaves de acordo com as palavras cadastradas nos procedimentos presentes no aplicativo <br />
2- Após a seleção devem ser exibidos os procedimentos que contém uma ou mais das palavras chaves selecionadas ordenados alfabeticamente <br />
3- Deve ser possível limpar a seleção existente <br />

## US005: Reportar erro no procedimento
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero reportar erros ou problemas com o procedimento <br />
Para identificar e enviar aos responsáveis por manter o app erros ou problemas encontrados <br />
**Critérios de Aceite**<br />
1- O botão de reportar o erro deve estar presente em todos os procedimentos <br />
2- Ao acionar a função de reportar erro o sistema deve abrir um modal onde o usuário pode descrever o erro ou problema encontrado <br />
3-Ao clicar no botão “enviar” o aplicativo deve abrir uma caixa de email onde o remetente é o email “ 1socorros.app@gmail.com” o título é “Report de Erros” e o conteúdo da mensagem é o texto inserido pelo usuário no modal
 <br />
## US006: Sugerir procedimento
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero enviar sugestão de procedimentos para inclusão no app <br />
Para contribuir com o crescimento da plataforma  <br />
E disseminar o conhecimento sobre primeiros socorros <br />
**Critérios de Aceite**<br />
1- Ao acionar a função de enviar sugestão o sistema deve abrir um modal onde o usuário pode descrever a sugestão de procedimento e anexar imagens. <br />
2-Ao clicar no botão “enviar” o aplicativo deve abrir uma caixa de email onde o remetente é o email “ 1socorros.app@gmail.com” o título é "Sugestões de inclusão” e o conteúdo da mensagem é o texto inserido pelo usuário no modal
 <br />
## US007: Alterar o tamanho da fonte dos textos presentes no aplicativo
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero alterar o tamanho da fonte dos texto <br />
Para facilitar a leitura para usuários com visão reduzida  <br />
**Critérios de Aceite**<br />
1- Deve ser possível selecionar os seguintes tamanhos de fonte “pequena”, “média”, “grande” e “extra-grande” <br />
2- Quando selecionada uma fonte o aplicativo deve exibir os textos nos seguintes tamanhos: <br />
Pequena: XXpts  <br />
Média: XXpts  <br />
Grande: XXpts  <br />
Extra-Grande: XXpts  <br />

## US008: Criar perfil no aplicativo
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero criar meu perfil no aplicativo <br />
Para cadastrar e acompanhar informações pessoais  <br />
E calcular meu índice de massa corporal <br />
**Critérios de Aceite**<br />
1- Deve ser possível inserir nome, altura e peso. <br />
2- O aplicativo deve calcular o IMC e exibi-lo para o usuário. A regra usada para cálculo deve ser : IMC  = Peso (Kg)/ Altura(cm)² <br />
3- O imc deve ser classificado conforme a relação abaixo, e a classificação deve ser exibida ao usuário: <br />
IMC: menor que 18,5 		Classificação: Abaixo do peso <br />
IMC: 18,5 a 24,9          		Classificação: Normal <br />
IMC: 25,0 a 29,9          		Classificação: Excesso de peso <br />
IMC: 30,0 a 34,9          		Classificação: Obesidade classe I <br />
IMC: 35,0 a 39,9          		Classificação: Obesidade classe II <br />
IMC: maior ou igual a 40,0          Classificação: Obesidade classe III <br />

## US009: Cadastro de contato para emergência
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero cadastrar um contato de emergência  <br />
Para acessar de forma rápida os contatos importantes em caso de problemas <br />
**Critérios de Aceite**<br />
1- Deve ser possível cadastrar nome e telefone de um familiar <br />
2- A funcionalidade de cadastro de emergência deve estar na página de perfil do aplicativo <br />
## US010: Ligação para contato de emergência
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero ligar para meu contato de emergência  sem precisar sair do app <br />
Para entrar em contato com  meus contatos importantes o mais rápido possível <br />
**Critérios de Aceite**<br />
1- Deve ser possível ligar para o contato de emergência previamente cadastrados acionando apenas um botão <br />
2- Caso não haja um contato de emergência cadastrado será exibida a seguinte mensagem quando o botão “contato de emergência" for acionado : “Não há contato de emergência cadastrado, acesse o seu perfil para associar um contato”
 <br />
## US011: Compartilhar o conteúdo de um procedimento
**Narrativa de Negócio** <br />
Sendo um usuário do aplicativo  <br />
Quero fazer download de um procedimento contido no aplicativo <br />
Para compartilhar e disseminar o conhecimento sobre primeiros socorros <br />
E ajudar meus amigos e familiares a se informar melhor <br />
**Critérios de Aceite**<br />
1- Todos os procedimentos devem ter a opção “fazer download”  <br />
2- Ao clicar no botão “fazer download” deve ser possível extrair um arquivo pdf contendo o procedimento selecionado <br />
