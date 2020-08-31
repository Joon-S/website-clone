import React from "react";

import "./index.scss"
import {CellState, CellValue} from "../../types";

interface ButtonProps {
    row: number;
    col: number;
    state: CellState;
    value: CellValue;
    red?: boolean;
    onClick(rowParam: number, colParam: number): (...args: any[]) => void;
    onContext(rowParam: number, colParam: number): (...args: any[]) => void;
}

const Button = ({ row, col, onContext, onClick, state, value, red }: ButtonProps) => {
    const renderContent = (): React.ReactNode => {
        if (state === CellState.visible) {
            if (value === CellValue.bomb) {
                return (
                    <span role={"img"} aria-label={"bomb"}>
                        👾
                    </span>
                )
            } else if (value === CellValue.none) {
                return null;
            }

            return value;
        } else if (state === CellState.flagged) {
            return (
                <span role={"img"} aria-label={"flag "}>
                        📌
                </span>
            )
        }

        return null;
    }
    return (
        <div className={`Button ${state === CellState.visible ? "visible" : ""} value-${value} ${red ? "red" : ""}`}
             onClick={onClick(row, col)}
             onContextMenu={onContext(row, col)}
        >
            {renderContent()}
        </div>)
}

export default Button;
