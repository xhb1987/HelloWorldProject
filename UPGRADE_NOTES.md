# React Native Upgrade Notes

## Upgrade Summary
Upgraded from React Native 0.55.2 (2018) to React Native 0.76.1 (2024)

## Major Changes

### Dependencies Upgraded
- **React**: 16.3.1 → 18.3.1
- **React Native**: 0.55.2 → 0.76.1
- **Redux**: 3.7.2 → 5.0.1
- **React Redux**: 5.0.7 → 9.1.2
- **Socket.io-client**: 2.1.1 → 4.8.0

### Navigation
- Replaced `react-native-navigation` v1 with `@react-navigation/native` v6
- Added `@react-navigation/stack` and `@react-navigation/bottom-tabs`
- Added required dependencies: `react-native-screens`, `react-native-safe-area-context`, `react-native-gesture-handler`, `react-native-reanimated`

### Deprecated Packages Removed
- `babel-preset-react-native-stage-0` - no longer needed
- `react-native-cached-image` - deprecated
- `react-native-camera-roll-picker` - deprecated
- `react-native-clean-form` - deprecated
- `react-native-css` - deprecated
- `react-native-fullwidth-image` - deprecated
- `react-native-nav` - deprecated
- `react-native-navigation` - replaced with @react-navigation
- `react-native-scrollable-tab-view` - deprecated
- `react-native-fetch-blob` - removed from settings

### Android Configuration
- **Gradle**: 4.4 → 8.8
- **Android Gradle Plugin**: 3.1.2 → 8.3.2
- **Compile SDK**: 27 → 35
- **Target SDK**: 22 → 35
- **Min SDK**: 16 → 24
- **Build Tools**: 27 → 35.0.0
- Added Kotlin support
- Enabled Hermes by default
- Enabled AndroidX
- Updated to use new React Native Gradle Plugin

### Configuration Files
- Created `babel.config.js` with module resolver
- Created `metro.config.js` for Metro bundler
- Created `.prettierrc.js` for code formatting
- Updated `android/build.gradle`
- Updated `android/app/build.gradle`
- Updated `android/gradle.properties`
- Updated `android/settings.gradle`

## Breaking Changes to Address

### 1. Navigation Migration
The navigation system has completely changed. You need to:
- Replace all `react-native-navigation` imports with `@react-navigation`
- Update screen registration
- Update navigation calls
- Update tab bars and stacks

**Example migration:**
```javascript
// OLD (react-native-navigation v1)
import { Navigation } from 'react-native-navigation';
Navigation.registerComponent('MyScreen', () => MyScreen);

// NEW (@react-navigation v6)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
```

### 2. Component Lifecycle
If using deprecated lifecycle methods, update to:
- `componentWillMount` → `componentDidMount` or `constructor`
- `componentWillReceiveProps` → `componentDidUpdate` or `getDerivedStateFromProps`
- `componentWillUpdate` → `componentDidUpdate`

### 3. PropTypes
`PropTypes` is now a separate package (already added to dependencies)

### 4. Redux
Redux v5 has some changes:
- `createStore` is deprecated, use `configureStore` from `@reduxjs/toolkit` (recommended)
- TypeScript types improved

### 5. React Native Elements
Updated to v3.4.3 - check their migration guide for any breaking changes

## Next Steps

1. **Install Dependencies:**
   ```bash
   rm -rf node_modules
   npm install
   # or
   yarn install
   ```

2. **Install Pods (iOS):**
   ```bash
   cd ios
   pod install
   cd ..
   ```

3. **Update Native Code:**
   - Check `MainApplication.java` for React Native initialization
   - Update iOS project if needed
   - Configure `react-native-reanimated` in `babel.config.js` (already done)

4. **Migrate Navigation:**
   - Update all navigation-related code
   - See: https://reactnavigation.org/docs/getting-started

5. **Test:**
   ```bash
   npm start
   npm run android
   npm run ios
   ```

6. **Handle Deprecated Components:**
   - Find alternatives for removed packages
   - Update component usage

## Removed/Deprecated Packages Needing Action

1. **react-native-cached-image** → Use `react-native-fast-image` or built-in `Image`
2. **react-native-navigation** → Migrated to `@react-navigation`
3. **react-native-camera-roll-picker** → Use `@react-native-camera-roll/camera-roll`
4. **react-native-scrollable-tab-view** → Use `react-native-tab-view` (already added)

## Resources

- React Native Upgrade Helper: https://react-native-community.github.io/upgrade-helper/
- React Navigation Docs: https://reactnavigation.org/
- React 18 Upgrade Guide: https://react.dev/blog/2022/03/08/react-18-upgrade-guide

## Known Issues

1. Some deprecated packages may need to be replaced
2. Navigation code needs complete rewrite
3. Check for any custom native modules compatibility
4. Android build may need additional configuration for specific libraries
5. iOS may need updated Podfile and pod installation

## Backup

A backup branch `backup-pre-upgrade` was created before the upgrade.
To rollback: `git checkout backup-pre-upgrade`
