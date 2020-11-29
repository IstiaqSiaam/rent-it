import { AsyncStorage } from "react-native";
import { concat } from "react-native-reanimated";

const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    alert("Data saved successfully!");
  } catch (error) {
    alert(error);
  }
};

const setDataJSON = async (key, value) => {
  try {
    const newData = JSON.stringify(value);
    await AsyncStorage.setItem(key, newData);
    //alert("Data saved successfully!");
  } catch (error) {
    alert(error);
  }
};

const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data != null) {
      return data;
    } else {
      alert("No data assigned to this key");
    }
  } catch (error) {
    alert(error);
  }
};

const getDataJSON = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonData = JSON.parse(data);
      return jsonData;
    } else {
      console.log("No data assigned to this key");
    }
  } catch (error) {
    console.log(error);
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("data removed successfully");
  } catch (error) {
    console.log(error);
  }
};



export {
  setData,
  setDataJSON,
  getData,
  getDataJSON,
  removeData,
};
