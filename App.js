import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState();
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, {key: text}]);
    setText();
  }

  const clear = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Button onPress={add} title="ADD" />
        <Button onPress={clear} title="CLEAR" />
      </View>
      <Text style={styles.text}>Shopping list</Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
