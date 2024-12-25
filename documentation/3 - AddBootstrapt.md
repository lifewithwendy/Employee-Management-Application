# install using npm
```bash
npm install react-bootstrap bootstrap

```

## The following line can be included in your src/index.js or App.js file
```bash 
import 'bootstrap/dist/css/bootstrap.min.css';
```

###  for routing in react use react router dom 
install it add it to main.jsx
```bash
npm i react-router-dom
```
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```


