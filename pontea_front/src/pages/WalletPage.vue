<template>
  <div class="center">
    <!-- Conteúdo "Minha carteira" -->
    <div
      id="titulo"
      :style="{
        styleName: 'H5',
        fontFamily: 'Lexend',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'center', // Adicione a propriedade textAlign com valor 'center'
        fontVariationSettings: '\'slnt\' 0',
        width: '116px',
        height: '24px',
      }"
    >
      Minha carteira
    </div>
    
    <!-- Conteúdo "Saldo disponível" -->
    <div
      id="saldo"
      :style="{
        fontFamily: 'Lexend',
        fontSize: '12.8px',
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: '16px',
        letterSpacing: '0em',
        textAlign: 'center', // Adicione a propriedade textAlign com valor 'center'
        color: 'var(--Azul, #144EC0)', // Adicione a propriedade color com a cor desejada
      }"
    >
      Saldo disponível
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



<!-- <style>
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
