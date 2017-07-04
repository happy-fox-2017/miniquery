/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 var SweetSelector = {
   select : function (element) {
     var el = document.querySelectorAll(element)
     return el
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 var DOM = {
   hide : function (element) {
     let els = SweetSelector.select(element)
     els.forEach(el => {
       el.style.display = "none"
     })
   },
   show : function (element) {
     let els = SweetSelector.select(element)
     els.forEach(el => {
       el.style.display = "block"
     })
   },
   removeClass : function (element, attrib) {
     let els = SweetSelector.select(element)
     els.forEach(el => {
      el.classList.remove(attrib)
    })
   },
   addClass : function (element, attrib) {
     let els = SweetSelector.select(element)
     els.forEach(el => {
      el.classList.add(attrib)
    })
   },
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
