<template>
    <img :src="ImgSrc" />
</template>

<script>
export default{
    name : "Knight",

    props:{
        color: {
            required: true,
            type: String
        }
    },
    methods:{

    },
    computed:{
        ImgSrc(){
            if(this.color == "W") return "../assets/Wknight.png"
            else return "../assets/Bknight.png"
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