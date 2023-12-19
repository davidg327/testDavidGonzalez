import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IHeader {
  text?: string;
}

const Header: React.FC<IHeader> = ({text}) => {
  return (
    <>
      <Text style={styles.title}>Finanzauto</Text>
      <View style={styles.containerIndex}>
        <View style={text ? styles.containerIndexMoreText : {}}>
          <Text style={{...styles.textIndex, color: text ? '#fff' : '#A2D033'}}>
            Inicio
          </Text>
          {text && (
            <View style={styles.containerIndexMoreText}>
              <FontAwesome
                name={'angle-right'}
                style={styles.iconMore}
                color={'white'}
              />
              <Text style={styles.textAdditional}>{text}</Text>
            </View>
          )}
        </View>
        <Ionicons name={'menu'} color={'white'} style={styles.iconMenu} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#166D6B',
    fontSize: wp(12),
    fontWeight: 'bold',
    marginTop: hp(2),
    marginLeft: wp(6),
  },
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
  containerIndexMoreText: {
    backgroundColor: '#166D6B',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIndex: {
    fontSize: wp(4),
  },
  iconMenu: {
    fontSize: wp(8),
  },
  iconMore: {
    fontSize: wp(5),
    marginLeft: wp(3),
  },
  textAdditional: {
    color: '#A2D033',
    marginLeft: wp(3),
  },
});

export default Header;
