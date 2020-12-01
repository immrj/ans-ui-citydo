# Ans UI

> A Vue-based UI component library for analysys

[Documentation](https://analysys.github.io/ans-ui_docs/#/)

## Installation

```sh
yarn add ans-ui-citydo
# or
npm i ans-ui-citydo
```

## Usage

Import all components

```javascript
import Vue from 'vue'
import AnsUI from 'ans-ui-citydo'
import 'ans-ui/lib/ans-ui-citydo.min.css'

Vue.use(AnsUI)
```

Or import specified component

```javascript
import Vue from 'vue'
import { xButton } from 'ans-ui-citydo'
import 'ans-ui-citydo/lib/ans-ui-citydo.min.css'

Vue.use(xButton)
```

## Development

Install parcel-bundler globally

```sh
yarn global add parcel-bundler
# or
npm i -g parcel-bundler
```

Then

```sh
yarn dev
# or
npm run dev
```

## License

MIT
