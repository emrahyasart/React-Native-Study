import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNTER_CHANGE = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "RESET":
      return { ...state, counter: action.payload };
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "INCREMENT", payload: COUNTER_CHANGE })}
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "DECREMENT", payload: -1 * COUNTER_CHANGE })
        }
      />
      <Button
        title="Reset"
        onPress={() => dispatch({ type: "RESET", payload: 0 })}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
