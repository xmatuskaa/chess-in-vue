import { defineStore } from "pinia";

export const usePositionStore = defineStore('position', {
    state: () => ({
        currentPosition: Array(8),
        selectedPosition: null,
        moveOptions: [],
        nextMove: "W"
    }),

    getters: {
        getFigureByPosition: state => (a, b) => {
            if (a > -1 && a < 8 && b > -1 && b < 8) {
                return state.currentPosition[a][b]
            }
            else return "void"
        },
    },

    actions: {
        async newGame() {
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[i] = Array(8)
            }
            this.currentPosition[0][0] = "Brook"
            this.currentPosition[0][1] = "Bknight"
            this.currentPosition[0][2] = "Bbishop"
            this.currentPosition[0][3] = "Bqueen"
            this.currentPosition[0][4] = "Bking"
            this.currentPosition[0][5] = "Bbishop"
            this.currentPosition[0][6] = "Bknight"
            this.currentPosition[0][7] = "Brook"
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[1][i] = "Bpawn"
            }
            for (let x = 2; x < this.currentPosition.length - 2; x++) {
                for (let i = 0; i < this.currentPosition.length; i++) {
                    this.currentPosition[x][i] = ""
                }
            }
            this.currentPosition[7][0] = "Wrook"
            this.currentPosition[7][1] = "Wknight"
            this.currentPosition[7][2] = "Wbishop"
            this.currentPosition[7][3] = "Wqueen"
            this.currentPosition[7][4] = "Wking"
            this.currentPosition[7][5] = "Wbishop"
            this.currentPosition[7][6] = "Wknight"
            this.currentPosition[7][7] = "Wrook"
            for (let i = 0; i < this.currentPosition.length; i++) {
                this.currentPosition[6][i] = "Wpawn"
            }
        },

        deleteFromCoords(X, Y) {
            this.currentPosition[X][Y] = ""

        },
        setSelectedPosition(X, Y) {
            this.selectedPosition = [X, Y]
        },
        deleteMoveOptions() {
            this.moveOptions = []
        },
        addMoveOption(X, Y) {
            this.moveOptions.push([X, Y])
        },
        isMoveOption(X, Y) {
            const array = [X, Y]
            if (this.moveOptions.some(a => array.every((v, i) => v === a[i]))) return true
            else return false
        },
        moveFigureTo(X, Y) {
            this.currentPosition[X][Y] = this.currentPosition[this.selectedPosition[0]][this.selectedPosition[1]]
            this.currentPosition[this.selectedPosition[0]][this.selectedPosition[1]] = ""
            this.selectedPosition = null
            this.moveOptions = []
        }
    }
})