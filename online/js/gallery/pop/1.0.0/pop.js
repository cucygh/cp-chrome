define(["jquery","pop-tpl"],function(e,t){function n(n){this.el=n.el||"body",this.layer="layer"+ +(new Date),this.data={info:n.info||"",content:n.content||"",title:n.title||"温馨提示",cancel:n.cancel||!1,layer:"layer"+ +(new Date)},this.init=function(){var r=t(this.data);e(this.el).append(r).on("click","."+this.layer+" .confirm",function(t){var r=n.ok_call||e.noop;r.call(this)}.bind(this)).on("click","."+this.layer+" .cancel",function(t){var r=n.cancel_call||e.noop;r.call(this)}.bind(this)).on("click","."+this.layer+" .close",function(e){this.close()}.bind(this))}.bind(this),this.close=function(){e(this.el).find("."+this.layer).remove()}.bind(this)}return n});