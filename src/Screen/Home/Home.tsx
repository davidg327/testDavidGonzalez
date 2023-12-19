import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { getUsers } from "../../Api/ApiDummyapi";
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListUsers } from "./Components/ListUsers";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RenderHidden } from "./Components/RenderHidden";
import Header from "../../Components/Header";

export const HomeScreen = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let listUsers = await getUsers();
      setUsers(listUsers.data);
    })();
  }, []);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteItem = (rowMap, rowKey) => {
    /*closeRow(rowMap, rowKey);
    const newData = [...this.state.itemList];
    const prevIndex = this.state.itemList
      .findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setUsers(newData);*/
  };

  const onRowOpen = rowKey => {
    console.log('Opened row with key:', rowKey);
  };

  const renderItem = rowData => (
    <ListUsers item={rowData.item} />
  );

  const renderHiddenItem = (rowData, rowMap) => (
    <RenderHidden />
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.subtitle}>Consulta y Registro de usuarios</Text>
      <SwipeListView
        data={users}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-70}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowOpen}
        scrollEnabled={true}
        contentContainerStyle={{paddingBottom: 150}}
      />
      <View style={styles.containerAdd}>
        <FontAwesome name={'plus'} color={'white'} size={20}/>
      </View>
    </View>
  )
}
