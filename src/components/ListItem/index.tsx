import * as C from "./styles";
import { Item } from "../../types/item";
import { Delete } from "@material-ui/icons";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  return (
    <C.Container done={item.done}>
      <div className="item">
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <label>{item.name}</label>
      </div>

      <div className="remove">
        <Delete />
      </div>
    </C.Container>
  );
};
