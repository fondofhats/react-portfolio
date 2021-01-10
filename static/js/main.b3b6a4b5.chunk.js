(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"id":1,"name":"Week In View","image":"https://github.com/kpehl/week-in-view/raw/main/media/week-in-view.png","github":"https://github.com/kpehl/week-in-view","deploy":"https://rocky-mountain-95430.herokuapp.com/","topics":"node, sequelize, handlebars, express-session, jawsdb, mysql, model-view-controller, dotenv"},{"id":2,"name":"Tech Blog","image":"https://github.com/fondofhats/tech-blog/raw/main/tech-blog.png","github":"https://github.com/fondofhats/tech-blog","deploy":"https://foh-tech-blog.herokuapp.com/","topics":"node, sequelize, handlebars, express-session, jawsdb, mysql, model-view-controller, dotenv"},{"id":3,"name":"Weather Dashboard","image":"https://github.com/fondofhats/weather-dashboard/raw/master/weather-dashboard.png","github":"https://github.com/fondofhats/weather-dashboard","deploy":"https://fondofhats.github.io/weather-dashboard/","topics":"moment.js, javascript, jQuery, localStorage, API"},{"id":4,"name":"Budget Tracker","image":"https://github.com/fondofhats/pwa-budget-tracker/raw/main/docs/pwa-budget-tracker.png","github":"https://github.com/fondofhats/pwa-budget-tracker","deploy":"https://pwa-budget-traker.herokuapp.com/","topics":"node, express, javascript, mongoDB, mongoose, nodemon"},{"id":5,"name":"Note Taker","image":"https://github.com/fondofhats/express-note-taker/raw/main/express-note-taker1.png","github":"https://github.com/fondofhats/express-note-taker","deploy":"https://fondofhats-express-note-taker.herokuapp.com/","topics":"node, express, javascript, bootstrap"},{"id":6,"name":"Work Day Scheduler","image":"https://github.com/fondofhats/workday-scheduler/raw/master/workday-scheduler.png","github":"https://github.com/fondofhats/workday-scheduler","deploy":"https://fondofhats.github.io/workday-scheduler/","topics":"HTML5, CSS, Javascript, JQuery, Bootstrap"}]')},35:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(1),n=(s(31),s(0)),a=s.n(n),i=s(11),o=s.n(i),r=(s(35),s(21)),l=s(22),d=s(28),h=s(27),j=s(9),b=s(4),m=s(48);var p=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)(m.a,{expand:"lg",bg:"dark",sticky:"top",children:[Object(c.jsx)(j.b,{className:"nav-link",to:"/",children:Object(c.jsx)("div",{class:"text-light",children:Object(c.jsx)("h4",{class:"nav-title-font",children:"Michael Giddings"})})}),Object(c.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(j.b,{to:"/about",children:Object(c.jsx)("div",{class:"nav-font text-light",children:"About Me"})})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(j.b,{to:"/portfolio",children:Object(c.jsx)("div",{class:"nav-font text-light",children:"Portfolio"})})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(j.b,{to:"/contact",children:Object(c.jsx)("div",{class:"nav-font text-light",children:"Contact"})})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(j.b,{to:"/resume",children:Object(c.jsx)("div",{class:"nav-font text-light",children:"Resume"})})})]})]})})};var u=function(){return Object(c.jsxs)("section",{className:"container",children:[Object(c.jsx)("h2",{class:"top-title",children:"Michael Giddings"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{class:"mb-5",id:"avatar",src:"https://avatars3.githubusercontent.com/u/11549316?s=460&u=9cbb3efedf0845c6fb20524c104ba92fff38c871&v=4",alt:"Michael Giddings"}),Object(c.jsx)("p",{children:"Seasoned programmer with over 19 years of experience incorporating user and business requirements into cost-effective, secure and user-friendly solutions known for scalability and durability."}),Object(c.jsx)("p",{children:"Strong knowledge of commercial and open source CMS development software/database engineering tools."}),Object(c.jsx)("p",{children:"Proven leader and consultant; drive system architecture decisions and lead projects from concept through the release process."})]})]})};s(15);var g=function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{alt:e.name,src:e.image})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{className:"project-title card-title",children:e.name}),Object(c.jsxs)("p",{class:"proj-icons-container",children:[Object(c.jsx)("a",{href:e.github,children:Object(c.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"GitHub Repo"})}),Object(c.jsx)("a",{href:e.deploy,children:Object(c.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/domain.png",alt:"Live Application"})})]}),Object(c.jsxs)("p",{class:"topics",children:["(",e.topics,")"]})]})]})},x=s(26);function f(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})}var O=function(){return Object(c.jsxs)("section",{className:"container",children:[Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h2",{className:"top-title",children:"Bootcamp Portfolio"}),Object(c.jsx)("hr",{})]}),Object(c.jsx)(f,{id:"card-data",children:x.map((function(e){return Object(c.jsx)(g,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},v=s(12),w=s(19),k=s(20);var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(k.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(""),o=Object(k.a)(i,2),r=o[0],l=o[1],d=s.name,h=s.email,j=s.message;function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"please enter a valid email")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));r||a(Object(w.a)(Object(w.a)({},s),{},Object(v.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("section",{className:"container",children:[Object(c.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:d,onBlur:b})]}),Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(c.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:h,onBlur:b})]}),Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{class:"form-control",name:"message",defaultValue:j,onBlur:b,rows:"7"})]}),r&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:r})}),Object(c.jsx)("div",{class:"mt-5 mb-5",children:Object(c.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};var N=function(){return Object(c.jsxs)("section",{class:"container",children:[Object(c.jsx)("h2",{className:"top-title",children:"Resume"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("h2",{className:"top-title",children:"Michael Giddings"}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:"Core competencies in enterpirse content management, full-stack web development, data architecture, and managing integrations."})}),Object(c.jsx)("p",{class:"mt-5",children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/michaelgiddings/",children:Object(c.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"inkedIn"})})}),Object(c.jsx)("a",{href:"https://github.com/fondofhats/react-portfolio/main/docs/MichaelGiddingsResume.docx?raw=true",class:"link",children:"Download Resume"})]})}),Object(c.jsx)("div",{class:"justify-content-center mt-5",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"top-title",children:"Proficiencies"}),Object(c.jsxs)("p",{children:["SDL Tridion, Adobe Experience Manager (6.5, As a cloud Service) C#.NET, ASP.NET, JAVA,"," "]}),Object(c.jsx)("p",{children:"HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,"}),Object(c.jsx)("p",{children:"Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating"})]})})]})},S=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)(j.a,{children:[Object(c.jsx)("header",{children:Object(c.jsx)(p,{})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(b.a,{to:"/about"})}}),Object(c.jsx)(b.b,{path:"/about",component:u}),Object(c.jsx)(b.b,{path:"/portfolio",component:O}),Object(c.jsx)(b.b,{path:"/contact",component:y}),Object(c.jsx)(b.b,{path:"/resume",component:N})]})]})}}]),s}(n.Component);var B=function(){return Object(c.jsxs)("footer",{className:"footer bg-dark fixed-bottom",children:[Object(c.jsx)("a",{href:"https://github.com/fondofhats",children:Object(c.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/michaelgiddings/",children:Object(c.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})}),Object(c.jsx)("a",{href:"http://michaelgiddings.com/",children:Object(c.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/48/ffffff/trilby.png",alt:"MichaelGiddings.com",className:"icon"})})]})};s(44);var M=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(S,{}),Object(c.jsx)(B,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.b3b6a4b5.chunk.js.map