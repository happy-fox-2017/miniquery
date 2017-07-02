/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 class SweetSelector{
 	static select(input){
 		return document.querySelector(input);
 	}
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM {
 	static hide(input){
 		return document.querySelector(input).style.visibility = "hidden";
 	}
 	static show(input){
 		return document.querySelector(input).style.visibility = "visible"
 	}
 	static removeClass(kelas, rm){
 		return document.querySelector(kelas).classList.remove(rm);
 	}
 	static addClass(kelas, ad){
 		return document.querySelector(kelas).classList.add(ad);
 	}
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
