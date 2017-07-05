/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(selector){
    return document.querySelectorAll(selector)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(element){
    SweetSelector.select(element).forEach(value =>{
      value.style.display = 'none'
    })
  }
  
  static show(el){
    SweetSelector.select(el).forEach(value =>{
      value.style.display =''
    })
  }
  
  static removeClass(el){
    SweetSelector.select(el).forEach(value =>{
      value.classList.remove()
    })
  }
  
  static addClass(el1,el2){
    SweetSelector.select(el1).forEach(value => {
      if(value.classList) {
         value.classList.add(el2)
      } else {
         value.className += ' ' +className
      }
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(params,events,callback){
    SweetSelector.select(params).forEach(element =>{
      element.addEventListener(events,callback,false)
    })
  }
  
  static trigger(params,events){
    var event = new Event(events)
    SweetSelector.select(params).forEach(element =>{
      element.dispatchEvent(event)
    })
  }
}


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper {
    static request(params) {
      var Req = new XMLHttpRequest()
      Req.addEventListener('load', params.success)
      Req.addEventListener('error', params.fail)
      Req.open(params.type, params.url)
      Req.send();
    }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
class miniquerys {
  constructor(params) {
    this.params = params
  }
  
  select(){
    return SweetSelector.select(this.params)
  }
  
  hide(){
    DOM.hide(this.params)
  }
  
  show(){
    DOM.show(this.params)
  }
  
  removeClass(el){
    DOM.removeClass(this.params,el)
  }
  
  addClass(el){
    DOM.addClass(this.params,el)
  }
  
  on(events,callback){
    EventDispatcher.on(this.params,events,callback)
  }
  
  trigger(events){
    EventDispatcher.trigger(this.params,events)
  }
  
  request(ele){
    AjaxWrapper.request(ele)
  }
}

var $ = (params) =>{
  return new miniquerys(params)
}

var miniquery = function(params) {
  return new miniquerys(params)
}