import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {


  const [todoList, setTodoList] = useState([]);


  function addTodoText(todoText) {
    if (todoText != "") {
      setTodoList([...todoList, { text: todoText, key: Math.random().toString() }]);
      // ... is the spread operator (old array + new element)
    }

  }

  function deleteHandler(id) {
    setTodoList(todoList.filter((todo) => todo.key != id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TodoInput onTodoAdded={addTodoText} />
      {/* <ScrollView>
        {todoList.map((todo) => <Text key={todo} style={styles.todo}>{todo}</Text>)}
      </ScrollView> */}
      {/* We didn't use ScrollView in case of list because list can have millions of 
      elements and ScrollView Loads all the elements at once, so app performance will reduced
      
      Use FlatList instead it will load data only when scroll*/}
      <FlatList style={styles.todoList} data={todoList} renderItem={(todoItem) => {
        return (
          <TodoItem text={todoItem.item.text} id={todoItem.item.key} onDeleteT={deleteHandler} />
        )
      }} keyExtractor={(item, index) => {
        return (
          item.key
        )
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  // we dont have to add px in react native
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF0079FF',
    textShadowColor: 'yellow',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  todoList: {
    height: '88%',
  },

});


// views in react native are like divs in html
// we can't write string without text tag as in html
// by default flex is used to make the view take the whole screen
// by default flex direction is column in react native
// we follow camel case in react native
// useState is a hook in react