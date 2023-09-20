<template>
  <div class="content-container q-pa-lg">
    <div>
      <div class="topo">
        <h4>Seja um educador na Pontea</h4>
        <p>e adquira uma nova fonte de renda!</p>
      </div>

      <q-form>
        <div class="fields ">
          <div class="field">
            <label for="nome">Nome Completo</label>
            <q-input v-model="nome" outlined name="nome" dense/>
          </div>

          <div class="row">
            <div class="col-6 field">
              <label for="formacao">Formação acadêmica</label>
              <q-select :options="options_formacao" name="formacao" v-model="formacao" outlined dense/>
            </div>

            <div class="col-6 field">
              <label for="ano">Ano da última especialização completa <span class="small-txt">(caso esteja cursando, colocar atual)</span></label>

              <q-select :options="options_ano" name="ano" v-model="ano_ultima_especializacao" outlined dense/>
            </div>

          </div>
          <label>Certificado que comprove sua formação <span class="small-txt">(arquivos aceitos: declaração da instituição, diplomas de conclusão)</span></label>

          <input type="file" name="files" id="files">

          <div class="field">
            <q-checkbox v-model="termos_aceitos" name="termos_aceitos"/>
            <label for="termos_aceitos" style="padding-left: 0px;">Li, e aceito os Termos de adesão da Pontea.</label>
          </div>

        </div>

        <div class="buttons">
          <q-btn label="Cancelar" no-caps rounded unelevated outline text-color="primary"/>
          <q-btn label="Solicitar" no-caps color="primary" rounded unelevated />
        </div>
      </q-form>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'SerEducadorPage',

    data() {
      return {
        nome: '',
        formacao: '',
        ano_ultima_especializacao: '',
        certificados: [null, null, null, null],
        termos_aceitos: false,
        options_formacao: ['Pós Graduado(a)',' Graduado(a)', 'Mestrando(a)', 'Mestrado', 'Doutorado(a)', 'Doutorando(a)', 'Pós Doutorando(a)', 'Pós Doutorado', 'MBA'],
        options_ano: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 'Atual'],
      }
    },
  }
</script>

<style scoped>
  *{
    font-family: 'Lexend';
    padding: 0px;
    margin: 0px;
  }

  .content-container{
    padding-inline: 15vw;
  }
  .topo{
    display: grid;
    margin-top: 40px;
    margin-bottom: 16px;
    text-align: center;
    gap: 8px;
  }
  .topo h4{
    font-size: 24px;
    font-weight: 500;
    color: #144EC0;
  }

  .topo p{
    font-size: 16px;
    font-weight: 500;
  }
  .fields{
    display: grid;
    gap: 8px;
  }
  .small-txt{
    font-size: 13px;
    color: #616167;
  }
  .field{
    padding: 4px 0px
  }
  label{
    padding: 0px 16px;
    font-weight: 300;
  }

  .buttons{
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
  }

  .q-btn{
    padding: 0px 32px;
  }


</style>
