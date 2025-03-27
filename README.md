# pls-dropdown - Simple Dropdown Module

A simple JavaScript module for toggling dropdown menus.

## Installation

```sh
Install via npm:
npm install pls-dropdown
```

## Usage

Import and initialize the dropdown:

```js
import dropdown from 'pls-dropdown';

// Toggle dropdown on click
dropdown('menuToggle', 'menuList');
```

### HTML Example:

```html
<button id="menuToggle">Menu</button>
<ul id="menuList" class="hidden">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

### CSS Example:

```css
.hidden {
  display: none;
}
```

## Features

✅ Lightweight and dependency-free
✅ Simple API for easy integration
✅ Works with any HTML structure

## License

MIT
