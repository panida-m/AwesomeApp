/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firestore from '@react-native-firebase/firestore';

function App() {

  useEffect(() => {
    /*addUsers().then(() => {
      console.log('User added!');
    })*/
  })

  const ref = firestore().collection('student');
  const [ user, setUser ] = useState('');
  const [ age, setAge ] = useState(0);
 

  async function addUsers() {
    await ref.add({
      name: user,
      age: age,
    })
  }

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View>
          <View><Text>Name</Text></View>
          <TextInput
          label={'New User'}
          value={user}
          onChangeText={setUser}
          style={{borderColor: '#000000', backgroundColor: '#FFFFFF'}}/>

          <View><Text>Age</Text></View>
          <TextInput
          label={'New Age'}
          value={age}
          onChangeText={setAge}
          style={{borderColor: '#000000', backgroundColor: '#dddddd'}}/>
        </View>
        <View>
          <Button onPress={() => addUsers()} title='Add User'/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
/*import React, { useEffect, useState } from 'react';
import { FlatList, Alert, View, Text } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import Firestore from '@react-native-firebase/firestore';
import { Actions } from 'react-native-router-flux'
import Todo from './Todo'; 

function Add() {
    const ref = Firestore().collection('todos');
    const [ todo, setTodo ] = useState('');
    const [ loading, setLoading ] = useState(true);
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        return ref.onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach(doc => {
            const { title, complete } = doc.data();
            list.push({
            id: doc.id,
            title,
            complete,
            });
        });

        setTodos(list);

        if (loading) {
            setLoading(false);
        }
        });
    });

    async function AddTodo() {
        if(todo == '') {
            await Alert.alert(
                'Warning?', 
                'You must input title?', 
                [ {text: 'OK'} ]
            )
          } else {
            await ref.add({
              title: todo,
              complete: false,
            }).then(() => {
                Actions.home()
            })
          }
    }

    return (
        <>
            <Appbar>
                <Appbar.Content title={'เพิ่มงานที่ต้องทำ'} />
            </Appbar>
            
            <TextInput label={'เพิ่มงานใหม่ที่ต้องทำ'} value={todo} onChangeText={setTodo} />
            <Button onPress={() => AddTodo()}>Add TODO</Button>
        </>
    )
};


export default Add;*/