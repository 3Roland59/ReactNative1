import React from "react";
import { View, Text} from "react-native";

const RowTxt = ({ mes1, mes2, hlStyles, hStyles, lStyles}) => {
    return(
        <View style={hlStyles}>
          <Text style={hStyles}>{mes1}</Text>
          <Text style={lStyles}>{mes2}</Text>
       </View>
    )
}

export default RowTxt