const data = [
  {
    key: '01',
    question: 'Как установить AntDesign',
    answer: '<h3><span>Using npm or yarn</span></h3><p><strong>Recommend using npm or yarn to install</strong>, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.</p><pre><code>$ <span>npm</span> <span>install</span> antd</code></pre><pre><code>$ yarn add antd</code></pre><p>If you are in a bad network environment, you can try other registries and tools like <a href="https://github.com/cnpm/cnpm">cnpm</a>.</p>'
  },
  {
    key: '02',
    question: 'Как создать приложение React',
    answer: '<h3><span>Quick Start</span></h3><p><strong>Create React App is an officially supported way to create single-page React applications. </strong>It offers a modern build setup with no configuration.</p><pre><code>$ npx create-react-app my-app</code></pre><pre><code>$ cd my-app</code></pre><pre><code>$ npm start</code></pre><blockquote><p>If you\'ve previously installed <code>create-react-app</code> globally via <code>npm install -g create-react-app</code>, we recommend you uninstall the package using <code>npm uninstall -g create-react-app</code> or <code>yarn global remove create-react-app</code> to ensure that <code>npx</code> always uses the latest version.</p></blockquote>'
  },
  {
    key: '03',
    question: 'Как установить node.js на Windows',
    answer: '<h3><span>Windows</span></h3><p>The <code>nvs</code> version manager is cross-platform and can be used on Windows, macOS, and Unix-like systems</p><p>To install <code>nvs</code> on Windows go to the <a href="https://github.com/jasongin/nvs/releases">release page</a> here and download the MSI installer file of the latest release.</p><p>You can also use <code>chocolatey</code> to install it:</p><pre class="language-bash"><code class="language-bash">choco <span class="token function">install</span> nvs </code></pre>'
  },
  {
    key: '04',
    question: 'Как задеплоить приложение React на GitHub Pages',
    answer: '<h3><strong>Step 1:</strong> Add <code>homepage</code> to <code>package.json</code></h3><p><strong>The step below is important!</strong></p><p><code>"homepage": "https://myusername.github.io/my-app",</code></p><h3><strong>Step 2:</strong> Install <code>gh-pages</code> and add <code>deploy</code> to <code>scripts</code> in <code>package.json</code></h3><p><code>npm install --save gh-pages</code></p><p><code>"scripts": {<br>+   "predeploy": "npm run build",<br>+   "deploy": "gh-pages -d build",<br>"start": "react-scripts start",<br>"build": "react-scripts build",<br>}</code></p><p>Now, whenever you run <code>npm run build</code>, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.</p><h3><strong>Step 3:</strong> Deploy the site by running <code>npm run deploy</code></h3>'
  },
  {
    key: '05',
    question: 'Как удалить commit из GitHub',
    answer: '<h3><strong>Step 1:</strong> Get the <strong>hash code</strong> of the commit we want to return to.<h3><strong>Step 2:</strong> Go to the repository folder and write to the console:</h3><p><code>$ git reset --hard <strong>hash code</strong></code></p><p><code>$ git push --force</code></p>'
  },
  {
    key: '06',
    question: 'Какие преимущества использования AntDesign',
    answer: '<h3>Features</h3><p>🌈 Enterprise-class UI designed for web applications.</p><p>📦 A set of high-quality React components out of the box.</p><p>🛡 Written in TypeScript with predictable static types.</p><p>⚙️ Whole package of design resources and development tools.</p><p>🌍 Internationalization support for dozens of languages.</p><p>🎨 Powerful theme customization in every detail.</p></ul>'
  },
  {
    key: '07',
    question: 'Как использовать компоненты AntDesign в React',
    answer: '<h3>Usage</h3><pre><code>import { DatePicker } from "antd";</code></pre><pre><code>ReactDOM.render(<DatePicker />, mountNode);</code></pre><p>And import stylesheets manually:</p><pre><code>import "antd/dist/antd.css";</code></pre><pre><code>// or "antd/dist/antd.less"</code></pre><p><strong>Tip (not in official doc): </strong>if you got the error when compiling try to use:</p><pre><code>import "antd/dist/antd.min.css";</code></pre>'
  }
]


export default data
