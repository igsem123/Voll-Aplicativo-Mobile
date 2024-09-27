import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#0B3B60",
        alignItems: "center",
        padding: 2,
    },
    tabBarActiveTintColor: "#339CFF",
    tabBarInactiveTintColor: "white",
    tabBarLabelPosition: 'below-icon', // valor aceito
    tabBarAllowFontScaling: true,
}

const tabs = [
    {
        name: "Início",
        component: Principal,
        icon: 'home'
    },
    {
        name: "Consultas",
        component: Consultas,
        icon: 'calendar-month'
    },
    {
        name: "Explorar",
        component: Explorar,
        icon: 'magnify'
    },
    {
        name: "Perfil",
        component: Perfil,
        icon: 'account'
    },
]

export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name={tab.icon} color={color} size={size} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}
