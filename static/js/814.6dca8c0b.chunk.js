"use strict";(self.webpackChunkemployee_skill_hub=self.webpackChunkemployee_skill_hub||[]).push([[814],{6937:function(e,o,s){s.d(o,{Z:function(){return i}});s(7313);var r=s(6417);var i=function(e){var o=e.isError,s=e.msgText,i=e.type;return o&&(0,r.jsx)("div",{id:"msgBox",children:(0,r.jsx)("div",{id:"textMsg",className:i,children:s})})}},1814:function(e,o,s){s.r(o),s.d(o,{default:function(){return T}});var r=s(9439),i=s(7313),l=s(1914),a=s(4165),c=s(3433),n=s(5861),t=s(6545),d=(0,t.ad)(),u=(0,t.hJ)(d,"All_Courses");var v=s(5631),m=s(6937),p=s(2135),x=s(814);var h=s.p+"static/media/arrow.32df56c4f5a68df415f08e6ddd2e3b2d.svg",f=s(6417);var C=function(e){var o=e.allCourses,s=(0,i.useCallback)((function(e){console.log(e),window.open("/course/".concat(e),"_blank")}),[]);return(0,f.jsxs)("div",{className:"coursesSlider",children:[o.map((function(e,o){return(0,f.jsxs)("div",{className:"sliderCourseItem",onClick:function(){return s(null===e||void 0===e?void 0:e.courseId)},children:[(0,f.jsx)("img",{src:(null===e||void 0===e?void 0:e.courseThumbnail)||x,className:"sliderCourseItemImg",alt:""}),(0,f.jsxs)("div",{className:"sliderCourseDetailBox",children:[(0,f.jsx)("div",{className:"sliderItemCourseType",children:null===e||void 0===e?void 0:e.courseType}),(0,f.jsx)("div",{className:"sliderItemCourseTitle",children:null===e||void 0===e?void 0:e.courseName}),(0,f.jsxs)("div",{className:"sliderItemCoursePriceBox",children:[(0,f.jsxs)("div",{className:"sliderItemCoursesPrice",children:["\u20b9",null===e||void 0===e?void 0:e.courseDiscountedPrice,","]}),(0,f.jsxs)("div",{className:"sliderItemCoursesOrgPrice",children:["\u20b9",null===e||void 0===e?void 0:e.courseORGPrice]})]})]})]},o)})),(0,f.jsxs)(p.OL,{to:"/All_Courses",className:"sliderCourseItem",children:[(0,f.jsx)("div",{className:"sliderCourseItemImg videOtherCourses",children:"View All"}),(0,f.jsxs)("div",{className:"sliderCourseDetailBox",children:[(0,f.jsx)("div",{className:"sliderItemCourseType",children:"Other"}),(0,f.jsx)("div",{className:"sliderItemCourseTitle",children:"View other courses"}),(0,f.jsxs)("div",{className:"sliderItemCoursePriceBox",children:[(0,f.jsx)("div",{children:"More"}),(0,f.jsx)("img",{src:h,alt:""})]})]})]})]})},j=s(9289),N=s(7131),g=s(9099),y=s(9659),b=s(2119),w=s(5344),I=s(4072),P=JSON.parse(localStorage.getItem("enrolled_courses"))||[];var T=function(){var e=(0,i.useState)(""),o=(0,r.Z)(e,2),s=o[0],d=o[1],p=(0,i.useState)({}),h=(0,r.Z)(p,2),T=h[0],k=h[1],O=(0,i.useState)(P.some((function(e){return e.courseId===window.location.pathname.split("/").pop()}))),S=(0,r.Z)(O,2),Z=S[0],D=S[1],_=(0,i.useState)([]),B=(0,r.Z)(_,2),L=B[0],E=B[1],R=(0,i.useState)({text:"",type:""}),A=(0,r.Z)(R,2),G=A[0],V=A[1],J=(0,i.useState)(!0),F=(0,r.Z)(J,2),M=F[0],z=F[1],Y=(0,i.useState)("Click to Copy"),q=(0,r.Z)(Y,2),H=q[0],K=q[1],Q=(0,i.useState)(l.E||1e4),U=(0,r.Z)(Q,2),W=U[0],X=U[1],$=(0,i.useCallback)((function(e,o){e?(V({text:e,type:o}),setTimeout((function(){V({text:"",type:""})}),2500)):console.log("Please Provide Text Msg")}),[]);(0,i.useEffect)((function(){var e=window.location.pathname.split("/").pop();if("course"===e||""===e)return window.location="/all_courses";d(e),function(e,o,s,r){if(!e)return s(!1);var i=(0,t.IO)(u,(0,t.ar)("courseId","==",e));s(!0),(0,t.cf)(u,function(){var e=(0,n.Z)((0,a.Z)().mark((function e(l){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.PL)(i).then((function(e){var r=[];if(e.docs.forEach((function(e){var o,s,i,l,a,c,n,t,d;r.push({courseId:e.id,courseThumbnail:null===(o=e.data())||void 0===o?void 0:o.courseThumbnail,courseName:null===(s=e.data())||void 0===s?void 0:s.courseName,aboutCourse:null===(i=e.data())||void 0===i?void 0:i.aboutCourse,courseDiscountedPrice:null===(l=e.data())||void 0===l?void 0:l.courseDiscountedPrice,courseORGPrice:null===(a=e.data())||void 0===a?void 0:a.courseORGPrice,courseType:null===(c=e.data())||void 0===c?void 0:c.courseType,demoVideo:null===(n=e.data())||void 0===n?void 0:n.demoVideo,courseLink:null===(t=e.data())||void 0===t?void 0:t.courseLink,updatedOn:null===(d=e.data())||void 0===d?void 0:d.updatedOn})})),s(!1),o.apply(void 0,(0,c.Z)(r||{})),!r.length)return window.location="/all_courses"})).catch((function(e){s(!1),console.log(e.message),r(e.code,"error")}));case 2:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),(function(e){s(!1),console.log(e),r(e.code,"error")}))}(e,k,z,$),function(e,o,s,r){if(!e)return s(!1);var i=(0,t.IO)(u,(0,t.ar)("courseId","!=",e),(0,t.b9)(5));(0,t.cf)(u,function(){var e=(0,n.Z)((0,a.Z)().mark((function e(s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.PL)(i).then((function(e){var s=[];e.docs.forEach((function(e){var o,r,i,l,a,c,n,t,d;s.push({courseId:e.id,courseThumbnail:null===(o=e.data())||void 0===o?void 0:o.courseThumbnail,courseName:null===(r=e.data())||void 0===r?void 0:r.courseName,aboutCourse:null===(i=e.data())||void 0===i?void 0:i.aboutCourse,courseDiscountedPrice:null===(l=e.data())||void 0===l?void 0:l.courseDiscountedPrice,courseORGPrice:null===(a=e.data())||void 0===a?void 0:a.courseORGPrice,courseType:null===(c=e.data())||void 0===c?void 0:c.courseType,demoVideo:null===(n=e.data())||void 0===n?void 0:n.demoVideo,courseLink:null===(t=e.data())||void 0===t?void 0:t.courseLink,updatedOn:null===(d=e.data())||void 0===d?void 0:d.updatedOn})})),o(s||[])})).catch((function(e){console.log(e.message),r(e.code,"error")}));case 2:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}(),(function(e){console.log(e),r(e.code,"error")}))}(e,E,z,$)}),[$]);var ee=(0,i.useCallback)((function(){var e=JSON.parse(localStorage.getItem("user_cart"))||[];e.includes(s)?$("Course Already in Cart","warning"):(e.push(s),localStorage.setItem("user_cart",JSON.stringify(e)),$("Course Added to Cart","success"))}),[s,$]),oe=(0,i.useCallback)((function(){var e=JSON.parse(localStorage.getItem("enrolled_courses"))||[];if(!JSON.parse(localStorage.getItem("user_details")))return $("Please Login to Place an Order","error");e.some((function(e){return e.courseId===s}))?$("Course Already in Enrolled","warning"):((0,l.p)(null===T||void 0===T?void 0:T.courseDiscountedPrice,W,X),e.push(T),localStorage.setItem("enrolled_courses",JSON.stringify(e)),D(!0),$("Course Enrolled","success"))}),[s,T,W,$]),se=(0,i.useCallback)((function(){var e;navigator.clipboard.writeText(null===(e=window.location)||void 0===e?void 0:e.href),$("Shearing Link Copied","success"),K("Link Copied"),setTimeout((function(){K("Click to Copy")}),2500)}),[$]);return(0,f.jsxs)("div",{className:"courseDetailsPage",children:[(0,f.jsx)(j.Z,{}),(0,f.jsx)(v.Z,{isLoading:M}),!M&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"courseDetailsBox",children:[(0,f.jsx)("div",{className:"courseDetailsBoxLeft",children:(0,f.jsx)("img",{src:(null===T||void 0===T?void 0:T.courseThumbnail)||x,className:"courseDetailImage",alt:""})}),(0,f.jsxs)("div",{className:"courseDetailsBoxRight",children:[(0,f.jsxs)("div",{className:"courseTypeShare",children:[(0,f.jsx)("div",{className:"courseDetailType",children:null===T||void 0===T?void 0:T.courseType}),(0,f.jsx)(I.Z,{title:(0,f.jsx)("span",{style:{fontSize:"17px",padding:"5px"},children:H}),style:{fontSize:20},arrow:!0,placement:"top",children:(0,f.jsx)(N.Z,{"aria-label":"delete",onClick:se,children:(0,f.jsx)(y.Z,{})})})]}),(0,f.jsx)("div",{className:"openCourseTitle",children:null===T||void 0===T?void 0:T.courseName}),(0,f.jsx)("div",{className:"openCourseDesc",children:null===T||void 0===T?void 0:T.aboutCourse}),(0,f.jsxs)("div",{className:"openCoursePrice",children:[(0,f.jsxs)("span",{className:"openCourseDisPrice",children:["\u20b9",null===T||void 0===T?void 0:T.courseDiscountedPrice]}),(0,f.jsxs)("span",{className:"openCourseOrgPrice",children:["\u20b9",null===T||void 0===T?void 0:T.courseORGPrice]}),(0,f.jsxs)("span",{className:"openCourseDisPricePercent",children:[(((null===T||void 0===T?void 0:T.courseORGPrice)-(null===T||void 0===T?void 0:T.courseDiscountedPrice))/(null===T||void 0===T?void 0:T.courseORGPrice)*100).toFixed(2),"% off"]})]}),(0,f.jsx)(g.Z,{variant:"contained",color:"warning",className:"openCourseBtn",sx:{mt:3,mr:2,py:1.2,px:2.5},startIcon:(0,f.jsx)(w.Z,{}),onClick:oe,disabled:Z,children:Z?"Enrolled":"Enroll Now"}),!Z&&(0,f.jsx)(g.Z,{variant:"contained",color:"secondary",className:"openCourseBtn",sx:{mt:3,py:1.2,px:2.5},startIcon:(0,f.jsx)(b.Z,{}),onClick:ee,children:"Add to Cart"})]})]}),(0,f.jsxs)("div",{className:"CoursesDemoTitle",children:["Course Demo",(0,f.jsx)("div",{className:"titleBorder"})]}),(0,f.jsx)("iframe",{className:"youtubeVideoIframe",src:"https://www.youtube-nocookie.com/embed/"+(null===T||void 0===T?void 0:T.demoVideo),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,f.jsxs)("div",{className:"CoursesDemoTitle",children:["Other Courses",(0,f.jsx)("div",{className:"titleBorder"})]}),(0,f.jsx)(C,{allCourses:L})]}),G&&(0,f.jsx)(m.Z,{isError:!(null===G||void 0===G||!G.text),msgText:null===G||void 0===G?void 0:G.text,type:null===G||void 0===G?void 0:G.type})]})}},814:function(e,o,s){e.exports=s.p+"static/media/photoNotAvailable.7165afef24c64b08e6d9.jpeg"}}]);