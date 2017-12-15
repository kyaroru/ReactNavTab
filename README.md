# ReactNavTab

A simple example of using TabNavigator with Redux Integration in React Navigation

It consists of a fake login page (without tab) and also other pages that can be seen only after login (with tab)

Navigation Structure
```
-StackNavigator (without token render this)
   -LoginScreen
-DrawerNavigator (with token render this)
    -TabOne
    -TabTwo
```

**Demo**
![demo](http://g.recordit.co/wbSU0QE1T2.gif)

**To run the app**
```
git clone https://github.com/kyaroru/ReactNavTab
cd ReactNavTab
npm i
react-native run-ios
react-native run-android
```

**For example with DrawerNavigator (With Redux)

Refer to [ReactNavDrawerRedux](https://github.com/kyaroru/ReactNavDrawerRedux)