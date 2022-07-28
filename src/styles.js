import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  app: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  appLeft: {
    flex: '0.75',
  },
  appRight: {
    flex: '0.25',
    backgroundImage: 'linear-gradient(94.5deg, #202076, #191947)',
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
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 60px)',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.25',
    transform: 'scaleY(1.1)',
  },
  logo: {
    height: '60px',
    width: '45px',
  },
  BtnContainer: {
    height: '40px',
    width: '120px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    zIndex: '99',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '2px 6px 14px -7px rgba(0,0,0,0.75)',
  },
  Btn: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: '3px',
  },
});
