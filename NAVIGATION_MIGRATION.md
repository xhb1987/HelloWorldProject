# Navigation Migration Guide

## Overview
This guide helps you migrate from `react-native-navigation` v1 to `@react-navigation` v6.

## Installation (Already Completed)
The following packages have been installed:
- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/bottom-tabs`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-gesture-handler`
- `react-native-reanimated`

## Configuration Setup

### 1. Update index.js
Replace the old navigation initialization with NavigationContainer:

```javascript
// OLD
import { Navigation } from 'react-native-navigation';
Navigation.startTabBasedApp({...});

// NEW
import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/App';
import { name as appName } from './app.json';

const Root = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Root);
```

### 2. Setup Gesture Handler (Important!)
In `index.js`, add at the very top (before any other imports):

```javascript
import 'react-native-gesture-handler';
```

### 3. Configure Reanimated (Already Done in babel.config.js)
The babel.config.js already includes:
```javascript
plugins: [
  'react-native-reanimated/plugin', // Must be last
]
```

## Screen Migration Examples

### Stack Navigator

```javascript
// OLD
import { Navigation } from 'react-native-navigation';

class HomeScreen extends Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'app.DetailScreen',
      title: 'Detail'
    });
  };
}

Navigation.registerComponent('app.HomeScreen', () => HomeScreen);

// NEW
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const pushScreen = () => {
    navigation.navigate('Detail');
  };
  
  return (
    // your component JSX
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
```

### Tab Navigator

```javascript
// OLD
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'app.HomeScreen',
      icon: require('./icon.png'),
    },
    {
      label: 'Profile',
      screen: 'app.ProfileScreen',
      icon: require('./icon2.png'),
    }
  ]
});

// NEW
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
```

## Common Navigation Actions Migration

### Push/Navigate
```javascript
// OLD
this.props.navigator.push({
  screen: 'app.DetailScreen',
  passProps: { id: 123 }
});

// NEW
navigation.navigate('Detail', { id: 123 });
```

### Pop/Go Back
```javascript
// OLD
this.props.navigator.pop();

// NEW
navigation.goBack();
```

### Pop to Root
```javascript
// OLD
this.props.navigator.popToRoot();

// NEW
navigation.popToTop();
```

### Replace
```javascript
// OLD
this.props.navigator.resetTo({
  screen: 'app.LoginScreen'
});

// NEW
navigation.replace('Login');
```

### Modal
```javascript
// OLD
this.props.navigator.showModal({
  screen: 'app.ModalScreen'
});

// NEW
// Define modal in stack with presentation: 'modal'
<Stack.Screen 
  name="Modal" 
  component={ModalScreen}
  options={{ presentation: 'modal' }}
/>

// Navigate to it
navigation.navigate('Modal');
```

## Accessing Navigation Props

### Class Components
```javascript
// Navigation prop is automatically passed
class MyScreen extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Details');
  };
}
```

### Function Components
```javascript
function MyScreen({ navigation, route }) {
  const handlePress = () => {
    navigation.navigate('Details');
  };
  
  // Access params
  const { id } = route.params;
}
```

### Deep Components (without direct access)
```javascript
import { useNavigation } from '@react-navigation/native';

function DeepComponent() {
  const navigation = useNavigation();
  // Now you can use navigation
}
```

## Screen Options

### Setting Title
```javascript
// OLD
static navigatorStyle = {
  navBarTitle: 'My Screen'
};

// NEW
// In navigator
<Stack.Screen 
  name="MyScreen" 
  component={MyScreenComponent}
  options={{ title: 'My Screen' }}
/>

// Or dynamically in component
React.useLayoutEffect(() => {
  navigation.setOptions({
    title: 'My Dynamic Title',
  });
}, [navigation]);
```

### Header Buttons
```javascript
// OLD
static navigatorButtons = {
  rightButtons: [{
    title: 'Save',
    id: 'save'
  }]
};

// NEW
React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button onPress={handleSave} title="Save" />
    ),
  });
}, [navigation]);
```

## Redux Integration

```javascript
// Wrap NavigationContainer with Provider
import { Provider } from 'react-redux';
import { store } from './src/store';

const Root = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);
```

## Full Example App Structure

```javascript
// App.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import screens
import HomeScreen from './src/screen/home';
import ProfileScreen from './src/screen/profile';
import DetailScreen from './src/screen/detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'HomeTab' ? 'home' : 'person';
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false, // Hide header for tabs (stacks have their own)
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

export default App;
```

## Testing After Migration

1. Start Metro bundler:
   ```bash
   npm start
   ```

2. Run on Android:
   ```bash
   npm run android
   ```

3. Run on iOS:
   ```bash
   cd ios && pod install && cd ..
   npm run ios
   ```

## Troubleshooting

### Issue: "Invariant Violation: Module AppRegistry is not a registered callable module"
**Solution:** Make sure `import 'react-native-gesture-handler'` is at the very top of `index.js`

### Issue: "Unable to resolve module @react-navigation/..."
**Solution:** Clear cache and reinstall:
```bash
npm start -- --reset-cache
```

### Issue: Reanimated errors
**Solution:** Make sure `react-native-reanimated/plugin` is the last plugin in babel.config.js

## Resources

- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [Stack Navigator](https://reactnavigation.org/docs/stack-navigator)
- [Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator)
- [Migration from v1 to v6](https://reactnavigation.org/docs/migration-guides)

## Your Current Navigation Structure

Based on your `src/screen` folder, you need to migrate:
- `/screen/tabs` - Likely your tab navigator
- `/screen/home` - Home screen
- `/screen/profile` - Profile screen
- `/screen/profile-detail` - Profile detail
- `/screen/message` - Message screen
- `/screen/estate` - Estate screen
- `/screen/market` - Market screen
- `/screen/product` - Product screen
- `/screen/product-publish` - Product publish
- `/screen/publish-home` - Publish home
- `/screen/square` - Square screen
- `/screen/user-login` - Login screen
- `/screen/user-register` - Register screen
- `/screen/village` - Village screen

Recommended structure:
1. Create a main TabNavigator with Home, Message, Square, and Profile tabs
2. Create Stack navigators for each tab with their respective screens
3. Auth screens (login/register) in a separate AuthStack
