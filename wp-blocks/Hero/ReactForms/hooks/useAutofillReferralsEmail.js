
/**
 * Custom hook to auto-fill the email field in the Lead Form with a referrals email.
 * If the "Enable autocomplete on email field in Lead Form on this page" setting is enabled in the Referrals Modules options,
 * the hook returns an email address with a timestamp appended to '@aprende.com'.
 *
 * @return {string} - The generated referrals email if the setting is enabled, otherwise empty string.
 */

export const useAutofillReferralsEmail = () => {

	const isReferralsEmail = window?.aprende21?.referrals_email === '1';

	const timestamp = Math.floor(new Date().getTime() / 1000.0);
	const referralsEmail = 'referral_' + timestamp + '@aprende.com';

	if (!isReferralsEmail) {
		return '';
	}

	return referralsEmail;
};


