import { Text, StyleSheet, Pressable } from 'react-native';
const todoItem = (props) => {

    function deleteHelper() {
        props.onDeleteT(props.id);
    }
    return (
        <Pressable onPress={deleteHelper}>
            <Text style={styles.todo}>{props.text}</Text>
        </Pressable>
    );
    // onPress comes with Pressable and button
}
// props is an object which contains all the properties of the component
export default todoItem;

const styles = StyleSheet.create({
    todo: {
        borderWidth: 1,
        borderColor: '#cccccc',
        marginVertical: 5,
        padding: 10,
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#FF0079FF',
        color: 'white',
        borderRadius: 20,
        fontSize: 20,
    }
});