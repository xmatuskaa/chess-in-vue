import { usePositionStore } from '@/stores/PositionStore';

export function setMoves(coordinateX, coordinateY) {
    const X = coordinateX
    const Y = coordinateY
    const PositionStore = usePositionStore();
    let color = PositionStore.getFigureByPosition(X, Y).charAt(0)
    let figure = PositionStore.getFigureByPosition(X, Y).substring(1)
    PositionStore.deleteMoveOptions()
    switch (figure) {
        case "queen":
            {
                let helperX = X
                let helperY = Y
                while (PositionStore.getFigureByPosition(helperX - 1, Y) == "") {
                    PositionStore.addMoveOption(helperX - 1, Y)
                    helperX--
                }
                if ((color == "B" && PositionStore.getFigureByPosition(helperX - 1, Y).charAt(0) == "W") ||
                    (color == "W" && PositionStore.getFigureByPosition(helperX - 1, Y).charAt(0) == "B")) {
                    PositionStore.addMoveOption(helperX - 1, Y)
                }
                helperX = X
                while (PositionStore.getFigureByPosition(helperX + 1, Y) == "") {
                    PositionStore.addMoveOption(helperX + 1, Y)
                    helperX++
                }
                if ((color == "B" && PositionStore.getFigureByPosition(helperX + 1, Y).charAt(0) == "W") ||
                    (color == "W" && PositionStore.getFigureByPosition(helperX + 1, Y).charAt(0) == "B")) {
                    PositionStore.addMoveOption(helperX + 1, Y)
                }

                while (PositionStore.getFigureByPosition(X, helperY - 1) == "") {
                    PositionStore.addMoveOption(X, helperY - 1)
                    helperY--
                }
                if ((color == "B" && PositionStore.getFigureByPosition(X, helperY - 1).charAt(0) == "W") ||
                    (color == "W" && PositionStore.getFigureByPosition(X, helperY).charAt(0) == "B")) {
                    PositionStore.addMoveOption(X, helperY - 1)
                }
                helperY = Y
                while (PositionStore.getFigureByPosition(X, helperY + 1) == "") {
                    PositionStore.addMoveOption(X, helperY + 1)
                    helperY++
                }
                if ((color == "B" && PositionStore.getFigureByPosition(X, helperY + 1).charAt(0) == "W") ||
                    (color == "W" && PositionStore.getFigureByPosition(X, helperY + 1).charAt(0) == "B")) {
                    PositionStore.addMoveOption(X, helperY + 1)

                }
                helperX = X
                helperY = Y
                while (PositionStore.getFigureByPosition(helperX - 1, helperY - 1) == "") {
                    PositionStore.addMoveOption(helperX - 1, helperY - 1)
                    helperX--
                    helperY--
                }
                if ((PositionStore.getFigureByPosition(helperX - 1, helperY - 1).charAt(0) == "W" && color == 'B') ||
                    (PositionStore.getFigureByPosition(helperX - 1, helperY - 1).charAt(0) == "B" && color == 'W')) {
                    PositionStore.addMoveOption(helperX - 1, helperY - 1)
                }
                helperX = X
                helperY = Y
                while (PositionStore.getFigureByPosition(helperX + 1, helperY + 1) == "") {
                    PositionStore.addMoveOption(helperX + 1, helperY + 1)
                    helperX++
                    helperY++
                }
                if ((PositionStore.getFigureByPosition(helperX + 1, helperY + 1).charAt(0) == "W" && color == 'B') ||
                    (PositionStore.getFigureByPosition(helperX + 1, helperY + 1).charAt(0) == "B" && color == 'W')) {
                    PositionStore.addMoveOption(helperX + 1, helperY + 1)
                }
                helperX = X
                helperY = Y
                while (PositionStore.getFigureByPosition(helperX + 1, helperY - 1) == "") {
                    PositionStore.addMoveOption(helperX + 1, helperY - 1)
                    helperX++
                    helperY--
                }
                if ((PositionStore.getFigureByPosition(helperX + 1, helperY - 1).charAt(0) == "W" && color == 'B') ||
                    (PositionStore.getFigureByPosition(helperX + 1, helperY - 1).charAt(0) == "B" && color == 'W')) {
                    PositionStore.addMoveOption(helperX + 1, helperY - 1)
                }
                helperX = X
                helperY = Y
                while (PositionStore.getFigureByPosition(helperX - 1, helperY + 1) == "") {
                    PositionStore.addMoveOption(helperX - 1, helperY + 1)
                    helperX--
                    helperY++
                }
                if ((PositionStore.getFigureByPosition(helperX - 1, helperY + 1).charAt(0) == "W" && color == 'B') ||
                    (PositionStore.getFigureByPosition(helperX - 1, helperY + 1).charAt(0) == "B" && color == 'W')) {
                    PositionStore.addMoveOption(helperX - 1, helperY + 1)
                }
            }

            break
        case "pawn": {
            if (color == "W") {
                if (PositionStore.getFigureByPosition(X - 1, Y) == "") {
                    PositionStore.addMoveOption(X - 1, Y)
                }
                if (X == 6 && PositionStore.getFigureByPosition(X - 1, Y) == "" && PositionStore.getFigureByPosition(X - 2, Y) == "") {
                    PositionStore.addMoveOption(X - 2, Y)
                }
                if (PositionStore.getFigureByPosition(X - 1, Y - 1).charAt(0) == "B") {
                    PositionStore.addMoveOption(X - 1, Y - 1)
                }
                if (PositionStore.getFigureByPosition(X - 1, Y + 1).charAt(0) == "B") {
                    PositionStore.addMoveOption(X - 1, Y + 1)
                }
            }
            if (color == "B") {
                if (PositionStore.getFigureByPosition(X + 1, Y) == "") {
                    PositionStore.addMoveOption(X + 1, Y)
                }
                if (X == 1 && PositionStore.getFigureByPosition(X + 1, Y) == "" && PositionStore.getFigureByPosition(X + 2, Y) == "") {
                    PositionStore.addMoveOption(X + 2, Y)
                }
                if (PositionStore.getFigureByPosition(X + 1, Y - 1).charAt(0) == "W") {
                    PositionStore.addMoveOption(X + 1, Y - 1)
                }
                if (PositionStore.getFigureByPosition(X + 1, Y + 1).charAt(0) == "W") {
                    PositionStore.addMoveOption(X + 1, Y + 1)
                }
            }
        }
            break
        case "rook": {
            let helperX = X
            let helperY = Y
            while (PositionStore.getFigureByPosition(helperX - 1, Y) == "") {
                PositionStore.addMoveOption(helperX - 1, Y)
                helperX--
            }
            if ((color == "B" && PositionStore.getFigureByPosition(helperX - 1, Y).charAt(0) == "W") ||
                (color == "W" && PositionStore.getFigureByPosition(helperX - 1, Y).charAt(0) == "B")) {
                PositionStore.addMoveOption(helperX - 1, Y)
            }
            helperX = X
            while (PositionStore.getFigureByPosition(helperX + 1, Y) == "") {
                PositionStore.addMoveOption(helperX + 1, Y)
                helperX++
            }
            if ((color == "B" && PositionStore.getFigureByPosition(helperX + 1, Y).charAt(0) == "W") ||
                (color == "W" && PositionStore.getFigureByPosition(helperX + 1, Y).charAt(0) == "B")) {
                PositionStore.addMoveOption(helperX + 1, Y)
            }

            while (PositionStore.getFigureByPosition(X, helperY - 1) == "") {
                PositionStore.addMoveOption(X, helperY - 1)
                helperY--
            }
            if ((color == "B" && PositionStore.getFigureByPosition(X, helperY - 1).charAt(0) == "W") ||
                (color == "W" && PositionStore.getFigureByPosition(X, helperY).charAt(0) == "B")) {
                PositionStore.addMoveOption(X, helperY - 1)
            }
            helperY = Y
            while (PositionStore.getFigureByPosition(X, helperY + 1) == "") {
                PositionStore.addMoveOption(X, helperY + 1)
                helperY++
            }
            if ((color == "B" && PositionStore.getFigureByPosition(X, helperY + 1).charAt(0) == "W") ||
                (color == "W" && PositionStore.getFigureByPosition(X, helperY + 1).charAt(0) == "B")) {
                PositionStore.addMoveOption(X, helperY + 1)

            }
        }
            break
        case "bishop": {
            let helperX = X
            let helperY = Y
            while (PositionStore.getFigureByPosition(helperX - 1, helperY - 1) == "") {
                PositionStore.addMoveOption(helperX - 1, helperY - 1)
                helperX--
                helperY--
            }
            if ((PositionStore.getFigureByPosition(helperX - 1, helperY - 1).charAt(0) == "W" && color == 'B') ||
                (PositionStore.getFigureByPosition(helperX - 1, helperY - 1).charAt(0) == "B" && color == 'W')) {
                PositionStore.addMoveOption(helperX - 1, helperY - 1)
            }
            helperX = X
            helperY = Y
            while (PositionStore.getFigureByPosition(helperX + 1, helperY + 1) == "") {
                PositionStore.addMoveOption(helperX + 1, helperY + 1)
                helperX++
                helperY++
            }
            if ((PositionStore.getFigureByPosition(helperX + 1, helperY + 1).charAt(0) == "W" && color == 'B') ||
                (PositionStore.getFigureByPosition(helperX + 1, helperY + 1).charAt(0) == "B" && color == 'W')) {
                PositionStore.addMoveOption(helperX + 1, helperY + 1)
            }
            helperX = X
            helperY = Y
            while (PositionStore.getFigureByPosition(helperX + 1, helperY - 1) == "") {
                PositionStore.addMoveOption(helperX + 1, helperY - 1)
                helperX++
                helperY--
            }
            if ((PositionStore.getFigureByPosition(helperX + 1, helperY - 1).charAt(0) == "W" && color == 'B') ||
                (PositionStore.getFigureByPosition(helperX + 1, helperY - 1).charAt(0) == "B" && color == 'W')) {
                PositionStore.addMoveOption(helperX + 1, helperY - 1)
            }
            helperX = X
            helperY = Y
            while (PositionStore.getFigureByPosition(helperX - 1, helperY + 1) == "") {
                PositionStore.addMoveOption(helperX - 1, helperY + 1)
                helperX--
                helperY++
            }
            if ((PositionStore.getFigureByPosition(helperX - 1, helperY + 1).charAt(0) == "W" && color == 'B') ||
                (PositionStore.getFigureByPosition(helperX - 1, helperY + 1).charAt(0) == "B" && color == 'W')) {
                PositionStore.addMoveOption(helperX - 1, helperY + 1)
            }
        }
            break
        case "king": {
            if (PositionStore.getFigureByPosition(X - 1, Y) == "" ||
                (PositionStore.getFigureByPosition(X - 1, Y).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 1, Y).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 1, Y)
            }
            if (PositionStore.getFigureByPosition(X + 1, Y) == "" ||
                (PositionStore.getFigureByPosition(X + 1, Y).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 1, Y).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 1, Y)
            }
            if (PositionStore.getFigureByPosition(X + 1, Y + 1) == "" ||
                (PositionStore.getFigureByPosition(X + 1, Y + 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 1, Y + 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 1, Y + 1)
            }
            if (PositionStore.getFigureByPosition(X + 1, Y - 1) == "" ||
                (PositionStore.getFigureByPosition(X + 1, Y - 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 1, Y - 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 1, Y - 1)
            }
            if (PositionStore.getFigureByPosition(X, Y + 1) == "" ||
                (PositionStore.getFigureByPosition(X, Y + 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X, Y + 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X, Y + 1)
            }
            if (PositionStore.getFigureByPosition(X, Y - 1) == "" ||
                (PositionStore.getFigureByPosition(X, Y - 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X, Y - 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X, Y - 1)
            }
            if (PositionStore.getFigureByPosition(X - 1, Y - 1) == "" ||
                (PositionStore.getFigureByPosition(X - 1, Y - 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 1, Y - 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 1, Y - 1)
            }
            if (PositionStore.getFigureByPosition(X - 1, Y + 1) == "" ||
                (PositionStore.getFigureByPosition(X - 1, Y + 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 1, Y + 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 1, Y + 1)
            }
        }
            break
        case "knight": {
            if (PositionStore.getFigureByPosition(X + 2, Y + 1) == "" ||
                (PositionStore.getFigureByPosition(X + 2, Y + 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 2, Y + 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 2, Y + 1)
            }
            if (PositionStore.getFigureByPosition(X + 2, Y - 1) == "" ||
                (PositionStore.getFigureByPosition(X + 2, Y - 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 2, Y - 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 2, Y - 1)
            }
            if (PositionStore.getFigureByPosition(X - 2, Y - 1) == "" ||
                (PositionStore.getFigureByPosition(X - 2, Y - 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 2, Y - 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 2, Y - 1)
            }
            if (PositionStore.getFigureByPosition(X - 2, Y + 1) == "" ||
                (PositionStore.getFigureByPosition(X - 2, Y + 1).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 2, Y + 1).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 2, Y + 1)
            }
            if (PositionStore.getFigureByPosition(X + 1, Y + 2) == "" ||
                (PositionStore.getFigureByPosition(X + 1, Y + 2).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 1, Y + 2).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 1, Y + 2)
            }
            if (PositionStore.getFigureByPosition(X + 1, Y - 2) == "" ||
                (PositionStore.getFigureByPosition(X + 1, Y - 2).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X + 1, Y - 2).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X + 1, Y - 2)
            }
            if (PositionStore.getFigureByPosition(X - 1, Y - 2) == "" ||
                (PositionStore.getFigureByPosition(X - 1, Y - 2).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 1, Y - 2).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 1, Y - 2)
            }
            if (PositionStore.getFigureByPosition(X - 1, Y + 2) == "" ||
                (PositionStore.getFigureByPosition(X - 1, Y + 2).charAt(0) == "B" && color == "W") ||
                (PositionStore.getFigureByPosition(X - 1, Y + 2).charAt(0) == "W" && color == "B")) {
                PositionStore.addMoveOption(X - 1, Y + 2)
            }
        }
            break
    }
}