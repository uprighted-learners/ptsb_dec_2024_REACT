

## Tailwind CSS Installation

**Documentation**:  
[Installing Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite)

1. Install Tailwind and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

2. Add the `@tailwindcss/vite` plugin to your Vite configuration (`vite.config.js`):

```js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

3. In your `index.css` (or equivalent), add:

```css
@import 'tailwindcss';
```

---

### Test Tailwind Setup

Add this HTML to test:

```html
<h1 class="text-3xl font-bold underline text-primary">Hello world!</h1>
```

---

## DaisyUI Installation

**Documentation**:  
[Startup](https://daisyui.com/docs/install/vite/)
[Themes](https://daisyui.com/docs/themes/)  
[Components](https://daisyui.com/components)

1. Install DaisyUI:

```bash
npm install daisyui@latest
```

2. In your `index.css`, add the following:

```css
@import 'tailwindcss'; /* Already added */
@plugin 'daisyui';     /* Add this new line */
```

---

## Font Awesome Installation

**Documentation**:  
[Font Awesome Free Icons](https://fontawesome.com/search?ic=free)

1. Install the required Font Awesome packages:

```bash
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

2. Usage example:

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faCoffee} />;
```

