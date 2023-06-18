import Communications from 'react-native-communications';

export const callPhone = (phone: string, isPromt: boolean) => {
  Communications.phonecall(phone, isPromt);
}