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
 var EventDispatcher = {
   on : function (element, event, callback) {

     let els = SweetSelector.select(element)
     els.forEach(el => {
       el.addEventListener(event, callback);
     })
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 var AjaxWrapper = {
   request : function (options) {
     let req = new XMLHttpRequest()
     console.log(req);
     req.addEventListener("load", options.success)
     req.addEventListener("error", options.fail)
     req.open(options.type, options.url)
     req.send()
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 var miniquery = function (el) {
   return {
     hide : function () {
       DOM.hide(el)
     },
     show : function () {
       DOM.show(el)
     }
   }
 }

 var $ = miniquery
