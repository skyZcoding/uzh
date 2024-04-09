<script setup lang="ts">
import { defineProps, toRefs, ref, reactive, onMounted } from "vue";

const props = defineProps({
  list: { type: Array, required: true },
});

const { list } = toRefs(props);

const container = ref<HTMLDivElement>();
const statePosition = reactive({
  dots: list.value.length - 2,
  position: 1,
});
const stateDrag = reactive({
  isDragging: false,
  dragStartPosition: 0,
});

onMounted(() => {
  window.addEventListener("resize", () => {
    if (container.value) {
      statePosition.dots =
        list.value.length -
        Math.round(
          container.value?.clientWidth /
            (container.value?.scrollWidth / list.value.length)
        ) +
        1;
    }
  });

  if (container.value) {
    statePosition.dots =
      list.value.length -
      Math.round(
        container.value?.clientWidth /
          (container.value?.scrollWidth / list.value.length)
      ) +
      1;

    container.value.addEventListener("scroll", () => {
      if (container.value) {
        statePosition.position =
          Math.round(
            (container.value?.scrollLeft / container.value?.scrollWidth) *
              list.value.length
          ) + 1;
      }
    });
  }
});

function scrollWithDots(index: any) {
  if (container.value) {
    container.value.scrollTo({
      left: (container.value.scrollWidth / list.value.length) * index,
      behavior: "smooth",
    });
  }
}

function onMouseDown(e: any) {
  e.preventDefault();
  stateDrag.dragStartPosition = e.clientX;
  stateDrag.isDragging = true;
}
function onMouseUp(e: any) {
  e.preventDefault();
  stateDrag.isDragging = false;
}
function onMouseMove(e: any) {
  if (stateDrag.isDragging) {
    if (e.clientX < stateDrag.dragStartPosition) {
      container.value?.scrollTo({
        left: container.value.scrollLeft + 500,
        behavior: "smooth",
      });
    }
    // if move right
    else {
      container.value?.scrollTo({
        left: container.value.scrollLeft - 500,
        behavior: "smooth",
      });
    }
  }
  e.preventDefault();
}
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row overflow-x-scroll w-full snap-x scroll-smooth snap-mandatory scrollbar-hide pb-5"
      :class="statePosition.dots == 1 ? 'justify-center' : ''"
      ref="container"
      v-on:mousedown="onMouseDown"
      v-on:mouseup="onMouseUp"
      v-on:mousemove="onMouseMove"
    >
      <slot></slot>
    </div>
    <div class="flex flex-row justify-center" v-if="!(statePosition.dots <= 1)">
      <div
        v-for="index in statePosition.dots"
        :key="index"
        class="cursor-pointer w-3 h-3 rounded-full mx-1 bg-primary flex justify-center items-center"
        @click="scrollWithDots(index - 1)"
      >
        <div
          class="w-2 h-2 rounded-full bg-white"
          v-if="index != statePosition.position"
        ></div>
      </div>
    </div>
  </div>
</template>
