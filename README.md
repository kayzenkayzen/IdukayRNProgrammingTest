# Idukay RN Programming Test

1. **Author**: Matias Gabriel De Marines
2. **Date**: 29/3/2021
3. **Skype**: matiasgdemarines ( If you have any problem, you can contact me here! )

## Environment Requirements

This project requires node version >=12 
You can use [NVM](https://github.com/nvm-sh/nvm) to manage differents versions of node

## Getting started

1. **Clone the project**

Run these commands on the project root folder

2. **Install node_modules**: `yarn install`
3. **Install IOS pod dependencies**: `cd ios && pod install --repo-update && cd ..`

#### Run the app on IOS

Run the below command on the project root folder

```
npx react-native run-ios
```

If you want to start the app from XCODE open the project using `IdukayRNProgramming.xcworkspace` from `IdukayRNProgramming/ios/` folder
You can just double click on this file and XCODE will open with the project

#### Run the app on ANDROID

Run the below command on the project root folder

```
npx react-native run-android
```

The app will be open on the detected device, you can use [Genymotion Emulator ( Personal Edition )](https://www.genymotion.com/fun-zone/) for better performance than Android Studio's emulator.
   

## Run Test  

```
yarn test
```

Additional to the unit tests, I'm using snapshots to get more control when any code modification reflects UI changes. You will be alerted when any snapshot doesn't match and will show you the differences.
If you want to confirm the changes and update the snapshots to pass the tests run:

```
yarn test -u
```

## Debug the App ( Including the Redux State )

The app is configured for [React Native Debugger](https://github.com/jhen0409/react-native-debugger)


## Other Considerations

#### Prettier

I'm using Prettier to help us to use code conventions defined by eslint

To run Prettier on saving the file in VSC you need to save the project as a workspace and put this code on its file

```
"settings": {
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#### Husky

I'm using Husky to prevent commit code that doesn't pass required tests or doesn't apply eslint conventions

#### Typescript

I'm using typescript to type-check my code. Additionally, I liked to use absolute paths. So I use tsconfig to keep the Go to Definition capability. For VSC it works well, but it might require some additional configuration in other IDEs

#### Redux

I'm using redux as a state manager for this project

#### About the architectural design

it's implemented in such a way that the addition or elimination of one or more types of potions does not require major changes
You can add or remove potion types in `src/constants`. All the code and all the tests should continue to work the same way

```
// Define the potions
const POTIONS: IPotion[] = [
  { id: 'red', rgb: '#BF2137', label: 'Poción Roja' },
  { id: 'blue', rgb: '#0479F1', label: 'Poción Azul' },
  { id: 'green', rgb: '#009E2F', label: 'Poción Verde' },
  { id: 'yellow', rgb: '#E4B80A', label: 'Poción Amarilla' },
  { id: 'gray', rgb: '#303030', label: 'Poción Gris' },
];

// Define the damage percentage
// for combinations length.
// The key is the length of the combination
// and the value is the percentage of damage
// for this combination length
const COMBINATION_DAMAGE_PERCENTAGE: IAttackDamagePercentage = {
  1: 3,
  2: 5,
  3: 10,
  4: 20,
  5: 25,
};
```

IMPORTANT: the amount of POTIONS must match the amount of COMBINATION_DAMAGE_PERCENTAGE

