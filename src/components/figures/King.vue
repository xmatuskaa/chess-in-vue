<template>
    <img :src="ImgSrc" />
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
export default{
    
    name : "King",
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
            if(this.PositionStore.getFigureByPosition(X-1,Y)==""||
            (this.PositionStore.getFigureByPosition(X-1,Y).charAt(0)=="B" && this.color == "W")||
            (this.PositionStore.getFigureByPosition(X-1,Y).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X-1,Y])
            }
            if(this.PositionStore.getFigureByPosition(X+1,Y)==""||
            (this.PositionStore.getFigureByPosition(X+1,Y).charAt(0)=="B" && this.color == "W")||
            (this.PositionStore.getFigureByPosition(X+1,Y).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X+1,Y])
            }
            if(this.PositionStore.getFigureByPosition(X+1,Y+1)==""||
            (this.PositionStore.getFigureByPosition(X+1,Y+1).charAt(0)=="B"&& this.color == "W")||
            (this.PositionStore.getFigureByPosition(X+1,Y+1).charAt(0)=="W"&& this.color == "B")){
                this.PositionStore.addMoveOption([X+1,Y+1])
            }
            if(this.PositionStore.getFigureByPosition(X+1,Y-1)==""||
            (this.PositionStore.getFigureByPosition(X+1,Y-1).charAt(0)=="B" && this.color == "W")||
            (this.PositionStore.getFigureByPosition(X+1,Y-1).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X+1,Y-1])
            }
            if(this.PositionStore.getFigureByPosition(X,Y+1)==""||
            (this.PositionStore.getFigureByPosition(X,Y+1).charAt(0)=="B" && this.color == "W") ||
            (this.PositionStore.getFigureByPosition(X,Y+1).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X,Y+1])
            }
            if(this.PositionStore.getFigureByPosition(X,Y-1)==""||
            (this.PositionStore.getFigureByPosition(X,Y-1).charAt(0)=="B" && this.color == "W") ||
            (this.PositionStore.getFigureByPosition(X,Y-1).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X,Y-1])
            }
            if(this.PositionStore.getFigureByPosition(X-1,Y)-1==""||
            (this.PositionStore.getFigureByPosition(X-1,Y-1).charAt(0)=="B" && this.color == "W")||
            (this.PositionStore.getFigureByPosition(X-1,Y-1).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X-1,Y-1])
            }
            if(this.PositionStore.getFigureByPosition(X-1,Y+1)==""||
            (this.PositionStore.getFigureByPosition(X-1,Y+1).charAt(0)=="B" && this.color == "W")||
            (this.PositionStore.getFigureByPosition(X-1,Y+1).charAt(0)=="W" && this.color == "B")){
                this.PositionStore.addMoveOption([X-1,Y+1])
            }
        }
    },
    computed:{
        ImgSrc(){
            if(this.color == "W") return "../assets/Wking.png"
            else return "../assets/Bking.png"
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