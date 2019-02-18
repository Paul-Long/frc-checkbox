<p align="center">
  <a href="https://github.com/Paul-Long/frc-checkbox">
    <img width="200" src="http://houym-1254119810.picsh.myqcloud.com/logo-200_150.png">
  </a>
</p>

<h1 align="center">Checkbox</h1>

<div align="center">

React 表格组件，支持多数据首次快速渲染

[![npm package](https://img.shields.io/npm/v/frc-checkbox.svg?style=flat)](https://www.npmjs.com/package/frc-checkbox)
[![NPM downloads](http://img.shields.io/npm/dm/frc-checkbox.svg?style=flat-square)](http://npmjs.com/frc-checkbox)
[![Dependencies](https://img.shields.io/david/paul-long/frc-checkbox.svg?style=flat-square)](https://david-dm.org/paul-long/frc-checkbox)
[![DevDependencies](https://img.shields.io/david/dev/paul-long/frc-checkbox.svg?style=flat-square)](https://david-dm.org/paul-long/frc-checkbox?type=dev)
[![Gitter](https://img.shields.io/gitter/room/paul-long/frc-checkbox.svg?style=flat-square)](https://gitter.im/paul-long/paul-long?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Codecov](https://img.shields.io/coveralls/github/paul-long/frc-checkbox.svg?style=flat-square)](https://codecov.io/gh/paul-long/frc-checkbox/branch/master)
[![Issues need help](https://flat.badgen.net/github/label-issues/paul-long/frc-checkbox/help%20wanted/open)](https://github.com/paul-long/frc-checkbox/issues?q=label%3A%22help+wanted%22)

</div>

# 在线 Demo

https://paul-long.github.io/react-components/#/checkbox

# 安装

[![rc-select](https://nodei.co/npm/frc-checkbox.png)](https://npmjs.org/package/frc-checkbox)

```bash
npm install frc-checkbox --save-dev
```

# Props

| props             | describe              | type                                    | default value |
| ----------------- | --------------------- | --------------------------------------- | ------------- |
| checked           | checked               | Boolean                                 | false         |
| children          | text                  | show text                               |               |
| onChange          | listen change         | Function                                | -             |
| fixed             | fixed column          | String(`left` or `right`)               |               |
| disabled          | click enabled         | Boolean                                 | false         |
| style             | style                 | Object                                  |               |
| size              | setting size          | String(`default` or `small` or `large`) | `default`     |
| indeterminateType | indeterminate type    | String(`square` or `line`)              | `square`      |
| indeterminate     | indeterminate enabled | Boolean                                 | false         |

# 示例

```jsx harmony
import React from 'react';
import Checkbox from 'frc-checkbox';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Checkbox checked={true}>Checkbox</Checkbox>
      </div>
    );
  }
}
```
