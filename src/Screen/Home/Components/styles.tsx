import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#EFEFEF',
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp(2),
    borderRadius: wp(5),
  },
  image: {
    width: wp('30%'),
    height: wp('30%'),
    position: 'absolute',
    left: wp(5),
    top: hp(1),
    zIndex: 1,
    borderWidth: wp(0.25),
    borderColor: '#000',
    borderRadius: wp(4),
  },
  containerUserName: {
    backgroundColor: '#CCE6E3',
    width: wp('90%'),
    borderRadius: wp(5),
    paddingTop: hp(1),
    paddingBottom: hp(2),
  },
  halfView: {
    width: wp('45%'),
    alignSelf: 'flex-end',
  },
  textName: {
    color: '#166D6B',
    fontSize: wp(5),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textId: {
    color: '#000',
    fontSize: wp(2),
    textAlign: 'left',
    marginTop: hp(1),
  },
  containerDetail: {
    backgroundColor: '#EFEFEF',
    paddingTop: hp(1),
    paddingBottom: hp(2),
    borderRadius: wp(5),
  },
  textDetail: {
    color: '#166D6B',
    fontSize: wp(3),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  halfViewSecondPart: {
    width: wp('45%'),
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: wp(5),
    marginRight: wp(5),
  },
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: wp(5),
    marginTop: hp(2),
  },
  hiddenButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: hp('18%'),
  },
  deleteButton: {
    backgroundColor: '#E74C3C', // Red
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default styles;
