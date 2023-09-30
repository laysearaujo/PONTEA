<template>
  <div class="container">
    <StepCircle
      :step="1"
      label="Conta para transferência"
      :currentStep="currentStep"
      :completedStep="currentStep >= 2"
    />
    <div class="line" :class="{ 'line-color': currentStep >= 1 }"></div>
    <StepCircle
      :step="2"
      label="Transferência concluída"
      :currentStep="currentStep"
      :completedStep="currentStep >= 2"
    />
  </div>
</template>

<script>
import StepCircle from "src/components/StepCircle.vue";

export default {
  name: "StepComponent",
  props: {
    currentStep: Number,
  },
  components: {
    StepCircle,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.line {
  height: 2px;
  background-color: #b8b9bc;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.circle {
  width: 52px;
  height: 52px;
  border-radius: 100%;
  border: 2px solid #b8b9bc;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
}

.label-step {
  position: absolute;

  bottom: -28px;
  font-weight: 300;
  font-size: 14px;
  white-space: nowrap;
  color: #616167;
}

.circle:first-child .label-step {
  left: 0;
}
.circle:last-child .label-step {
  right: 0;
}

.circle span {
  font-family: Lexend;
  font-size: 25px;
  font-weight: 300;
  color: #b8b9bc;
}

.current-color {
  font-weight: 500;
  color: #144ec0;
  border-color: #144ec0;
}

.current-color span:first-child {
  color: #144ec0;
}
.line-color {
  background-color: #144ec0;
}
</style>
