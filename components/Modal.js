import React from "react";
import Icon from '@aprende-com/design-system/components/Icon';
import '/styles/design-system/components/modal.scss';

export default function Modal({ isOpen, onClose, children }) {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="c-modal__overlay" onClick={onClose}>
			<div className="c-modal__content" onClick={(e) => e.stopPropagation()}>
				<button className="c-modal__content__button" onClick={(e) => {e.stopPropagation(); onClose();} }>
					<Icon icon="close"/>
				</button>
					{children}
			</div>
		</div>
	);
}
