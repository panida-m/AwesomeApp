import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import { Alert } from 'react-native';

function Todo({ id, title, complete }) {
  async function toggleComplete() {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete,
      });
  }

function deleteTodo(id) {
    Alert.alert(
        'Delete?', 
        'Do you want to delete this item?', 
        [
            {text: 'Cancel'},
            {
                text: 'OK',
                onPress: async () => {
                    await firestore()
                        .collection('todos')
                        .doc(id).delete()
                }
            },
        ])
  }

  return (
    <List.Item
      title={title}
      onPress={() => toggleComplete()}
      onLongPress={() => deleteTodo(id)}
      left={props => (
        <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
      )}
    />
  );
}

export default React.memo(Todo);