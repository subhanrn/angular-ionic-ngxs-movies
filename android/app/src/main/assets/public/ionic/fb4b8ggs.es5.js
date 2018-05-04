/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("fb4b8ggs",["exports","./chunk-4d7345d3.js"],function(t,e){var n=window.Ionic.h,o=function(){function t(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.fill="default",this.round=!1,this.strong=!1,this.type="button"}return t.prototype.componentWillLoad=function(){this.el.closest("ion-buttons")&&(this.buttonType="bar-button")},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.render=function(){var t=this,o=this,i=o.buttonType,s=o.color,u=o.expand,l=o.fill,a=o.mode,c=o.round,d=o.size,p=o.strong,b=this.href?"a":"button",y=Object.assign({},e.getButtonClassMap(i,a),r(i,u,a),r(i,d,a),r(i,c?"round":void 0,a),r(i,p?"strong":void 0,a),function(t,e,n,o){var r=t;"bar-button"!==t&&"solid"===n&&(n="default"),n&&"default"!==n&&(r+="-"+n.toLowerCase()),"bar-button"===t&&"default"===n&&(r=t,e||(r+="-"+n.toLowerCase()));var i,s=((i={})[r]=!0,i[r+"-"+o]=!0,i);return e&&(s[r+"-"+o+"-"+e]=!0),s}(i,s,l,a),e.getElementClassMap(this.el.classList),{focused:this.keyFocus}),f="button"===b?{type:this.type}:{href:this.href};return n(b,Object.assign({},f,{class:y,disabled:this.disabled,onFocus:this.onFocus.bind(this),onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onClick:function(n){return e.openURL(t.win,t.href,n,t.routerDirection)}}),n("span",{class:"button-inner"},n("slot",{name:"icon-only"}),n("slot",{name:"start"}),n("slot",null),n("slot",{name:"end"})),"md"===this.mode&&n("ion-ripple-effect",{tapClick:!0}))},Object.defineProperty(t,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},expand:{type:String,attr:"expand"},fill:{type:String,attr:"fill"},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},round:{type:Boolean,attr:"round"},routerDirection:{type:String,attr:"router-direction"},size:{type:String,attr:"size"},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:inline-block;border:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-font-kerning:none;font-kerning:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:content}.button:active,.button:focus{outline:0}.button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.button[disabled],a[disabled],button[disabled]{cursor:default;pointer-events:none}.button-block{display:block;clear:both;width:100%;contain:strict}.button-block::after{clear:both}.button-full{display:block;width:100%;contain:strict}.button-full.button-outline{border-radius:0;border-right-width:0;border-left-width:0}.button ion-icon{font-size:1.4em;pointer-events:none}.button ion-icon[slot=start]{margin:0 .3em 0 -.3em}.button ion-icon[slot=end]{margin:0 -.2em 0 .3em}.button ion-icon[slot=icon-only]{font-size:1.8em}.button-md{border-radius:2px;margin:4px 2px;padding:0 1.1em;overflow:hidden;height:36px;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1);transition:background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .3s cubic-bezier(.4,0,.2,1)}.enable-hover .button-md:hover{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.button-md.activated{background-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0));-webkit-box-shadow:0 3px 5px rgba(0,0,0,.14),0 3px 5px rgba(0,0,0,.21);box-shadow:0 3px 5px rgba(0,0,0,.14),0 3px 5px rgba(0,0,0,.21)}.button-md.focused{background-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.button-md .ripple-effect{background-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.button[disabled],a[disabled],button[disabled]{opacity:.5}.button-large-md{padding:0 1em;height:2.8em;font-size:20px}.button-small-md{padding:0 .9em;height:2.1em;font-size:13px}.button-block-md{margin-left:0;margin-right:0}.button-full-md{margin-left:0;margin-right:0;border-radius:0;border-right-width:0;border-left-width:0}.button-outline-md{border-width:1px;border-style:solid;border-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.enable-hover .button-outline-md:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md.activated{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;opacity:1}.button-outline-md.focused{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.1)}.button-outline-md .ripple-effect{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.button-clear-md{border-color:transparent;color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:transparent;-webkit-box-shadow:none;box-shadow:none;opacity:1}.button-clear-md.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md.focused{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.1)}.enable-hover .button-clear-md:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-clear-md .ripple-effect{background-color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999))}.button-round-md{border-radius:64px;padding:0 26px}.button-md ion-icon[slot=icon-only]{padding:0}.button-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.enable-hover .button-md-primary:hover{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.button-md-primary.activated{background-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0));opacity:1}.button-md-primary.focused{background-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.button-md-primary .ripple-effect{background-color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.button-outline-md-primary{border-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff));color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff));background-color:transparent}.enable-hover .button-outline-md-primary:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-primary.activated{background-color:transparent}.button-outline-md-primary.focused{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.1)}.button-outline-md-primary .ripple-effect{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.button-clear-md-primary{border-color:transparent;color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));background-color:transparent}.button-clear-md-primary.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-primary.focused{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),.1)}.enable-hover .button-clear-md-primary:hover{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.button-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.enable-hover .button-md-secondary:hover{background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.button-md-secondary.activated{background-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc));opacity:1}.button-md-secondary.focused{background-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.button-md-secondary .ripple-effect{background-color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.button-outline-md-secondary{border-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea));color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea));background-color:transparent}.enable-hover .button-outline-md-secondary:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-secondary.activated{background-color:transparent}.button-outline-md-secondary.focused{background-color:rgba(var(--ion-color-md-secondary-rgb,var(--ion-color-secondary-rgb,12,209,232)),.1)}.button-outline-md-secondary .ripple-effect{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.button-clear-md-secondary{border-color:transparent;color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));background-color:transparent}.button-clear-md-secondary.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-secondary.focused{background-color:rgba(var(--ion-color-md-secondary-rgb,var(--ion-color-secondary-rgb,12,209,232)),.1)}.enable-hover .button-clear-md-secondary:hover{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.button-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.enable-hover .button-md-tertiary:hover{background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.button-md-tertiary.activated{background-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0));opacity:1}.button-md-tertiary.focused{background-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.button-md-tertiary .ripple-effect{background-color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.button-outline-md-tertiary{border-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff));color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff));background-color:transparent}.enable-hover .button-outline-md-tertiary:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-tertiary.activated{background-color:transparent}.button-outline-md-tertiary.focused{background-color:rgba(var(--ion-color-md-tertiary-rgb,var(--ion-color-tertiary-rgb,112,68,255)),.1)}.button-outline-md-tertiary .ripple-effect{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.button-clear-md-tertiary{border-color:transparent;color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff));background-color:transparent}.button-clear-md-tertiary.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-tertiary.focused{background-color:rgba(var(--ion-color-md-tertiary-rgb,var(--ion-color-tertiary-rgb,112,68,255)),.1)}.enable-hover .button-clear-md-tertiary:hover{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.button-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.enable-hover .button-md-success:hover{background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.button-md-success.activated{background-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254));opacity:1}.button-md-success.focused{background-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254))}.button-md-success .ripple-effect{background-color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.button-outline-md-success{border-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070));color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070));background-color:transparent}.enable-hover .button-outline-md-success:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-success.activated{background-color:transparent}.button-outline-md-success.focused{background-color:rgba(var(--ion-color-md-success-rgb,var(--ion-color-success-rgb,16,220,96)),.1)}.button-outline-md-success .ripple-effect{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.button-clear-md-success{border-color:transparent;color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));background-color:transparent}.button-clear-md-success.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-success.focused{background-color:rgba(var(--ion-color-md-success-rgb,var(--ion-color-success-rgb,16,220,96)),.1)}.enable-hover .button-clear-md-success:hover{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.button-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.enable-hover .button-md-warning:hover{background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.button-md-warning.activated{background-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500));opacity:1}.button-md-warning.focused{background-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500))}.button-md-warning .ripple-effect{background-color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000))}.button-outline-md-warning{border-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a));color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a));background-color:transparent}.enable-hover .button-outline-md-warning:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-warning.activated{background-color:transparent}.button-outline-md-warning.focused{background-color:rgba(var(--ion-color-md-warning-rgb,var(--ion-color-warning-rgb,255,206,0)),.1)}.button-outline-md-warning .ripple-effect{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.button-clear-md-warning{border-color:transparent;color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));background-color:transparent}.button-clear-md-warning.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-warning.focused{background-color:rgba(var(--ion-color-md-warning-rgb,var(--ion-color-warning-rgb,255,206,0)),.1)}.enable-hover .button-clear-md-warning:hover{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.button-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.enable-hover .button-md-danger:hover{background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.button-md-danger.activated{background-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939));opacity:1}.button-md-danger.focused{background-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939))}.button-md-danger .ripple-effect{background-color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.button-outline-md-danger{border-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454));color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454));background-color:transparent}.enable-hover .button-outline-md-danger:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-danger.activated{background-color:transparent}.button-outline-md-danger.focused{background-color:rgba(var(--ion-color-md-danger-rgb,var(--ion-color-danger-rgb,240,65,65)),.1)}.button-outline-md-danger .ripple-effect{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.button-clear-md-danger{border-color:transparent;color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));background-color:transparent}.button-clear-md-danger.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-danger.focused{background-color:rgba(var(--ion-color-md-danger-rgb,var(--ion-color-danger-rgb,240,65,65)),.1)}.enable-hover .button-clear-md-danger:hover{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.button-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.enable-hover .button-md-light:hover{background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.button-md-light.activated{background-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da));opacity:1}.button-md-light.focused{background-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da))}.button-md-light .ripple-effect{background-color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.button-outline-md-light{border-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9));color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9));background-color:transparent}.enable-hover .button-outline-md-light:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-light.activated{background-color:transparent}.button-outline-md-light.focused{background-color:rgba(var(--ion-color-md-light-rgb,var(--ion-color-light-rgb,244,245,248)),.1)}.button-outline-md-light .ripple-effect{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.button-clear-md-light{border-color:transparent;color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));background-color:transparent}.button-clear-md-light.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-light.focused{background-color:rgba(var(--ion-color-md-light-rgb,var(--ion-color-light-rgb,244,245,248)),.1)}.enable-hover .button-clear-md-light:hover{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.button-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.enable-hover .button-md-medium:hover{background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.button-md-medium.activated{background-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f));opacity:1}.button-md-medium.focused{background-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f))}.button-md-medium .ripple-effect{background-color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000))}.button-outline-md-medium{border-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab));color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab));background-color:transparent}.enable-hover .button-outline-md-medium:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-medium.activated{background-color:transparent}.button-outline-md-medium.focused{background-color:rgba(var(--ion-color-md-medium-rgb,var(--ion-color-medium-rgb,152,154,162)),.1)}.button-outline-md-medium .ripple-effect{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.button-clear-md-medium{border-color:transparent;color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));background-color:transparent}.button-clear-md-medium.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-medium.focused{background-color:rgba(var(--ion-color-md-medium-rgb,var(--ion-color-medium-rgb,152,154,162)),.1)}.enable-hover .button-clear-md-medium:hover{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.button-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.enable-hover .button-md-dark:hover{background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.button-md-dark.activated{background-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023));opacity:1}.button-md-dark.focused{background-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023))}.button-md-dark .ripple-effect{background-color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.button-outline-md-dark{border-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e));color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e));background-color:transparent}.enable-hover .button-outline-md-dark:hover{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1)}.button-outline-md-dark.activated{background-color:transparent}.button-outline-md-dark.focused{background-color:rgba(var(--ion-color-md-dark-rgb,var(--ion-color-dark-rgb,34,36,40)),.1)}.button-outline-md-dark .ripple-effect{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.button-clear-md-dark{border-color:transparent;color:var(--ion-color-md-dark,var(--ion-color-dark,#222428));background-color:transparent}.button-clear-md-dark.activated{background-color:rgba(var(--ion-text-md-color-rgb,var(--ion-text-color-rgb,0,0,0)),.1);-webkit-box-shadow:none;box-shadow:none}.button-clear-md-dark.focused{background-color:rgba(var(--ion-color-md-dark-rgb,var(--ion-color-dark-rgb,34,36,40)),.1)}.enable-hover .button-clear-md-dark:hover{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.button-strong-md{font-weight:700}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function r(t,e,n){return e?((o={})[t+"-"+(e=e.toLocaleLowerCase())]=!0,o[t+"-"+e+"-"+n]=!0,o):{};var o}t.IonButton=o,Object.defineProperty(t,"__esModule",{value:!0})});