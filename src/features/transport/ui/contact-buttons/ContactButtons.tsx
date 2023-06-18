import { Button, StyleSheet, View } from "react-native";
import { callPhone, CONFIG_APP } from "../../../../shared";
import { Linking } from "react-native";

const ContactButtons = ({ phone }: { phone: number }) => {
  const message = encodeURIComponent(CONFIG_APP.firstWhatsAppMessage);

  const handleCallPress = () => {
    callPhone(String(phone), true);
  };

  const sendMassageWhatApp = () => {
    Linking.openURL(`whatsapp://send?phone=${String(phone)}&text=${message}`);
  };

  return (
    <View style={styles.contactsBtnContainer}>
      <View style={styles.button}>
        <Button
          title="Позвонить"
          color="#38A448"
          onPress={handleCallPress}
        />
      </View>
      <View style={styles.button}>
        <Button
          title={"Написать"}
          color={"#387EA5"}
          onPress={sendMassageWhatApp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactsBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  button: {
    width: "48%",
  },
});

export { ContactButtons };
