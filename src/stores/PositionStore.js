import { defineStore } from "pinia";

export const usePositionStore = defineStore('position', {
    state: () => ({
        currentPosition: Array(7)
    }),




    actions: {
        async newGame() {
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[i] = Array(7)
            }
            this.currentPosition[0][0] = "Wrook"
            console.log(this.currentPosition[0][0])
            console.log(this.currentPosition[0][1])



        }
    }
})




