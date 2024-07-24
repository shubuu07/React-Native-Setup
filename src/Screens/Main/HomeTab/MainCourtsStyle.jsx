import { StyleSheet } from 'react-native';
import { Colors } from '../../../Constants/Theme';

export default MainCourtStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    padding: 12,
    position: 'relative',
  },
  submenu: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  padelCourtTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  submenuinner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  shadow: {
    shadowColor: 'rgba(0,0,0,0.6)',
    elevation: 3,
    zIndex: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  button: {
    justifyContent: 'center',
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 6,
    backgroundColor: Colors.primary,
    color: 'white',
    marginRight: 4,
  },
  mapView: {
    fontSize: 9,
    color: '#fff',
    paddingHorizontal: 5,
    fontFamily: 'Lato-Regular',
  },
  allCourts: {
    fontSize: 9,
    paddingHorizontal: 5,
    fontFamily: 'Lato-Regular',
    color: Colors.black,
  },
  button2: {
    justifyContent: 'center',
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 6,
    backgroundColor: 'white',
    color: Colors.black,
  },
  courtname: {
    color: 'white',
    fontSize: 16,
    // fontFamily: "Lato-Bold",
    fontWeight: '700',
    textAlign: 'left',
  },
  booknowText: {
    color: '#fff',
    fontFamily: 'Lato-Black',
    alignSelf: 'center',
  },
  bookNowBtn: {
    justifyContent: 'center',
    textAlign: 'left',
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  bgImage: {
    marginRight: 12,
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    height: 210,
    backgroundColor: '#00000060',
    position: 'relative',
  },
  outdoors: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 25,
  },
  outdoorsText: {
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    paddingHorizontal: 8,
    paddingVertical: 5,
    textTransform: 'capitalize',
    color: Colors.black,
  },
  courtlocation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  courtlocationicon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  courtlocationaddress: {
    textAlign: 'left',
    marginLeft: 5,
    marginRight: 'auto',
    fontFamily: 'Lato-Bold',
  },
  address: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 10,
  },

  courtDetailsContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 12,
    height: 'auto',
    right: 0,
    left: 0,
  },
  mx5: {
    marginHorizontal: 5
  },
  pr2: {
    paddingRight: 1.5
  }
});
