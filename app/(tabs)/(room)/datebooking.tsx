import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const DateBooking = () => {

  const [date,setDate] = useState(new Date())
  const [showPicker ,setShowPicker] = useState(false)
  const [checkIn,setCheckIn] = useState('')
  const [checkOutDate,setCheckOutDate] = useState(new Date())
  const [showCheckOut,setShowCheckOut] = useState(false)

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}:any,selectedDate:any) => {
    if(type === 'set'){
      const currentDate = selectedDate;
      console.log(currentDate)
      setDate(currentDate)
      setShowPicker(false)
      setCheckIn(currentDate)
    }else{
      toggleDatePicker()
    }
  }

  const toggelCheckOut = () =>{
    setShowCheckOut(!showCheckOut)
  }

  const checkoutChange = ({type}:any,selectDate:any) => {
    if(type === 'set'){
      const currentDate = selectDate;
      setCheckOutDate(currentDate)
    }else{
      toggelCheckOut()
    }
  }

  return (
    <View style={styles.container}>
      <Text>DateBooking</Text>
      <View>
          <Text>Check In</Text>
          {
            !showPicker && (
              <Pressable onPress={toggleDatePicker}>
                <Text>{checkIn === '' && 'toggle' }</Text>
              </Pressable>
            )
          }
          {
            showPicker && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='calendar' value={date} onChange={onChange}/>
            )
          }
      </View>
       <View>
          <Text>Check Out</Text>
          {
            !showCheckOut && (
              <Pressable onPress={toggelCheckOut}>
                <TextInput editable={false} placeholder='DateAndTime' style={{paddingVertical:5}}/>
              </Pressable>
            )
          }
          {
            showCheckOut && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='spinner' value={checkOutDate} onChange={checkoutChange}/>
            )
          }
      </View>
      <View>
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DateBooking;
