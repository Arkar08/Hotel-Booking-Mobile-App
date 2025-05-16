import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const DateBooking = () => {

  const [date,setDate] = useState(new Date())
  const [showPicker ,setShowPicker] = useState(false)
  const [checkIn,setCheckIn] = useState('')
  const [checkOutDate,setCheckOutDate] = useState(new Date())
  const [showCheckOut,setShowCheckOut] = useState(false)
  const [checkOut,setCheckOut] = useState('')

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}:any,selectedDate:any) => {
    if(type === 'set'){
      const currentDate = selectedDate;
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
      setCheckOut(currentDate)
      setShowCheckOut(false)
    }else{
      toggelCheckOut()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
          <Text>Check In</Text>
          {
            !showPicker && (
              <Pressable onPress={toggleDatePicker} style={styles.checkIn}>
                <Text  style={styles.checkText}>{checkIn === '' ? 'CheckIn Date' : moment(checkIn).format("MMM Do YY")   }</Text>
              </Pressable>
            )
          }
          {
            showPicker && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='calendar' value={date} onChange={onChange}/>
            )
          }
      </View>
       <View style={styles.inputContainer}>
          <Text>Check Out</Text>
          {
            !showCheckOut && (
              <Pressable onPress={toggelCheckOut}  style={styles.checkIn}>
                <Text style={styles.checkText}>{checkOut === '' ? 'CheckOut Date' : moment(checkOut).format("MMM Do YY")   }</Text>
              </Pressable>
            )
          }
          {
            showCheckOut && (
              <DateTimePicker mode="date" minimumDate={new Date()} display='calendar' value={checkOutDate} onChange={checkoutChange}/>
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
    padding:10
  },
  inputContainer:{
    paddingVertical:10
  },
  checkIn:{
    width:'100%',
    padding:10,
    paddingVertical:20,
    backgroundColor:'gray',
    borderRadius:10,
    marginTop:10
  },
  checkText:{
    color:'white'
  }
});

export default DateBooking;
