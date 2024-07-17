import React from "react";
import { SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import FlatCards from "./Components/FlatCards";
import ElevatedCards from "./Components/ElevatedCards";
import FancyCards from "./Components/FancyCards";
import ActionCard from "./Components/ActionCard";

function App(): JSX.Element{
  
return (
   <SafeAreaView>
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ActionCard />
    </ScrollView>
   </SafeAreaView>
)

}


 export default App;