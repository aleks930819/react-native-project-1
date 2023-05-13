import { StyleSheet } from 'react-native';
import { View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ addGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    addGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addGoalHandler} color="#5e0acc" />
          <Button title="CANCEL" onPress={onCancel} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ffff',
    width: '80%',
    padding: 20,
    color: '#ffff',
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});
