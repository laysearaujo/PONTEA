<template>
  <div>
    <div class="container">
      <div class="box box1">
        <div class="sub-box">
          <img src="https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg" alt="Imagem" class="rounded-image">
        </div>
        <div class="sub-box" id="nome"><p>Nome do perfil</p></div>
        <div class="sub-box">estrela e avaliação</div>
        <div class="sub-box" id="descricao"><p>Professora na Universidade Federal de Pernambuco,
           pós-graduada em educação inclusiva para crianças neuroatípicas pela UNINASSAU e licenciada
            em Pedagogia pela Universidade do Minho.</p></div>
        <div class="sub-box"><q-btn label="Ser educador" color="primary" no-caps rounded /></div>
      </div>
      <div class="box box2">
        <div><h5 class="titulo">Minha carteira</h5></div>
        <div class="paragraphs">
          <h5 class="paragraph" id="saldoD">Saldo disponível:</h5>
          <p class="paragraph" id="valorD">R$ 62,35</p>
          <h5 class="paragraph" id="saldoD">Valor pago a PONTEA:</h5>
          <p class="paragraph" id="valorP">R$ 43,45</p>
          <h5 class="paragraph" id="saldoD">Conta do educador:</h5>
          <p class="paragraph" id="status">Verificado</p>
        </div>
      <div></div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.paragraphs {
  white-space: nowrap; /* Impede que os parágrafos quebrem para a próxima linha */
}

#valorP{
  color: var(--textos-cinza, #616167);
  text-align: center;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-left: -0.75%;
  margin-right: 15%;
}

#valorD{
  color: var(--verde, #65A115);
  text-align: center;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  margin-left: -0.75%;
  margin-right: 15%;
}

#saldoD{
  color: var(--Azul, #144EC0);
  text-align: center;
  font-family: Lexend;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 125% */
}

#status{
  color: var(--Azul, #144EC0);
  text-align: center;
  font-family: Lexend;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 500;
  margin-left: -0.75%;
  line-height: 16px; /* 125% */
}

.paragraph {
  display: inline-block;
  margin: 0 10px; /* Adicione margem horizontal entre os parágrafos para espaçamento */
}

.box {
  gap: 40px;
}

.box1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
}

.box2 {
  flex: 3;
  display: flex;
  flex-direction: column;
}

.sub-box {
  margin: 5px 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
}


.rounded-image {
  margin-top: 10%;
  border-radius: 50%; 
  width: 100px; 
  height: 100px; 
  width: 180px; 
  height: 180px; 
}

.titulo{
  color: var(--textos-cinza, #616167);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

#nome {
  color: var(--textos-preto, #3C3C3F);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

#descricao{
  align-self: stretch;
  color: var(--textos-preto, #3C3C3F);
  /* PARAGRAPH 2 */
  font-family: Lexend;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 125% */
}



</style>

<!-- 







<template>
  <div class="center">
    <div
      id="titulo"
      :style="{
        styleName: 'H5',
        fontFamily: 'Lexend',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center',
        fontVariationSettings: '\'slnt\' 0',
        width: '116px',
        height: '24px',
        color: 'var(--textos-preto, #3C3C3F)', 
      }"
    >
      Minha carteira
    </div>

 Conteúdo "Saldo" 
    <div
      id="saldo"
      :style="{
        fontFamily: 'Lexend',
        fontSize: '12.8px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '16px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'var(--Azul, #144EC0)',
        marginTop: '16px' 
      }"
    >
      Saldo
    </div>

    Conteúdo "R$ 62,16" 
    <div
      id="valor"
      :style="{
        fontFamily: 'Lexend',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: 'var(--verde, #65A115)',
      }"
    >
      R$ 62,16
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Minha carteira',
    };
  },
};
</script>



<style>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.center{
  display: flex;
}
.font-size {
  /* Estilos para o elemento centralizado, como font-size, font-family, etc. */
}
</style> -->
