# irMobile

An iOS app that uses the [ir-api](https://github.com/davesag/ir-api) to interact with [Independent Reserve](https://www.independentreserve.com/invite/AJNEHL).

**Note** this is a 3rd Party app and is not developed by, or supported by Independent Reserve.

## Features

The initial <acronym title="minimum viable product">MVP</acronym> version of the app allows an Independent Reserve member to:

1. Add their `apiKey` and `apiSecret`
2. Check the status of their coin holdings including current prices and an overall balance.

See [milestone/1](https://github.com/davesag/irMobile/milestone/1) for specifics.

## Links

- [ir-api](https://github.com/davesag/ir-api)

## Project Status

[![Greenkeeper badge](https://badges.greenkeeper.io/davesag/irMobile.svg)](https://greenkeeper.io/)

This project is under active development and is being used as a learning project to teach myself React Native development.

- See [the project board](https://github.com/davesag/ir-app/projects/1) for work in progress
- See [the issues list](https://github.com/davesag/ir-app/issues) to report issues

## Development

To set up your local development environment refer to the official doc:
https://facebook.github.io/react-native/docs/getting-started

### React Native Version

This app is currently built with React Native version 0.59.10.

- [react-native/docs/0.59](https://facebook.github.io/react-native/docs/0.59/getting-started)

I have tried to upgrade it to React Native 0.60.0 but that caused too many problems.

Under React Native 0.60.0 we see the following

- tests never complete (jest hangs)
- code does deploy to the iOS simulator
- code deploys to the phone with `development` targets turned on, but with many warnings, and very slowly.
- code _does not_ deploy to the phone with `release` targets turned on.

**Conclusion**: It's far too early to upgrade to React Native 0.60.0

This will be revisited in [issues/40](https://github.com/davesag/irMobile/issues/40).

### Branches

<!-- prettier-ignore -->
| Branch    | Tests | Code Coverage | Comments                  |
| --------- | ----- | ------------- | ------------------------- |
| `develop` | [![CircleCI](https://circleci.com/gh/davesag/irMobile/tree/develop.svg?style=svg)](https://circleci.com/gh/davesag/irMobile/tree/develop) | [![codecov](https://codecov.io/gh/davesag/irMobile/branch/develop/graph/badge.svg)](https://codecov.io/gh/davesag/irMobile) | Work in progress          |
| `master`  | [![CircleCI](https://circleci.com/gh/davesag/irMobile/tree/master.svg?style=svg)](https://circleci.com/gh/davesag/irMobile/tree/master) | [![codecov](https://codecov.io/gh/davesag/irMobile/branch/master/graph/badge.svg)](https://codecov.io/gh/davesag/irMobile) | Latest Production Release |

### Prerequisites

- [`NodeJS`](https://nodejs.org) version 10.16.0 (LTS) or better. I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions.

  ```sh
  brew install nvm
  ```

- [`yarn`](https://yarnpkg.com) instead of `npm` (typical for React Native builds.)

  ```sh
  brew install yarn
  ```

- [`react-native-cli`](https://github.com/react-native-community/cli) (version 1.3.0) — see note above about upgrading React Native to 0.60.0.

  ```sh
  yarn global add react-native-cli@1.3.0
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

### Run the app

Make sure you have Xcode and Android studio installed with appropriate SDK

#### Run in the iOS Simulator

Ref: [facebook.github.io/react-native/docs/getting-started#xcode](https://facebook.github.io/react-native/docs/getting-started#xcode)

```
yarn ios
```

**TROUBLESHOOTING NOTE**: If you are having trouble bundling the app for the first time on ios delete `/ios/build`
and rerun `yarn ios`

#### Run in Android Studio

Ref: [facebook.github.io/react-native/docs/getting-started#1-install-android-studio](https://facebook.github.io/react-native/docs/getting-started#1-install-android-studio)

```sh
yarn android
```

### Devices

The Android emulator and iOS simulator are great for testing however features should be tested on physical devices prior to issuing a merge request.

- [Official Deployment Instructions](https://facebook.github.io/react-native/docs/0.59/running-on-device)

### Redux dev tools

To view the state in the app install [the Redux dev tools Chrome plugin](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph/related).

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).

### Other ways to contribute

- Join Independent Reserve using my referral code [`www.independentreserve.com/invite/AJNEHL`](https://www.independentreserve.com/invite/AJNEHL)
- Send me Ether. `0xbd64860033c15c0af5df5a886b997f63a7723d5a`
- Send me Bitcoin. `1HiqYdJZGmGDaj1ryKjEjaB2RRZuZebZxZ`
