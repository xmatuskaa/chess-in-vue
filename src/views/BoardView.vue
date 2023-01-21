<template>
    <button @click="PositionStore.deleteFromCoords(1,1)">delete</button>
    {{ PositionStore.selectedPosition }}
    <div class="board">
        <Square v-for="n in 64" :key="n" :color="getColor(n)" :coordinateX="getCoordinateX(n)" :coordinateY="getCoordinateY(n)" :figure="PositionStore.getFigureByPosition(getCoordinateX(n),getCoordinateY(n))"/>
    </div>
</template>

<script>
    import Square from '@/components/Square.vue';
    import { usePositionStore } from '@/stores/PositionStore';
    export default{
        name: "BoardView",
        setup() {
            const PositionStore = usePositionStore();
            PositionStore.newGame();
            return { PositionStore };
        },
        components: { Square },
        methods: {
            getColor(sequenceNumber){
                if((sequenceNumber%2==1 && (sequenceNumber<8 ||
                 (sequenceNumber>16 && sequenceNumber<24) ||
                 (sequenceNumber>32 && sequenceNumber<40) ||
                 (sequenceNumber>48 && sequenceNumber<56)))||
                 (sequenceNumber%2==0 && 
                 ((sequenceNumber>8 && sequenceNumber<=16) ||
                 (sequenceNumber>24 && sequenceNumber<=32) ||
                 (sequenceNumber>40 && sequenceNumber<=48) ||
                 (sequenceNumber>56 && sequenceNumber<=64)))){
                    return 'W'
                }
                else return 'B'
            },
            getCoordinateY(sequenceNumber){
                if(sequenceNumber%8 == 0 && sequenceNumber!=0){
                    return 7
                }
                return sequenceNumber%8-1
            },
            getCoordinateX(sequenceNumber){
                return Math.floor((sequenceNumber-1)/8)
            }
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