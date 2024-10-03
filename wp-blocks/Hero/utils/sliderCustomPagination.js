/**
 * Swiper Pagination Custom Class Constructor
 *
 * @param {number} totalPages
 * @param {boolean} desktop
 */
export class SwiperPaginationCustom {
	constructor (totalPages, desktop = false) {
		this.totalPages = totalPages;
		this.desktop = desktop;
		this.currentPage = 1;
	}

	getCurrentDot () {
		if (this.currentPage >= 3 && this.currentPage < this.totalPages) {
			return 3;
		} else if (this.currentPage === this.totalPages) {
			return 4;
		}
		return this.currentPage;
	}

	render () {
		let output = '';
		if (this.totalPages <= 3) {
			for (let i = 1; i <= this.totalPages; i++) {
				const isActive = i === this.currentPage ? 'swiper-pagination-bullet-active' : '';
				output += `<span class="swiper-pagination-bullet ${isActive}"></span>`;
			}
			return output;
		}
		for (let i = 1; i <= 4; i++) {
			const isActive = i === this.getCurrentDot() ? 'swiper-pagination-bullet-active' : '';
			output += `<span class="swiper-pagination-bullet ${isActive}"></span>`;
		}
		return output;
	}
}

/**
 * Use Custom Pagination
 *
 * @param desktop
 * @param el
 * @returns {{el: string, clickable: boolean, type: string, renderCustom: (function(*, *, *): string)}}
 */
export const useCustomPagination = (desktop = false, el = '.swiper-pagination') => {
	return {
		el: el,
		clickable: false,
		type: 'custom',
		renderCustom: function (swiper, current, total) {
			if (!swiper.paginationCustom) {
				swiper.paginationCustom = new SwiperPaginationCustom(total, desktop);
			}
			swiper.paginationCustom.currentPage = current;
			return swiper.paginationCustom.render();
		},
	};
};
