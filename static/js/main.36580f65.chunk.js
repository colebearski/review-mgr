(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),s=(a(23),a(2)),o=a(3),l=a(5),u=a(4),m=a(6),v=a(15),h=a.n(v),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showReviewInfo:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.review,a=t.rating,n=t.author,c=t.body,i=t.publish_date,s=this.state.showReviewInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,"Rating: ",a," ",r.a.createElement("i",{onClick:function(){return e.setState({showReviewInfo:!e.state.showReviewInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}})),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Author: ",n),r.a.createElement("li",{className:"list-group-item"},"Review: ",c),r.a.createElement("li",{className:"list-group-item"},"Date: ",r.a.createElement(h.a,{format:"YYYY/MM/DD"},i))):null)}}]),t}(n.Component),d=a(16),b=a.n(d),f=r.a.createContext(),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a.getReviews=function(){b.a.get("https://shakespeare.podium.com/api/reviews",{headers:{"x-api-key":"H3TM28wjL8R4#HTnqk?c"}}).then(function(e){var t=e.data.sort(function(e,t){return e.publish_date<t.publish_date?1:t.publish_date<e.publish_date?-1:0});a.setState({reviews:t})}).catch(function(e){console.log("***** ERROR",e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getReviews()}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),E=f.Consumer,g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,function(e){var t=e.reviews;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-info"},"Review")," List"),t.map(function(e){return r.a.createElement(p,{key:e.id,review:e})}))})}}]),t}(n.Component),j=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",className:"nav-link"},"Home"))))))};j.defaultProps={branding:"Shakespeare Reviews"};var O=j,y=(a(46),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,{branding:"Review Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(g,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.36580f65.chunk.js.map