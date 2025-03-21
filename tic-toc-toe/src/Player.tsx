import { DraggableElement } from "./DraggableElement";

interface Props {
  isPrimaryClass: string;
  iconClass: string;
  name: string;
}

function Player({ isPrimaryClass, iconClass, name }: Props) {
  const rows = [1, 2, 3, 4];
  return (
    <>
      <h1 className={isPrimaryClass}>{name}</h1>
      <div>
        {rows.map((item) => {
          return (
            <DraggableElement
              key={`draggable-element-${name}-${item}`}
              identifier={`${name}-${item}`}
              content={iconClass}
            />
          );
        })}
      </div>
    </>
  );
}

export default Player;
