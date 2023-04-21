
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
const preloaderId = "preloader"
const preloaderAnimationClasses = 'jumbotron h-100 d-flex align-items-center justify-content-center bg-dark fade-out'

function setFadeIn() {
	setTimeout(setFadeOut, 500)
}

function removePreloaderElement() {
	document.getElementById(preloaderId).remove()
	document.body.className = ''
}

function setFadeOut() {
	document.getElementById(preloaderId).className = preloaderAnimationClasses
	setTimeout(removePreloaderElement, 1300)
}

window.onload = setFadeIn()