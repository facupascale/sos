import { FontAwesome } from '@expo/vector-icons'
import { View, Modal, ModalProps } from 'react-native'

import { CustomText } from '../CustomText'

import { Colors } from '@/constants'

interface CustomModalStateProps extends ModalProps {
  state: 'succes' | 'error' | 'warning'
  title: string
}

const CustomModalState = ({
  state,
  className,
  title = 'texto de prueba',
  ...props
}: CustomModalStateProps) => {
  const icon =
    state === 'succes'
      ? 'check-circle'
      : state === 'warning'
        ? 'warning'
        : 'times-circle'
  const color =
    state === 'succes'
      ? Colors.green
      : state === 'error'
        ? Colors.red
        : Colors.yellow
  return (
    <Modal
      animationType="slide"
      transparent
      visible
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setModalVisible(!modalVisible);
      // }}
      {...props}
    >
      <View
        className="flex-1 justify-center items-center mt-22"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View className="bg-custom-primary rounded-lg w-4/5 h-1/3 items-center justify-around shadow-custom-black shadow-sm">
          <CustomText size={19} className="mt-5">
            {title}
          </CustomText>
          <FontAwesome name={icon} size={230} color={color} />
        </View>
      </View>
    </Modal>
  )
}

export { CustomModalState }
