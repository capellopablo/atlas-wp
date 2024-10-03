/**
 * Observes child changes in a container and executes a callback when a specific child is added.
 * @param {HTMLElement} container - Container element to observe.
 * @param {string} selector - Selector to match against added nodes.
 * @param {Function} callback - Callback to execute when a matching child is added.
 * @returns {MutationObserver} - The MutationObserver instance for potential cleanup.
 */
export const observeContainerChanges = (container, selector, callback) => {
	const handleContainerChanges = (mutations) => {
		for (let mutation of mutations) {
			if (mutation.addedNodes) {
				for (let node of mutation.addedNodes) {
					if (node.matches && node.matches(selector)) {
						callback(node);
					}
				}
			}
		}
	};

	const observer = new MutationObserver(handleContainerChanges);
	observer.observe(container, {childList: true});

	return observer;
};

/**
 * Observes child and subtree changes in a container and executes a callback when a specific child or subtree node is added.
 * @param {HTMLElement} container - Container element to observe.
 * @param {string} selector - Selector to match against added nodes.
 * @param {Function} callback - Callback to execute when a matching child or subtree node is added.
 * @returns {MutationObserver} - The MutationObserver instance for potential cleanup.
 */
export const observeContainerAndSubtreeChanges = (container, selector, callback) => {
	const handleContainerChanges = (mutations) => {
		for (let mutation of mutations) {
			if (mutation.addedNodes) {
				for (let node of mutation.addedNodes) {
					// Check the node itself
					if (node.matches && node.matches(selector)) {
						callback(node);
					}

					// Check subtree nodes
					if (node.querySelectorAll) {
						const matchingSubNodes = node.querySelectorAll(selector);
						matchingSubNodes.forEach(subNode => callback(subNode));
					}
				}
			}
		}
	};

	const observer = new MutationObserver(handleContainerChanges);
	observer.observe(container, {childList: true, subtree: true});

	return observer;
};

/**
 * Observes content changes in an element and executes a callback when the content changes.
 * @param {HTMLElement} targetElement - Element to observe.
 * @param {Function} callback - Callback to execute when content changes.
 * @returns {MutationObserver} - The MutationObserver instance for potential cleanup.
 */
export const observeContentChanges = (targetElement, callback) => {
	const handleContentChanges = (mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'childList') {
				callback(targetElement);
			}
		});
	};

	const config = { attributes: false, childList: true, characterData: false };
	const observer = new MutationObserver(handleContentChanges);

	observer.observe(targetElement, config);

	return observer;
};
