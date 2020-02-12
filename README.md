# React Native Base

## TODO list

- [x] Navigation (react-navigation)
- [x] Store (mobx)
- [x] Styles (styled-components)
- [x] Storybook
- [ ] Snapshot tests with Storybook
- [ ] HTTP client (axios, ...)
- [ ] Web engine choice (Hermes beta?)
- [ ] Icon and splashscreen generation
- [ ] Custom font

## Storybook

### Prerequisites

- Make sure that `adb` is on your path.
- You must have Reactotron installed and running.

### How to run storybook

Bind the port 9090:

    adb reverse tcp:9090 tcp:9090

Run the app:

    npm run android

Activate Storybook through Reactotron. Done!

You can also run the story selector in a browser:

    npm run storybook
