/* eslint-disable no-unused-vars*/
<template>
    <div class="board">
        <div class="WSquare"><img src=""/></div>
        <div class="BSquare"><img src="../assets/Bbishop.png"/></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"><img :src='require(PositionStore.getFigureByPosition(7,7))'/></div>

        <div class="BSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="WSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="BSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="WSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="BSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="WSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="BSquare"><img src="../assets/Bpawn.png"/></div>
        <div class="WSquare"><img src="../assets/Bpawn.png"/></div>

        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>

        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>

        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>

        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        

        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>

        <div class="BSquare"></div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare">
            <img src="../assets/Wqueen.png"/>
        </div>
        <div class="BSquare">
            <img src="../assets/Wking.png"/>
        </div>
        <div class="WSquare"></div>
        <div class="BSquare"></div>
        <div class="WSquare"></div>
    </div>
</template>
<script>
import { usePositionStore } from '@/stores/PositionStore';
import { computed } from '@vue/runtime-core';
export default{
    name : "BoardView",
    setup(){
        const PositionStore = usePositionStore()
        PositionStore.newGame()
        return{PositionStore}
 let matice = PositionStore.currentPosition
    }


}
</script>
<style scoped>
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
    .board{
        width: min(0.85*100vh, 0.85*100vw);
        height: min(0.85*100vh, 0.85*100vw);
        margin-left:auto;
        margin-right: auto;
        border: 5px solid;
        display: grid;
        grid-template-columns: repeat(8,1fr);
    }
    .WSquare img {
        object-fit:cover;
        max-width: 100%;
        max-height: auto;
        aspect-ratio: 1;
    }
    .BSquare img {
        object-fit:cover;
        max-width: 100%;
        max-height: auto;
        aspect-ratio: 1;
        
    }
</style>