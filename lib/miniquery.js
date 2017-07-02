/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
      class SweetSelector {
           static select (input) {
                return document.querySelector(input);
           }
      }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
      class DOM {
           static hide(input) {
                let selector = document.querySelector(input)
                return selector.style.visibility = "hidden";
           }

           static show(input) {
                let selector = document.querySelector(input)
                return selector.style.visibility = "show";
           }

           static removeClass(input, rmclasName) {
                let selector = document.querySelector(input)
                return selector.classList.remove( rmclasName );

           }

           static addClass(input, add) {
                let selector = document.querySelector(input)
                return selector.classList.add(add);

           }
      }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
      class EventDispatcher {
           static on (input, action, callback) {
               //  console.log('input '+input);
                return document.querySelector(input).addEventListener(action, callback);
           }

               static triggerEvent(el, eventName, options) {
                var event;
                if (window.CustomEvent) {
                  event = new CustomEvent(eventName, options);
                } else {
                  event = document.createEvent('CustomEvent');
                  event.initCustomEvent(eventName, true, true, options);
                }
                el.dispatchEvent(event);
               }

      }

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
