<template>
  <div class="termos-container">
    <h4>Termos de uso Pontea</h4>
    <q-scroll-area style="width: 90vw; height: 453px">
      <div class="texto" >
        CONTRATO DE DIREITOS DE PRESERVAÇÃO DE IMAGEM<br><br>

        Este Contrato de Direitos de Preservação de Imagem é um acordo entre a PONTEA, uma entidade jurídica devidamente registrada e atuante de acordo com a legislação vigente, e o usuário, doravante denominado {{this.user_name}}. O Usuário, ao concordar com os termos deste Contrato, manifesta seu entendimento e concordância com as disposições aqui estabelecidas.<br><br>

        1. OBJETO<br><br>

        1.1. O presente Contrato tem como objeto a definição dos direitos de preservação de imagem do Usuário no âmbito da Plataforma, bem como as responsabilidades e obrigações das partes relacionadas à utilização desses direitos.<br><br>

        2. DEFINIÇÕES<br><br>

        2.1. Para fins deste Contrato, as seguintes definições se aplicam:<br><br>

        (a) "Imagem" refere-se a qualquer representação visual do Usuário, incluindo, mas não se limitando a, fotografias, vídeos, ilustrações, e quaisquer outras representações gráficas;<br><br>

        (b) "Conteúdo" engloba as Imagens, bem como qualquer conteúdo associado, incluindo legendas, descrições e metadados;<br><br>

        (c) "Plataforma" refere-se à plataforma online operada pela Plataforma, onde os Usuários podem compartilhar e interagir com Conteúdo;<br><br>

        (d) "Direitos de Preservação de Imagem" são os direitos concedidos ao Usuário sobre suas próprias Imagens e Conteúdo, conforme estabelecido neste Contrato;<br><br>

        (e) "Terceiros" são quaisquer pessoas ou entidades que não sejam o Usuário ou a Plataforma;<br><br>

        (f) "Utilização da Imagem" refere-se a qualquer ato que envolva o uso, reprodução, exibição, distribuição ou modificação da Imagem ou Conteúdo do Usuário, seja pela Plataforma ou por Terceiros.<br><br>

        3. DIREITOS DE PRESERVAÇÃO DE IMAGEM<br><br>

        3.1. O Usuário detém todos os Direitos de Preservação de Imagem relacionados às suas Imagens e Conteúdo compartilhados na Plataforma.<br><br>

        3.2. A Plataforma respeitará integralmente os Direitos de Preservação de Imagem do Usuário e não utilizará suas Imagens ou Conteúdo para fins comerciais sem prévia autorização expressa do Usuário.<br><br>

        3.3. Ao compartilhar Imagens e Conteúdo na Plataforma, o Usuário concede à Plataforma uma licença não exclusiva, irrevogável, mundial, isenta de royalties e sublicenciável para utilizar, reproduzir, exibir, distribuir e modificar o Conteúdo, exclusivamente dentro dos limites necessários para operar e fornecer os serviços da Plataforma.<br><br>

        4. UTILIZAÇÃO DA IMAGEM POR TERCEIROS<br><br>

        4.1. A Plataforma não autoriza Terceiros a utilizar Imagens ou Conteúdo do Usuário sem sua prévia autorização expressa.<br><br>

        4.2. A Plataforma não é responsável por qualquer Utilização da Imagem realizada por Terceiros, a menos que tenha obtido autorização expressa do Usuário.<br><br>

        5. RESPONSABILIDADES DO USUÁRIO<br><br>

        5.1. O Usuário é exclusivamente responsável por garantir que possui os direitos necessários para compartilhar suas Imagens e Conteúdo na Plataforma, incluindo, mas não se limitando a, direitos autorais, direitos de imagem e consentimentos de terceiros retratados nas Imagens.<br><br>

        5.2. O Usuário concorda em indenizar e isentar a Plataforma de qualquer responsabilidade decorrente da violação de direitos de terceiros ou de qualquer uso não autorizado de suas Imagens ou Conteúdo.<br><br>

        6. DURAÇÃO E RESCISÃO<br><br>

        6.1. Este Contrato permanecerá em vigor enquanto o Usuário mantiver uma conta na Plataforma ou continuar a compartilhar Conteúdo nesta.<br><br>

        6.2. A Plataforma reserva-se o direito de rescindir este Contrato e encerrar a conta do Usuário, caso este viole as disposições deste Contrato.<br><br>

        7. DISPOSIÇÕES FINAIS<br><br>

        7.1. Qualquer modificação ou renúncia a este Contrato deve ser feita e assinada por ambas as partes.<br><br>

        7.2. Este Contrato será regido e interpretado de acordo com as leis do Brasil, sendo o Foro da Comarca de Recife o competente para dirimir quaisquer questões decorrentes deste Contrato.<br><br>

        8. ACEITAÇÃO<br><br>

        Ao utilizar a Plataforma e concordar com os termos deste Contrato, o Usuário reconhece ter lido, compreendido e aceito todos os seus termos e condições, comprometendo-se a cumpri-los integralmente.
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  name: "TermosAdesaoComponent",
  data() {
    return {
      user_name: "",
      termosAdesao: "",
    };
  },

  async created() {
    this.user_name = await this.getUserName();

  },
  methods: {
    async getUserName() {
      const url = "/api/profile";
      const token_front = localStorage.getItem("token_front");
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token_front}`,
      };

        let resposta = await fetch(url, {
          method: "GET",
          headers,
        })
        .then((response)=> {
          if (!response.ok) {
            console.log(response.json());
            throw new Error("Erro na resposta da API");
          } else {
          }
          return response.json();
        }).then((data) => {
          console.log(data);
          return data
        })
        .catch((error) => {
          console.error("Erro na solicitação à API:", error);
        });
        let userName = resposta.user.name
        return userName
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Lexend";
}

.termos-container {
  display: grid;
  justify-content: center;
  background-color: white;
  border: 1px solid;
}

h4 {
  text-align: center;
}

.texto {
  text-align: justify;
  font-size: 16px;
}
</style>
