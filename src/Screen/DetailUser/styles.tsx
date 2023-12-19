import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInfoTop: {
    backgroundColor: '#EDF4D8',
    height: hp('40%'),
  },
  containerInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: '#4f4f4f',
    fontSize: wp(6),
    fontWeight: 'bold',
    marginLeft: wp(6),
    marginTop: hp(2),
  },
  containerEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('7.5%'),
    marginRight: wp(5),
  },
  image: {
    width: wp('35%'),
    height: wp('35%'),
    zIndex: 1,
    borderWidth: wp(0.25),
    borderColor: '#000',
    borderRadius: wp(4),
    alignSelf: 'center',
  },
  containerAllInfo: {
    marginTop: -hp('30%'),
  },
  containerInfo: {
    backgroundColor: '#F7F7F7',
    borderRadius: wp(4),
    marginTop: hp(2),
    zIndex: 1,
    width: wp('90%'),
    alignSelf: 'center',
    paddingTop: hp(1),
    marginBottom: hp('2%'),
    paddingBottom: hp(3),
  },
  textInput: {
    borderWidth: wp(0.15),
    borderColor: 'black',
    borderRadius: wp(5),
    width: wp('70%'),
    alignSelf: 'center',
    marginTop: hp(1),
    paddingHorizontal: wp(10),
  },
  buttonSave: {
    backgroundColor: '#A2D033',
    alignSelf: 'center',
    width: wp('50&'),
    borderRadius: wp(4),
    padding: wp(2),
  },
  titleButtonSave: {
    color: 'white',
    textAlign: 'center',
  },
  buttonCancel: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: wp('50&'),
    borderRadius: wp(4),
    padding: wp(2),
    marginTop: hp(1),
    marginBottom: hp(3),
    borderWidth: wp(0.15),
    borderColor: 'gray',
  },
  titleButtonCancel: {
    color: 'gray',
    textAlign: 'center',
  },
});

export default styles;
