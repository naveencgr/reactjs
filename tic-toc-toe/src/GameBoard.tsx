//import { useState } from "react";
import { Droppable } from "./Droppable";
import { styled } from "@stitches/react";
import * as _ from "radash";
import { IElement } from "./IElement";
import { DraggableElement } from "./DraggableElement";

interface Props {
  continueGame: () => void;
  data: IElement[];
}

function GameBoard({ continueGame, data }: Props) {
  return (
    <>
      <h1>Game Board</h1>
      <br />
      <button onClick={continueGame} className="btn btn-primary">
        Continue
      </button>
      <br />
      <table className="table table-bordered">
        <tbody>
          {["row1", "row2", "row3"].map((row, rowIndex) => (
            <tr>
              {["col1", "col2", "col3"].map((column, columnIndex) => (
                <td className="px-5 py-5 flex">
                  <Droppable id={`${row}-${column}`}>
                    {data.map((elm, elmIndex) => (
                      <DraggableElement
                        key={`draggable-element-${elm.id}`}
                        identifier={elm.id}
                        content={elm.symbol}
                      />
                    ))}
                    <DropPlaceholder />
                  </Droppable>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const DropPlaceholder = styled("div", {
  height: 35,
  backgroundColor: "transparent",
  marginTop: 15,
});

export default GameBoard;
