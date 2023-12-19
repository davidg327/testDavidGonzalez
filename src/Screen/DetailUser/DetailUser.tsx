import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getUserId, getUsers, updateUser } from "../../Api/ApiDummyapi";
import styles from "./styles";
import Header from "../../Components/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface IDetailUser {
  route: any;
}

export const DetailUser: React.FC<IDetailUser> = ({route}) => {

  const {id} = route.params;

  const [user, setUser] = useState({});
  const [activeEdit, setActiveEdit] = useState(false);
  const [form, setForm] = useState({});

  const setData = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  }

  useEffect(() => {
    (async () => {
      let userId = await getUserId(id);
      setUser(userId);
    })();
  }, []);

  const changeEdit = () => {
    setActiveEdit(!activeEdit);
  }

  const update = async () => {
    let values = {
      firstName: form?.firstName ? form.firstName : user.firstName,
      lastName: form?.lastName ? form.lastName : user.lastName,
      phone: form?.phone ? form.phone : user.phone
    };
    await updateUser(id, values);
  };

  return (
    <View style={styles.container}>
      <Header text={'Detalle del registro'}/>
      <ScrollView style={{flex: 1, height: '100%'}}>
        <View style={styles.containerInfoTop}>
          <View style={styles.containerInfoHeader}>
            <Text style={styles.subtitle}>{'Información del\nusuario'}</Text>
            <Pressable
              onPress={changeEdit}
              style={{...styles.containerEdit, backgroundColor: activeEdit ? '#BFBFBF' :  '#A2D033'}}>
              <FontAwesome name={'edit'} color={'white'} size={15}/>
            </Pressable>
          </View>
        </View>
        <View style={styles.containerAllInfo}>
          <Image source={{uri: user.picture}} style={styles.image}/>
          <View style={styles.containerInfo}>
            <TextInput
              placeholder={user.id}
              style={styles.textInput}
              editable={false}
            />
            <TextInput
              placeholder={user.title}
              style={styles.textInput}
              editable={false}
            />
            <TextInput
              placeholder={user.firstName}
              style={styles.textInput}
              editable={activeEdit}
              value={form.firstName}
              onChangeText={(text) => setData('firstName', text)}
            />
            <TextInput
              placeholder={user.lastName}
              style={styles.textInput}
              editable={activeEdit}
              value={form.lastName}
              onChangeText={(text) => setData('lastName', text)}
            />
            <TextInput
              placeholder={user.gender}
              style={styles.textInput}
              editable={false}
            />
            <TextInput
              placeholder={user.email}
              style={styles.textInput}
              editable={false}
            />
            <TextInput
              placeholder={user?.dateOfBirth ? user.dateOfBirth.substring(0,10) : ''}
              style={styles.textInput}
              editable={false}
            />
            <TextInput
              placeholder={user.phone}
              style={styles.textInput}
              editable={activeEdit}
              keyboardType={'numeric'}
              value={form.phone}
              onChangeText={(text) => setData('phone', text)}
            />
          </View>
        </View>
        {activeEdit && (
          <>
            <Pressable style={styles.buttonSave}
              onPress={update}>
              <Text style={styles.titleButtonSave}>Guardar</Text>
            </Pressable>
            <Pressable style={styles.buttonCancel}
              onPress={changeEdit}>
              <Text style={styles.titleButtonCancel}>Cancelar</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  )
};

