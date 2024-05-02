

import {StyleSheet} from 'react-native';
import assets from './assets';
import {getFontSize, getResHeight, hp, wp} from './responsive';
import * as Validation from '../Theme/ValidationSchema';

const regex = {
  percentage: /^(\d*\.{0,1}\d{0,2}$)/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  instagram:
    /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/im,
  facebook: /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i,
  twitter: /^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i,
  linkedin:
    'http[s]?://www.linkedin.com/(in|pub|public-profile/in|public-profile/pub)/([w]{6}-[w]{1,}-[w]+)$',
  youtube:
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
};
const color = {
  primary: '#E77817', // ok //F99D27
  // UOTM_primary: '#F35b07', // ok //F99D27
  UOTM_primary: 'rgb(224, 75, 18)',
  secondPrimary: '#053C6D',
  UOTM_secondPrimary: '#b0222c',
  accent: '#FFFFFF',
  transparent: 'transparent',
  black: 'black',
  text: '#2c2c2c', // ok
  dimLight: '#999',
  light: '#ededed',
  extraLight: '#faf9f9',
  red: '#ea5455',
  bg: 'white',
  error: '#FF0000',
  success: '#4BB543',
  disableColor: '#fcefe3',
  textColor: '#053C6D',
  alert: '#ff0000',
  modalBg: 'rgba(0, 0, 0, 0.75)',
  alertBg: 'rgba(0, 0, 0, 0.55)',
  playbtn: '#0C0C0C99',
  playicon: '#FFFFFF',
  placeholder: '#7F7F7F',
};

const font = {
  // ok
  regular: 'Muli-Regular',
  semiBold: 'Muli-SemiBold',
  bold: 'Muli-Bold',
  extrabold: 'Muli-ExtraBold',
};

const fontSizes = {
  extraSmall: 10,
  small: 12,
  regular: 14,
  medium: 16,
  large: 18,
  extraLarge: 20,
  ultraLarge: 22,
};

const Radius = {
  small: 3,
  medium: 5,
  large: 7,
};

const styles = StyleSheet.create({
  errorStyle: {
    width: '90%',
    color: color.error,
    fontFamily: font.regular,
    fontSize: getFontSize(9.5),
    fontWeight: '400',
  },
  errorStyle1: {
    width: '90%',
    color: color.error,
    fontFamily: font.regular,
    fontSize: getFontSize(9.5),
    fontWeight: '400',
  },
  closeBtnTxt: {
    color: color.accent,
    fontFamily: font.bold,
    fontSize: getFontSize(14),
    // fontWeight: '800',
  },
  inputPlaceholder: {
    color: '#232731B2',
    fontFamily: font.regular,
    fontSize: getFontSize(15),
    fontWeight: '400',
  },
  btnTitleStyle: {
    fontFamily: font.bold,
    fontSize: getFontSize(14),
    // fontWeight: '600',
    color: color.accent,
  },
  inputTitle: {
    color: '#232323',
    // opacity: 0.7,
    fontFamily: font.bold,
    fontSize: getFontSize(12),
    // fontWeight: '500',
  },
  roundBtnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 15,
  },
  cardEffect: {
    backgroundColor: color.accent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  profileCard: {
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: color.accent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 15,
  },
  homeTitle: {
    color: color.black,
    fontFamily: font.regular,
    fontSize: getFontSize(10),
    // fontWeight: '400',
    textAlign: 'center',
  },
  UOTM_homeTitle: {
    color: color.black,
    fontFamily: font.regular,
    fontSize: getFontSize(13),
    fontWeight: '400',
    textAlign: 'center',
  },
  homeFContainerStyle: {
    paddingHorizontal: '4.5%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  homeViewContainerStyle: {
    paddingTop: getResHeight(10),
    paddingHorizontal: '2.5%',
  },
  homeFStyle: {
    width: '100%',
    // marginTop: '2.5%',
  },
  categoryTitle: {
    color: color.black,
    fontFamily: font.bold,
    fontSize: getFontSize(11.5),
    // fontWeight: '700',
    textAlign: 'center',
  },
});


const theme = {
  regex,
  color,
  font,
  fontSizes,
  Radius,
  marginHorizontal: 15,
  marginVerticle: 15,
  setPrimaryColor: function (color) {
    this.color.primary = color;
  },
  styles,
  assets,
  validationSchema: Validation,
};

export default theme;