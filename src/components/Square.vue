props barva obrazek 
<template >
  <div :class="{ WSquare: this.color == 'W', BSquare: this.color == 'B' }">
    {{ coordinateX }}{{ coordinateY }}
    <!-- <component :is="icon" /> -->
    <img v-if="icon" :src=icon />
  </div>
</template>

<!-- <script>
import { usePositionStore } from '@/stores/PositionStore';
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
    name: "Square",
    setup() {
            const PositionStore = usePositionStore();
            const img = defineAsyncComponent(()=> import("../assets/"+ this.img + ".png"))
            return { PositionStore, img};
            
        },
    props:{
        color: {
            type: String,
            required: true
        },
        coordinateX: {
        type: Number,
        required: false 
        },
        coordinateY: {
        type: Number,
        required: false 
        },
        img: {
            required: true,
            type: String
        }

    }
}
</script> -->

<script setup>
import { computed, ref } from 'vue'
import { usePositionStore } from "@/stores/PositionStore";
const PositionStore = usePositionStore();
const icon = ref(`../assets/${props.img}.png`)

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  coordinateX: {
    type: Number,
    required: false,
  },
  coordinateY: {
    type: Number,
    required: false,
  },
  img: {
    required: true,
    type: String,
  },
});
</script>

<style>
.WSquare {
  background-color: beige;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.BSquare {
  background-color: rgb(86, 120, 86);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  object-fit: cover;
  max-width: 100%;
  max-height: auto;
  aspect-ratio: 1;
}
</style>