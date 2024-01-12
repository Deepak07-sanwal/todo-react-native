import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const todoInput = (props) => {

    const [todoText, setTodoText] = useState('');
    // todoText is the state variable and 
    // setTodoText is the function to change the state variable

    function enterTodoTextHandler(enteredText) {
        setTodoText(enteredText);
    }

    function onPress() {
        props.onTodoAdded(todoText);
        setTodoText('');
    }

    return (
        <View style={styles.flexForTodo}>
            <TextInput style={styles.textInput} onChangeText={enterTodoTextHandler} placeholder='Add your Todo' value={todoText} />
            <Button title='Add Todo' onPress={onPress} color={'#FF0079FF'} />
            {/* we cant apply styles to button directly */}
        </View>
    );
}

export default todoInput;
const styles = StyleSheet.create({
    flexForTodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom: 20,
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        marginRight: 5,
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        color: '#FF0079FF',
        paddingLeft: 20,
    },
});