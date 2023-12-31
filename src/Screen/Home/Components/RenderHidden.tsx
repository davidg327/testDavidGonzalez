import React from 'react';
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IRenderHidden {
  deleteItem: () => void
}

export const RenderHidden: React.FC<IRenderHidden> = ({deleteItem}) => {
  return (
    <View
      style={styles.hiddenContainer}
    >
      <Pressable
        style={[styles.hiddenButton, styles.deleteButton]}
        onPress={deleteItem}
      >
       <FontAwesome name={'trash'} color={'white'} size={wp(7)}/>
      </Pressable>
    </View>
  )
};
