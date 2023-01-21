props barva obrazek 
<template >
        <div :class="{'WSquare' : this.color=='W','BSquare': this.color=='B'}">{{ coordinateX }}{{ coordinateY }}
        <img :src="getImgSrc()">
        </div>
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
export default {
    name: "Square",
    setup() {
            const PositionStore = usePositionStore();
            return { PositionStore };
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
        }

    },
    methods:{
        getImgSrc(){
           
            return ("../assets/"+ this.PositionStore.getFigureByPosition(this.coordinateX, this.coordinateY) + ".png")
        }
    }

}
</script>

<style>
    .WSquare{
        background-color: beige;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .BSquare{
        background-color: rgb(86, 120, 86);
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        object-fit:cover;
        max-width: 100%;
        max-height: auto;
        aspect-ratio: 1;
    }

</style>