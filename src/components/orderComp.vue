<template>
  <div class="orderComp">
    <div class="orderComp__center">
      <h2>[ 지시문 ]</h2>
      <p>
        본 연구는 사람들이 색에서 느껴지는 무게감을 알아보기 위한 것입니다. 색을
        보면서 얼마나 무겁다고 느끼는지 또는 얼마나 가볍다고 느끼는 지를
        평가하여 주십시오. 질문에 대한 정답은 정해져 있지 않으니 본인이
        생각하기에 가장 적합하다고 생각하는 선택지를 골라주십시오.
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
