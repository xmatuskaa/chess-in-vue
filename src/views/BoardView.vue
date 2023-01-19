<template>
    <div class="board">
        <div class="WSquare">
            <v-img src="../assets/Brook.png"></v-img>
        </div>
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
    </div>
</template>
<script>
export default{
    name : "BoardView"
}
</script>
<style scoped>
.WSquare{
background-color: beige;
}
.BSquare{
background-color: rgb(86, 120, 86);
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
    flex-shrink: 0;
    width: 100%;
}
.BSquare img {
    width: 100%;
    height: 100%;
}
</style>