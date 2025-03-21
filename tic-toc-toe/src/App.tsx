import "./App.css";
import "./Player";
import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState, useCallback } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { IElement } from "./IElement";

//let isPrimary = true;
function App() {
  let [player1Primary, setPlayer1Primary] = useState("text-success");
  let [player2Primary, setPlayer2Primary] = useState("");

  let DEFAULT_DATA_STATE: IElement[] = [
    {
      id: "Player1-1",
      symbol: "",
      position: "",
    },
    {
      id: "Player1-2",
      symbol: "",
      position: "",
    },
    {
      id: "Player1-3",
      symbol: "",
      position: "",
    },
    {
      id: "Player1-4",
      symbol: "",
      position: "",
    },
    {
      id: "Player2-1",
      symbol: "",
      position: "",
    },
    {
      id: "Player2-2",
      symbol: "",
      position: "",
    },
    {
      id: "Player2-3",
      symbol: "",
      position: "",
    },
    {
      id: "Player2-4",
      symbol: "",
      position: "",
    },
  ];

  const [data, setData] = useState<IElement[]>(DEFAULT_DATA_STATE);

  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          console.log("over" + over);
          const position = over?.id ? String(over.id) : elm.position;
          console.log("position" + position);
          return { ...elm, position };
        }
        return elm;
      });
      console.log("update state-->" + JSON.stringify(updatedState));
      setData(updatedState);
    },
    [data, setData]
  );

  let continueGame = () => {
    if (player1Primary == "text-success") {
      setPlayer2Primary("text-success");
      setPlayer1Primary("");
    } else if (player2Primary == "text-success") {
      setPlayer2Primary("");
      setPlayer1Primary("text-success");
    }
  };
  return (
    <>
      <h1>Tic Toc Toe</h1>
      <DndContext onDragEnd={handleOnDragEnd}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Player
                isPrimaryClass={player1Primary}
                iconClass="bi bi-circle-fill pl-5 h1"
                name="Player1"
              />
            </div>
            <div className="col">
              <GameBoard continueGame={() => continueGame()} data={data} />
            </div>
            <div className="col">
              <Player
                isPrimaryClass={player2Primary}
                iconClass="bi bi-0-circle pl-5 h1"
                name="Player2"
              />
            </div>
          </div>
        </div>
      </DndContext>
    </>
  );
}

export default App;
