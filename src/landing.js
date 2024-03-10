import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import firebaseConfig from '../src/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Hello world, we are online!");

function startPreloaderAnimation() {
	const preloaderId = "preloader";
	const preloaderAnimationClasses = 'jumbotron h-100 d-flex align-items-center justify-content-center bg-black fade-out';
	setTimeout(() => {
		document.getElementById(preloaderId).className = preloaderAnimationClasses;
		setTimeout(() => {
			document.getElementById(preloaderId).remove();
			document.body.className = '';
		}, 1300);
	}, 500);
}

window.onload = startPreloaderAnimation();

window.logAnalyticsEvent = function (event) {
	logEvent(analytics, event);
};
