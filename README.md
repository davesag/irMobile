# ir-app

An iOS and Android mobile app that uses the [ir-api](https://github.com/davesag/ir-api) to interact with Independent Reserve

## Branches

<!-- prettier-ignore -->
| Branch    | Tests | Code Coverage | Comments                  |
| --------- | ----- | ------------- | ------------------------- |
| `develop` |       |               | Work in progress          |
| `master`  |       |               | Latest Production Release |

## Links

- [ir-api](https://github.com/davesag/ir-api)

## Development

To set up your local development environment refer to the official doc:
https://facebook.github.io/react-native/docs/getting-started

### Environment Variables

See `.env.develop` for development defaults.

| Variable    | Notes                                                        |
| ----------- | ------------------------------------------------------------ |
| `STORYBOOK` | Use storybook. You'll want this to be `true` for development |

### Prerequisites

- [NodeJS](htps://nodejs.org), version 10.16.0 (LTS) or better. (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
- `react-native-cli`

  ```sh
  yarn global add react-native-cli
  ```

### Installing dependencies

```sh
yarn install
```

### Running Tests

```sh
yarn test
```

### Running Linter

```sh
yarn lint
```

### Run Metro Builder

```sh
yarn start
```

### Run the app

Make sure you have Xcode and Android studio installed with appropriate SDK

#### Run in the iOS Simulator

Ref: [facebook.github.io/react-native/docs/getting-started#xcode](https://facebook.github.io/react-native/docs/getting-started#xcode)

```
yarn ios
```

**TROUBLESHOOTING NOTE**: If you are having trouble bundling the app for the first time on ios delete `/leflair-app/ios/build`
and rerun `yarn ios`

#### Run in Android Studio

Ref: [facebook.github.io/react-native/docs/getting-started#1-install-android-studio](https://facebook.github.io/react-native/docs/getting-started#1-install-android-studio)

```sh
yarn android
```

### Devices

The Android emulator and iOS simulator are great for testing however features should be tested on physical devices prior to issuing a merge request.

_add instructions for deploying to actual devices_

### Redux dev tools

To view the state in the app install [the Redux dev tools Chrome plugin](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph/related).

## Deployment

_to be completed_

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
