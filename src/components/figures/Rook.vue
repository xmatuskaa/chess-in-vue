<template>
    <img :src="ImgSrc" />
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
export default{
    name : "Rook",
    setup() {
            const PositionStore = usePositionStore();
            return { PositionStore};
            
        },
    props:{
        color: {
            required: true,
            type: String
        }
    },
    methods:{
        getMoveOptions(X,Y){
            let helperX = X
            let helperY = Y
            while(this.PositionStore.getFigureByPosition(helperX-1, Y)==""){
                this.PositionStore.addMoveOption([helperX-1,Y])
                helperX--
            }
            if((this.color=="B" && this.PositionStore.getFigureByPosition(helperX-1, Y).charAt(0)=="W") ||
            (this.color=="W" && this.PositionStore.getFigureByPosition(helperX-1, Y).charAt(0)=="B")){
                this.PositionStore.addMoveOption([helperX-1,Y])
            }
            helperX = X
            while(this.PositionStore.getFigureByPosition(helperX+1, Y)==""){
                this.PositionStore.addMoveOption([helperX+1,Y])
                helperX++
            }
            if((this.color=="B" && this.PositionStore.getFigureByPosition(helperX+1, Y).charAt(0)=="W") ||
            (this.color=="W" && this.PositionStore.getFigureByPosition(helperX+1, Y).charAt(0)=="B")){
                this.PositionStore.addMoveOption([helperX+1,Y])
            }

            while(this.PositionStore.getFigureByPosition(X, helperY-1)==""){
                this.PositionStore.addMoveOption([X,helperY-1])
                helperY--
            }
            if((this.color=="B" && this.PositionStore.getFigureByPosition(X, helperY-1).charAt(0)=="W") ||
            (this.color=="W" && this.PositionStore.getFigureByPosition(X, helperY).charAt(0)=="B")){
                this.PositionStore.addMoveOption([X,helperY-1])
            }
            helperY = Y
            while(this.PositionStore.getFigureByPosition(X, helperY+1)==""){
                this.PositionStore.addMoveOption([X,helperY+1])
                helperY++
            }
            if((this.color=="B" && this.PositionStore.getFigureByPosition(X, helperY+1).charAt(0)=="W") ||
            (this.color=="W" && this.PositionStore.getFigureByPosition(X, helperY+1).charAt(0)=="B")){
                this.PositionStore.addMoveOption([X,helperY+1])
            }
        }
    },
    computed:{
        ImgSrc(){
            if(this.color == "W") return "../assets/Wrook.png"
            else return "../assets/Brook.png"
        }

    }
}
</script>

<style>
img {
        object-fit:cover;
        max-width: 100%;
        max-height: auto;
        aspect-ratio: 1;
    }
</style>