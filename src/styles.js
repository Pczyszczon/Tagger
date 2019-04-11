import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center'
  },

  instructions: {
    textAlign: 'center',
    marginTop: 10,
  },

  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    textAlign: "center",
  },

  container: {
    paddingLeft: 20,
    paddingTop: 30,
    paddingRight: 20,
    flex: 1
  },

  mainButtons: {
      marginTop: 5,
  },

  viewStyle: {
    flex: 1,
  },

    modalText: {
        fontSize: 30,
    },

});

module.exports = styles;
