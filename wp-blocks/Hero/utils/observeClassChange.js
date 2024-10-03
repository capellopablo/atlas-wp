/**
 * Observes changes in the class attribute of an element and executes a callback.
 * @param {HTMLElement} el - Element to observe.
 * @param {Function} callback - Callback to execute when class changes are detected.
 */
export const observeClassChanges = (el, callback) => {
	// Store the last detected class changes.
	const lastChangedClass = {};

	/**
	 * Detects and returns the classes that were added or removed during a mutation.
	 * @param {MutationRecord} mutation - The mutation record.
	 * @returns {Object} - An object containing arrays of added and removed classes.
	 */
	const detectChangedClasses = (mutation) => {
		let oldClasses = mutation.oldValue ? mutation.oldValue.split(/\s+/) : [];
		let newClasses = mutation.target.className.split(/\s+/);

		return {
			added: newClasses.filter(cls => !oldClasses.includes(cls)),
			removed: oldClasses.filter(cls => !newClasses.includes(cls)),
		};
	};

	/**
	 * Handles detected mutations, updates the lastChangedClass, and invokes the callback.
	 * @param {MutationRecord[]} mutations - Array of mutation records.
	 */
	const handleMutation = (mutations) => {
		mutations.forEach(function (mutation) {
			if (mutation.attributeName === 'class') {
				const changedClasses = detectChangedClasses(mutation);
				if (changedClasses.added.length > 0) {
					lastChangedClass.added = changedClasses.added;
				} else if (changedClasses.removed.length > 0) {
					lastChangedClass.removed = changedClasses.removed;
				}
				callback(mutation.target, changedClasses, lastChangedClass);
			}
		});
	};

	// Initialize a MutationObserver to watch for class changes.
	const observer = new MutationObserver(handleMutation);
	const observerConfig = {
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['class'],
	};
	observer.observe(el, observerConfig);

	return observer;
};
