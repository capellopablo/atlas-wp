import { useState } from "react";

/**
 * Custom hook for managing modal state.
 * @returns {Object} Modal state and handlers.
 */
export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	/**
	 * Toggles the modal's open state.
	 */
	const toggleModal = () => setIsOpen((prevState) => !prevState);

	return { isOpen, toggleModal };
};
