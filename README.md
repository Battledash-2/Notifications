###### No name yet 😥

# Notifications

Notifications is a customizable, appealing, and stylistic notification system.<br/>
Using [Fontawesome](https://fontawesome.com/), you can use tons of clean icons.

### Usage

To use Notifications, first **import** the stylesheets in the head, like this:

```html
<link rel="stylesheet" href="?" />
```

To send notifications, **import** the file using the ES6 `import` syntax. Remember that you can only import scripts within modules, so on your script tag you have to use `type="module"`!

```html
<script type="module">
	import * as Notifications from '?';

	Notifications.ShowNotification(null, 'warning', Infinity, 'Hello!', 'INFO');
</script>
```

### API

Notifications will be referred to as `API`.

> ### `API.remove(elm: HTMLElement): void;`

-   Removes notification `elm` from the screen, while still showing the transition out.

> ### `API.ShowNotification(icon = 'fa-regular fa-bell', color = 'info', duration = 5000, text = 'Unknown', caption = 'Unknown', closable = true): HTMLElement;`

-   Creates a new notifications and adds it to the screen.<br/> _Returns the created element._

> ### `API.NotifExists(icon: string, color: string, text: string, caption: string)`

-   Checks if a notifications with the provided properties exists.<br/>_Returns null or the element found._

#### Configuration

> ### `function Max(max?: number)`

-   Sets the **max amount of notifications** on the screen at once if provided.<br />_Returns the new max._

> ### `function CounterMax(max?: number)`

-   Sets the **max amount** for the small counter if provided.<br />_Returns the new counter max._

> ### `function Icons(icns?: Object)`

-   Sets the default icons object if provided. If the key is also in **Colors** and the _color_ for `API.ShowNotification` is a property of **Colors**, it will set the icon to a the corresponding value here.<br />_Returns the new icons object._

> ### `function Colors(clrs?: Object)`

-   Sets the default colors object if provided. If colors has a property, it should also be in `Icons`. If you provide a key of **Colors** into the _color_ for `API.ShowNotification`, it will set it to the value from this object, along with setting the Icon to the value from the `Icons` object.<br />_Returns the new colors object._

## You can find an example in `./test/index.html`! 🧪

### Pictures:<br/>

![example picture](https://github.com/Battledash-2/Notifications/blob/c49ee8d31e883fd284072598e3728303b966e133/screenshots/screenshot0.png)<br/>
![example picture](https://github.com/Battledash-2/Notifications/blob/c49ee8d31e883fd284072598e3728303b966e133/screenshots/screenshot1.png)
