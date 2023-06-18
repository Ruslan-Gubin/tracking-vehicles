import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactElement 
}


const ModalComponent: React.FC<ModalProps>  = ({ visible, onClose, children }) => {


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible} 
      onRequestClose={() => {
        alert('Modal has been closed.')
      }}>
        <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>

    <View style={styles.content} >

    {children} 
      </View>
        </View>
        </TouchableWithoutFeedback>
  </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(00, 00, 00, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  content: { 
    width: '60%',
  },
});

export { ModalComponent } ;