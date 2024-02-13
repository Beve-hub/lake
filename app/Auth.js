import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from './screen/Home'
import Post from './screen/Post'
import Message from './screen/Message';
import Profile from './screen/Profile';
import Board from './welcome/Board';





const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainScreen() {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >

            <Tab.Screen 
            name="Home"
            component={Home}
            options={{ title: 'Home',
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "home" : "home-outline"} 
                size={24} color={focused ? "#00308D" : "#CDCDCD"}
                 />
            }
        }}
            />

       <Tab.Screen 
            name="Post"
            component={Post}
            options={{ title: 'Post',
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? "add-circle" : "add-circle-outline"} 
                size={24} color={focused ? "#00308D" : "#CDCDCD"}
                 />
            }
        }}
            />

       <Tab.Screen 
            name="Message"
            component={Message}
            options={{ title: 'Message',
            tabBarIcon: ({focused}) => {
                return < MaterialCommunityIcons name={focused ? "comment-text-multiple" : "comment-text-multiple-outline"} 
                size={24} color={focused ? "#00308D" : "#CDCDCD"}
                 />
            }
        }}
            />

       <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{ title: 'Profile',
            tabBarIcon: ({focused}) => {
                return < FontAwesome name={focused ? "user-circle" : "user-circle-o"} 
                size={24} color={focused ? "#00308D" : "#CDCDCD"}
                 />
            }
        }}
            />
        </Tab.Navigator>
    )
}


function Auth(props) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
            screenOptions={{headerShown:false}} >
                <Stack.Screen name='Board' component={Board}/>
                <Stack.Screen name='MainScreen' component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Auth;