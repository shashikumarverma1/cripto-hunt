import React from "react"
import { View , Text } from "react-native"

export const LoadingScreen=()=>{
    return (
        <View style={{flex:1, flexDirection:"row" , justifyContent:"center" ,alignItems:"center" }}>
            <Text>Loading...</Text>
        </View>
    )
}