/**
 * MediaMatcher class
 *
 * @param query
 * @param callback
 * @constructor
 */
export function MediaMatcher(query, callback) {
	this.query = query;
	this.mediaQueryList = window.matchMedia(this.query);
	this.matches = this.mediaQueryList.matches;

	this.listener = (e) => {
		if (e.matches !== this.matches) {
			this.matches = e.matches;
			callback(this.matches);
		}
	};

	this.start = () => {
		this.matches = this.mediaQueryList.matches;
		this.mediaQueryList.addEventListener('change', this.listener);
	};

	this.stop = () => {
		this.mediaQueryList.removeEventListener('change', this.listener);
	};
}
