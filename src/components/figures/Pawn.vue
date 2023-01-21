<template>
    <img :src="ImgSrc" />
</template>

<script>
import { usePositionStore } from '@/stores/PositionStore';
export default{
    name : "Pawn",
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
            if(this.color = "W"){
                if(this.PositionStore.getFigureByPosition(X-1,Y)==""){
                    this.PositionStore.addMoveOption[X-1,Y]
                }
                if(X==6 && this.PositionStore.getFigureByPosition(X-1,Y)=="" && this.PositionStore.getFigureByPosition(X-2,Y)==""){
                    this.PositionStore.addMoveOption[X-2,Y]
                }
                if(this.PositionStore.getFigureByPosition(X-1,Y-1).chatAt(0)=="B"){
                    this.PositionStore.addMoveOption[X-1,Y-1]
                }
                if(this.PositionStore.getFigureByPosition(X-1,Y+1).chatAt(0)=="B"){
                    this.PositionStore.addMoveOption[X-1,Y+1]
                }
            }
            if(this.color = "B"){
                if(this.PositionStore.getFigureByPosition(X+1,Y)==""){
                    this.PositionStore.addMoveOption[X+1,Y]
                }
                if(X==1 && this.PositionStore.getFigureByPosition(X+1,Y)=="" && this.PositionStore.getFigureByPosition(X+2,Y)==""){
                    this.PositionStore.addMoveOption[X+2,Y]
                }
                if(this.PositionStore.getFigureByPosition(X+1,Y-1).charAt(0)=="B"){
                    this.PositionStore.addMoveOption[X+1,Y-1]
                }
                if(this.PositionStore.getFigureByPosition(X+1,Y+1).charAt(0)=="B"){
                    this.PositionStore.addMoveOption[X+1,Y+1]
                }

            }
        }
    },
    computed:{
        ImgSrc(){
            if(this.color == "W") return "../assets/Wpawn.png"
            else return "../assets/Bpawn.png"
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
