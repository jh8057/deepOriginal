<template>
  <div class="orderComp">
    <div class="orderComp__center">
      <h2>[ 지시문 ]</h2>
      <p>
        본 연구는 사람들이 시각자극에서 느껴지는 유쾌도를 알아보기 위한
        것입니다. 제시된 시각자극을 보면서 얼마나 유쾌 또는 불쾌한지를 평가하여
        주십시오. 질문에 대한 정답은 정해져 있지 않으니 본인이 생각하기에 가장
        적합하다고 생각하는 선택지를 골라주십시오.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style>
.orderComp {
  margin: auto;
  width: 90vw;
  height: 70vh;
  text-align: center;
  align-content: center;
}
.orderComp__center {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
</style>
