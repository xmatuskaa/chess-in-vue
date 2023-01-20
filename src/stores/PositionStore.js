import { defineStore } from "pinia";

export const usePositionStore = defineStore('position', {
    state: () => ({
        currentPosition: Array(8)
    }),

    getters: {
        getFigureByPosition: state => (a, b) => "../assets/" + state.currentPosition[a][b] + ".png"


    },

    actions: {
        async newGame() {
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[i] = Array(8)
            }
            this.currentPosition[0][0] = "Wrook"
            this.currentPosition[0][1] = "Wknight"
            this.currentPosition[0][2] = "Wbishop"
            this.currentPosition[0][3] = "Wqueen"
            this.currentPosition[0][4] = "Wking"
            this.currentPosition[0][5] = "Wbishop"
            this.currentPosition[0][6] = "Wknight"
            this.currentPosition[0][7] = "Wrook"
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[1][i] = "Wpawn"
            }
            for (let x = 2; x < this.currentPosition.length - 2; x++) {
                for (let i = 0; i < this.currentPosition.length; i++) {
                    this.currentPosition[x][i] = ""
                }
            }
            this.currentPosition[7][0] = "Brook"
            this.currentPosition[7][1] = "Bknight"
            this.currentPosition[7][2] = "Bbishop"
            this.currentPosition[7][3] = "Bqueen"
            this.currentPosition[7][4] = "Bking"
            this.currentPosition[7][5] = "Bbishop"
            this.currentPosition[7][6] = "Bknight"
            this.currentPosition[7][7] = "Brook"
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[6][i] = "Bpawn"
            }
            // let counter = 0
            // for (let x = 0; x < this.currentPosition.length; x++) {
            //     for (let i = 0; i < this.currentPosition.length; i++) {
            //         console.log(this.currentPosition[x][i])
            //         counter++
            //     }
            // }
            console.log(this.getFigureByPosition(7, 7))

        }
    }
})




