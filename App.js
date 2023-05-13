import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: `${enteredGoal}-${Math.random().toString()}` },
    ]);

    setModalVisible(false);
  }

  function deleteGoalHandler(goalId) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        {modalVisible && (
          <GoalInput
            addGoal={addGoalHandler}
            visible={modalVisible}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 40,
  },

  goalsContainer: {
    flex: 5,
  },
});
