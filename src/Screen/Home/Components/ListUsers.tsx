import React from 'react';
import { Image, Text, View } from "react-native";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface IListUsers {
  item: any;
}

export const ListUsers: React.FC<IListUsers> = ({item}) => {
  return (
    <View
      style={styles.itemContainer}
    >
      <Image source={{uri: item.picture}} style={styles.image}/>
      <View style={styles.containerUserName}>
        <View style={styles.halfView}>
          <Text style={styles.textName}>
            {item.firstName}
          </Text>
          <Text style={styles.textName}>
            {item.lastName}
          </Text>
          <Text style={styles.textId}>
            ID: {item.id}
          </Text>
        </View>
      </View>
      <View style={styles.containerDetail}>
        <View style={styles.halfViewSecondPart}>
          <Text style={styles.textDetail}>
            Ver detalle
          </Text>
          <FontAwesome
            name={'angle-right'}
            color={'#166D6B'}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  )
};
