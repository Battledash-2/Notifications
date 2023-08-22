###### No name yet 😥

# Notifications

Notifications is a customizable, appealing, and stylistic notification system.<br/>
Using [Fontawesome](https://fontawesome.com/), you can use tons of clean icons.

### Usage

To use Notifications, first **import** the stylesheets in the head, like this:

```html
<link rel="stylesheet" href="https://Battledash-2.github.io/Notifications/src/styles.css" />
<!-- or href="https://cdn.jsdelivr.net/gh/Battledash-2/Notifications@latest/src/styles.css" /> -->
```

To send notifications, **import** the file using the ES6 `import` syntax. Remember that you can only import scripts within modules, so on your script tag you have to use `type="module"`!

```html
<script type="module">
	import * as Notifications from 'https://Battledash-2.github.io/Notifications/src/script.js'; // or 'https://cdn.jsdelivr.net/gh/Battledash-2/Notifications@latest/src/script.js';

	Notifications.ShowNotification(null, 'warning', Infinity, 'Hello!', 'INFO');
</script>
```

### API

Notifications will be referred to as `API`.

> ### `API.remove(elm: HTMLElement): void;`

-   Removes notification `elm` from the screen, while still showing the transition out.

> ### `API.ShowNotification(icon = 'fa-regular fa-bell', color = 'info', duration = 5000, text = 'Unknown', caption = 'Unknown', closable = true): HTMLElement;`

-   Creates a new notifications and adds it to the screen.<br/> _Returns the created element._

> ### `API.NotifExists(icon: string, color: string, text: string, caption: string): HTMLElement | null;`

-   Checks if a notifications with the provided properties exists.<br/>_Returns null or the element found._

#### Configuration

> ### `function Max(max?: number): number;`

-   Sets the **max amount of notifications** on the screen at once if provided.<br />_Returns the new max._

> ### `function CounterMax(max?: number): number;`

-   Sets the **max amount** for the small counter if provided.<br />_Returns the new counter max._

    > ### `function Types(typs?: Object): Object;`

-   Sets the default types object if provided. The types object is a set of key/values, and each key is a type of notification. For example:

```js
	info: {
		icon: 'fa-solid fa-circle-info',
		color: '#333333',
		caption: 'INFO',
	},
```

-   . With that, if you pass 'info' into the color parameter of the `API.ShowNotification`, it will set the color to the `color` from the object. If the icon parameter is `null`, it will also use the icon from the object. Same goes for the caption. When color is `null` or `undefined`, it will default to `primary`. <br />_Returns the new colors object._
-   Default types are: 'info', 'primary', 'success', 'error', 'warning' (all types **must** be lowercase)

## You can find an example in `./test/index.html`! 🧪

### Pictures:<br/>

![example picture](https://raw.githubusercontent.com/Battledash-2/Notifications/c49ee8d31e883fd284072598e3728303b966e133/screenshots/screenshot0.png)<br/>
![example picture](https://raw.githubusercontent.com/Battledash-2/Notifications/c49ee8d31e883fd284072598e3728303b966e133/screenshots/screenshot1.png)
