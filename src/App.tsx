import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { Additem } from './components/AddItem';

type Props = {
  item: Item;
}

const App = () => {
  const [list, setList] = useState<Item[]>([
    // {id:1, name:'Comprar pão', done:false},
    // {id:2, name:'Comprar bolo', done:true}
  ])

  const addTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  const taskChange = (id:number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const removeTask = ({item}: Props) => {
    let newList = [...list];
    const index = newList.indexOf(item)
    newList.splice(index,1)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <Additem  onEnter={addTask}/>

        {list.map((item, index) => {
          return(<ListItem key={index} item={item} onChange={taskChange}/>)
        })}
      </C.Area>
    </C.Container>
  );
}

export default App;