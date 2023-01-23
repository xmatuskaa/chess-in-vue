import { usePositionStore } from '@/stores/PositionStore';
import { toRaw } from 'vue';

export function inCheck() {
    const PositionStore = usePositionStore();
    let positionMatrix = toRaw(PositionStore.currentPosition)
    console.log(positionMatrix)
    let Wking = null
    let Bking = null
    let isInCheck = false

    positionMatrix.every((row, i) =>
        row.every((item, j) => {
            if (item === "Bking") Bking = [i, j];
            if (item === "Wking") Wking = [i, j];
            if (Wking != null && Bking != null) return false
            return true;
        })
    )






}