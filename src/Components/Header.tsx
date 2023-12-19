import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

interface IHeader{

}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <View style={styles.containerIndex}>
      <Text style={styles.textIndex}>Inicio</Text>
      <Ionicons name={'menu'} color={'white'} style={styles.iconMenu}/>
    </View>
  )
};

const styles = StyleSheet.create({
  containerIndex: {
    backgroundColor: '#166D6B',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    width: wp('100%'),
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
    paddingVertical: hp(1),
  },
  textIndex: {
    color: '#A2D033',
    fontSize: wp(4)
  },
  iconMenu: {
    fontSize: wp(8),
  },
});

export default Header
