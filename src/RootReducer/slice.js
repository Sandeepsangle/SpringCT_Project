import { createSlice } from "@reduxjs/toolkit";
import { TouchableHighlight,LogBox,StatusBar,Platform,AppState,Alert,ActivityIndicator,Linking,Share,SafeAreaView,Easing,Animated,Modal,TextInput as RNInput, } from "react-native";
const initialState = {
    slided : false,
    isLogedIn : false
}
const HomeSlice = createSlice({
    name: "SlicePage",
    initialState,
    reducers:{
        setSlided: function(state,action){
            console.log("clg",state.slided, action.payload)
            state.slided = action.payload
        },
        setisLogin : function(state,action){
            console.log("setisLogin", action.payload)
            state.isLogedIn =  action.payload
        }
    }
})

export const {
    setSlided,
    setisLogin
} = HomeSlice.actions

export default HomeSlice.reducer;