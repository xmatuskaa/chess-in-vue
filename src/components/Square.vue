props barva obrazek 
<template >
  <div :class="{ WSquare: this.color == 'W', BSquare: this.color == 'B' }" @click="onClick()">
    {{ coordinateX }}{{ coordinateY }}
    <component v-if="getComponent !=''" :is="getComponent" v-bind="{color: this.getColor}"/>
  </div>
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
import Pawn from './figures/Pawn.vue';
import Queen from './figures/Queen.vue';
import Rook from './figures/Rook.vue';
import King from './figures/King.vue';
import Bishop from './figures/Bishop.vue';
import Knight from './figures/Knight.vue';
import moveOptions, { setMoves } from "../utils/moveOptions"
export default {
    name: "Square",
    setup() {
            const PositionStore = usePositionStore();
            return { PositionStore};
            
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
        figure: {
            required: true,
            type: String
        }
    },
    computed:{
        getColor(){
            return this.figure.charAt(0)
        },
        getComponent(){
            const name= this.figure.substring(1)
            if(name === "queen") return Queen
            else if(name === "pawn") return Pawn
            else if(name === "rook") return Rook
            else if(name === "king") return King
            else if(name === "bishop") return Bishop
            else if(name === "knight") return Knight
            else return ""
        }

    },
    methods:{
        async onClick(){
            if( this.PositionStore.isMoveOption(this.coordinateX, this.coordinateY) &&
             this.PositionStore.getFigureByPosition(this.PositionStore.selectedPosition[0],this.PositionStore.selectedPosition[1]).charAt(0)==this.PositionStore.nextMove){
              this.PositionStore.moveFigureTo(this.coordinateX, this.coordinateY)
              if(this.PositionStore.nextMove == "W") this.PositionStore.nextMove = "B"
              else if(this.PositionStore.nextMove == "B") this. PositionStore.nextMove = "W"
          }
          else{
            this.PositionStore.setSelectedPosition(this.coordinateX,this.coordinateY)
            setMoves(this.coordinateX, this.coordinateY)}
        }


    }
}
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