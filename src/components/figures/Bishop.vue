<template>
    <img :src="ImgSrc" />
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
export default{
    name : "Bishop",
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
            helperX = X
            helperY = Y
            while(this.PositionStore.getFigureByPosition(helperX-1,helperY-1)==""){
                this.PositionStore.addMoveOption([helperX-1,helperY-1])
                helperX--
                helperY--
            }
            if((this.PositionStore.getFigureByPosition(helperX-1,helperY-1).charAt(0)=="W" && this.color =='B') ||
            (this.PositionStore.getFigureByPosition(helperX-1,helperY-1).charAt(0)=="B" && this.color =='W')){
                this.PositionStore.addMoveOption([helperX-1,helperY-1])
            }
            helperX = X
            helperY = Y
            while(this.PositionStore.getFigureByPosition(helperX+1,helperY+1)==""){
                this.PositionStore.addMoveOption([helperX+1,helperY+1])
                helperX++
                helperY++
            }
            if((this.PositionStore.getFigureByPosition(helperX+1,helperY+1).charAt(0)=="W" && this.color =='B') ||
            (this.PositionStore.getFigureByPosition(helperX+1,helperY+1).charAt(0)=="B" && this.color =='W')){
                this.PositionStore.addMoveOption([helperX+1,helperY+1])
            }
            helperX = X
            helperY = Y
            while(this.PositionStore.getFigureByPosition(helperX+1,helperY-1)==""){
                this.PositionStore.addMoveOption([helperX+1,helperY-1])
                helperX++
                helperY--
            }
            if((this.PositionStore.getFigureByPosition(helperX+1,helperY-1).charAt(0)=="W" && this.color =='B') ||
            (this.PositionStore.getFigureByPosition(helperX+1,helperY-1).charAt(0)=="B" && this.color =='W')){
                this.PositionStore.addMoveOption([helperX+1,helperY-1])
            }
            helperX = X
            helperY = Y
            while(this.PositionStore.getFigureByPosition(helperX-1,helperY+1)==""){
                this.PositionStore.addMoveOption([helperX-1,helperY+1])
                helperX--
                helperY++
            }
            if((this.PositionStore.getFigureByPosition(helperX-1,helperY+1).charAt(0)=="W" && this.color =='B') ||
            (this.PositionStore.getFigureByPosition(helperX-1,helperY+1).charAt(0)=="B" && this.color =='W')){
                this.PositionStore.addMoveOption([helperX-1,helperY+1])
            }

        }
    },
    computed:{
        ImgSrc(){
            if(this.color == "W") return "../assets/Wbishop.png"
            else return "../assets/Bbishop.png"
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