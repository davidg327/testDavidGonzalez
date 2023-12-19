import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  subtitle: {
    color: '#4f4f4f',
    fontSize: wp(8),
    fontWeight: 'bold',
    marginTop: hp(1),
    marginLeft: wp(6),
  },
  containerAdd: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: wp('15%'),
      height: wp('15%'),
      borderRadius: wp('7.5%'),
      backgroundColor: '#A2D033',
      position: 'absolute',
      bottom: hp('8%'),
  },
  /*itemContainer: {
    backgroundColor: 'white',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp(2),
  },

  closeButton: {
    backgroundColor: 'green', // Blue
    borderRadius: 20,
  },

  ,*/
});

export default styles;
