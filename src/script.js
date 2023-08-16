// when multiple of the same notifications are made, it deletes the old one and counts up the new one
// false = disabled
// true = enabled
// will be ignored if also declared within config.lua
const COUNTER_ATTR_NAME = 'data-amount'; // DO NOT CHANGE!
let COUNTER = true;

let COUNTER_MAX = 99;
let MAX = 4;

export function Max(max) {
	if (max != null) MAX = max;
	return MAX;
}
export function CounterMax(max) {
	if (max != null) COUNTER_MAX = max;
	return COUNTER_MAX;
}

let icons = {
	info: 'fa-solid fa-circle-info',
	primary: 'fa-solid fa-circle-info',
	success: 'fa-solid fa-check',
	error: 'fa-solid fa-triangle-exclamation',
	warning: 'fa-solid fa-triangle-exclamation',
};
let colors = {
	info: '#333333',
	primary: '#333333',
	success: '#72cf30',
	error: '#d44c31',
	warning: '#d9d74c',
};

export function Colors(clrs) {
	if (clrs != null) colors = clrs;
	return colors;
}
export function Icons(icns) {
	if (icns != null) icons = icns;
	return icons;
}

export function Counter(ctr) {
	if (ctr != null) COUNTER = ctr;
	return COUNTER;
}

/**
 * @param {HTMLElement} elm
 * @param {string} classList
 */
function $c(elm, classList = '') {
	const e = document.createElement(elm);
	e.className = classList;
	return e;
}

const cont = document.querySelector('#__notif-container') || $c('div');
cont.id = '__notif-container';
document.body.appendChild(cont);

/**
 * @param {HTMLElement} elm
 */
export function remove(elm) {
	elm.classList.remove('active');
	setTimeout(() => elm.remove(), (parseFloat(getComputedStyle(elm).transitionDuration) * 1000) / 1.333333333);
}
/**
 * @param {HTMLElement} elm
 * @param {number} duration
 * @param {Function?} cb
 */
function setupForRemoval(elm, duration, cb) {
	setTimeout(() => {
		if (elm.parentNode) {
			remove(elm);
			if (cb && typeof cb === 'function') cb();
		}
	}, duration);
}

/**
 * @param {"info"|"primary"|"success"|"warning"|"error"} icon
 * @param {"info"|"primary"|"success"|"warning"|"error"} color
 * @param {number|Infinity} duration
 * @param {string} text
 * @param {string} caption
 * @param {boolean} closable
 * @returns {HTMLElement}
 */
export function ShowNotification(icon = 'fa-regular fa-bell', color = 'info', duration = 5000, text = 'Unknown', caption = 'Unknown', closable = true) {
	if (colors.hasOwnProperty(color)) {
		icon = icons[color] || icon;
		color = colors[color] || color;
	}

	let notif = $c('div', 'notif');
	notif.style.backgroundColor = color;
	notif.style.boxShadow = '0 0 1.563rem 0 ' + color;

	if (COUNTER) {
		const notifExists = NotifExists(icon, notif.style.backgroundColor, text, caption);
		if (notifExists && cont.firstElementChild !== notifExists) {
			notif.setAttribute(COUNTER_ATTR_NAME, Math.min(notifExists.hasAttribute(COUNTER_ATTR_NAME) ? parseInt(notifExists.getAttribute(COUNTER_ATTR_NAME)) + 1 : 2, COUNTER_MAX));
			remove(notifExists);
		} else if (notifExists && cont.firstElementChild === notifExists) {
			notifExists.setAttribute(COUNTER_ATTR_NAME, Math.min(notifExists.hasAttribute(COUNTER_ATTR_NAME) ? parseInt(notifExists.getAttribute(COUNTER_ATTR_NAME)) + 1 : 2, COUNTER_MAX));
			return notifExists;
		}
	}

	if (cont.childElementCount >= MAX) {
		if (cont.lastElementChild) {
			remove(cont.lastElementChild);
		}
	}

	let h3 = $c('h3');
	if (icon) {
		let ic = $c('span', icon);
		h3.appendChild(ic);
	}
	h3.append(caption);
	notif.appendChild(h3);

	let p = $c('p');
	p.textContent = text;

	notif.appendChild(p);

	cont.prepend(notif);
	setTimeout(() => notif.classList.add('active'), 15);

	if (duration !== Infinity && duration >= 0) setupForRemoval(notif, duration <= 0 ? 1000 : duration);

	if (closable) {
		notif.classList.add('clickable');
		notif.addEventListener('click', (_e) => {
			remove(notif);
		});
	}

	return notif;
}

/** @returns {HTMLElement?} */
export function NotifExists(icon, color, text, caption) {
	let res = null;
	Array.from(cont.querySelectorAll('.notif.active')).some((notif) => {
		if (!notif.style.backgroundColor.includes(color)) return;
		const head = notif.querySelector('h3');
		const iicon = head.querySelector('span');
		if ((icon && !iicon) || (!icon && iicon)) return;
		if (icon && iicon.className !== icon) return;
		if (head.innerText.toLowerCase() !== caption.toLowerCase()) return;
		if (notif.querySelector('p').innerText.toLowerCase() !== text.toLowerCase()) return;
		res = notif;
		return true;
	});
	return res;
}
