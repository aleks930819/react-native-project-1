import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: '#5e0acc',
    marginVertical: 10,
    borderRadius: 5,
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
