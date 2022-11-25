import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    fontSize: 12,
    marginVertical: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    width: '90%',
  },
  soundButton: {
    width: '90%',
    height: '10%',
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;