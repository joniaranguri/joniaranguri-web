
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebaseConfig from '../src/firebaseConfig'

initializeApp(firebaseConfig);

console.log("Hello world we are online!")

function startPreloaderAnimation() {
	const preloaderId = "preloader"
	const preloaderAnimationClasses = 'jumbotron h-100 d-flex align-items-center justify-content-center bg-black fade-out'
	setTimeout(() => {
		document.getElementById(preloaderId).className = preloaderAnimationClasses
		setTimeout(() => {
			document.getElementById(preloaderId).remove()
			document.body.className = ''
		}, 1300)
	}, 500)
}

window.onload = startPreloaderAnimation()