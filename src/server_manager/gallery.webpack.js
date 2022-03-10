/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2020 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Webpack config to run the Outline Manager on the browser.

const path = require('path');
const {makeConfig} = require('./base.webpack.js');

module.exports = makeConfig({
  main: path.resolve(__dirname, './web_app/gallery_app/main.ts'),
  target: 'web',
  defaultMode: 'development',
  template: path.resolve(__dirname, './web_app/gallery_app/index.html'),
});
