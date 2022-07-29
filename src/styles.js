import { StyleSheet } from 'react-native';

// Revenue.Selector styles

export const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  appLeft: {
    flex: '0.7',
  },
  appRight: {
    flex: '0.3',
    backgroundImage: 'linear-gradient(92.67deg, #06152B 0%, #172D4F 119.15%)',
  },
  appLeftTop: {
    position: 'relative',
    top: '56px',
    left: '56px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 102px)',
  },
  appLeftBottom: {
    textAlign: 'center',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'Sofia Pro',
    fontStyle: "normal",
    fontWeight: "103",
    fontSize: "48px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#1B202D",
  },
  logo: {
    width: '47px',
    height: '66px',
  },
  BtnContainer: {
    height: '20px',
    width: '38px',
    flex: "none",
    order: "0",
    flexGrow: "0",
  },
  Btn: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineheight: "20px",
    color: "#1E2737",
  },
  appRightBox: {
    position: "absolute",
    top: "334.09px",
    right: "16px",
    left: "9px",
  },
  BoxTitle: {
    fontFamily: 'Sofia Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
    textAlign: 'center',
    color: "#FFFFFF",
    marginBottom: '26px',
  },
  ItemsContainer: {
    width: 'fit-content',
  }
});

// Item styles

export const ItemStyles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '40px',
    flex: '1',
    position: 'relative',
    left: '109px',
    right: '344px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '1rem',
  },
  title: {
    fontFamily: 'Sofia Pro',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "24px",
    color: '#FFFFFF',
  },
  subtitle: {
    fontFamily: 'Sofia Pro',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#FFFFFF",
    opacity: "0.8",
  }
})

// Vector1 icon styles

export const Vector1Styles = StyleSheet.create({
  imgContainer: {
    width: "40px",
    height: "40px",
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    background: "#DE6850",
    opacity: "0.7",
    borderRadius: "30px",
    zIndex: '99',
  },
  image1: {
    width: "4.27px",
    height: "8.53px",
    position: "absolute",
    left: "14px",
    right: "21.73px",
    top: "16.98px",
    bottom: "14.48px",
  },
  image2: {
    width: "14.93px",
    height: "11.1px",
    position: "absolute",
    left: "20.4px",
    right: "4.67px",
    top: "15.12px",
    bottom: "13.77px",
  },
  image3: {
    width: "10.3px",
    height: "4.28px",
    position: "absolute",
    left: "25.2px",
    right: "4.49px",
    top: "12px",
    bottom: "23.72px",
  },
  image4: {
    width: "19.2px",
    height: "17.24px",
    position: "absolute",
    left: "20.4px%",
    right: "0.4px",
    top: "26.76px",
    bottom: "4px",
  }
})

// Vector2 icon styles

export const Vector2Styles = StyleSheet.create({
  imgContainer: {
    width: "40px",
    height: "40px",
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    background: "#DE6850",
    opacity: "0.7",
    borderRadius: "30px",
    zIndex: '99',
  },
  image1: {
    width: "13.51px",
    height: "13.51px",
    position: "absolute",
    left: "15.38px",
    right: "11.11px",
    top: "13.25px",
    bottom: "13.24px",
  },
  image2: {
    width: "11.4px",
    height: "13.51px",
    position: "absolute",
    left: "29.67px",
    right: "1.06px",
    top: "13.25px",
    bottom: "13.24px",
  },
  image3: {
    width: "13.81px",
    height: "10.81px",
    position: "absolute",
    left: "30.62px",
    right: '1.13px',
    top: "28.11px",
    bottom: "1.08px",
  },
  image4: {
    width: "20.27px",
    height: "10.81px",
    position: "absolute",
    left: "12px%",
    right: "7.73px",
    top: "28.11px",
    bottom: "1.08px",
  }
})

// Vector3 icon styles

export const Vector3Styles = StyleSheet.create({
  imgContainer: {
    width: "40px",
    height: "40px",
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    background: "#DE6850",
    opacity: "0.7",
    borderRadius: "30px",
    zIndex: '99',
  },
  image1: {
    width: "10.33px",
    height: "10.33px",
    position: "absolute",
    top: "12px",
    bottom: '18.67px',
    left: '15.67px',
    right: '16px',
  },
  image2: {
    width: "9px",
    height: "9px",
    position: "absolute",
    top: "12.67px",
    bottom: "19.33px",
    left: "27.33px",
    right: "4.67px",
  },
  image3: {
    width: "13.42px",
    height: "20.65px",
    position: "absolute",
    left: "14.58px",
    right: '12px',
    top: "23.35px",
    bottom: "4px",
  },
  image4: {
    width: "11.54px",
    height: "5.26px",
    position: "absolute",
    right: "3.99px",
    left: "26.47px",
    top: "22px",
    bottom: "14.74px",
  },
  image5: {
    width: "17.33px",
    height: "17.33px",
    position: "absolute",
    left: "26.57px",
    top: "26.67px",
  }
})

// Vector4 icon styles

export const Vector4Styles = StyleSheet.create({
  imgContainer: {
    width: "40px",
    height: "40px",
    position: 'relative',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    background: "#DE6850",
    opacity: "0.7",
    borderRadius: "30px",
    zIndex: '99',
  },
  image1: {
    width: "24.67px",
    height: "24.67px",
    position: "absolute",
    top: "12px",
    bottom: '3.33px',
    left: '12px',
    right: '3.33px',
  },
  image2: {
    width: "16.65px",
    height: "8.25px",
    position: "absolute",
    top: "26.67px",
    bottom: '5.08px',
    left: '27.35px',
    right: '4px',
  },
  image3: {
    width: "16.59px",
    height: '8.37px',
    position: "absolute",
    top: "35.63px",
    bottom: '4.3px',
    left: '26.67px',
    right: '2.6px',
  },
})