(this.webpackJsonpsuperheroapp=this.webpackJsonpsuperheroapp||[]).push([[0],{10:function(e,t,a){e.exports={SuperHero:"SuperHero_SuperHero__1tEHZ",SuperHero___Image:"SuperHero_SuperHero___Image__2zTTi",SuperHero__Info:"SuperHero_SuperHero__Info__8XwDc",Name:"SuperHero_Name__1yZzl",SuperHero__Info__PowerStats:"SuperHero_SuperHero__Info__PowerStats__1g_Ev",MoreInfo:"SuperHero_MoreInfo__4jxc7",PowerStatsList:"SuperHero_PowerStatsList__2UcGb",Heading:"SuperHero_Heading__3W6YU",PublisherName:"SuperHero_PublisherName__1-f0-"}},24:function(e,t,a){e.exports={Notification:"Notification_Notification__40m1e",animate:"Notification_animate__1GyAg",Notification__Content:"Notification_Notification__Content__1QoGG",Notification__CloseBtn:"Notification_Notification__CloseBtn__1olh6"}},25:function(e,t,a){e.exports={SuperHeroCard:"SuperHeroCard_SuperHeroCard__2XkGW",SuperHeroCard__Name:"SuperHeroCard_SuperHeroCard__Name__Xvh4e",SuperHeroCard__Img:"SuperHeroCard_SuperHeroCard__Img__3hTkr"}},26:function(e,t,a){e.exports={Mylist__Cnt:"Mylist_Mylist__Cnt__3z2Zk",Mylist__Cnt__Heading:"Mylist_Mylist__Cnt__Heading__1tIKP",Mylist:"Mylist_Mylist__30MZP"}},27:function(e,t,a){e.exports={EmptyFavList:"FavoriteList_EmptyFavList__2SEmc",FavListHeading:"FavoriteList_FavListHeading__23gK-",FavList:"FavoriteList_FavList__1ZYUg"}},43:function(e,t,a){},45:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(22),o=a.n(i),s=a(11),c=a(12),l=a(16),u=a(15),p=a(13),m=a(2),_=a(10),h=a.n(_),f=a(17),v=a.n(f),S=a(14),d=function(e){return{type:"REMOVE_SUPERHERO_FROM_FAVLIST",SuperHeroId:e}},E=a(24),H=a.n(E);var N=function(e){return n.a.createElement("div",{className:H.a.Notification},n.a.createElement("div",{className:H.a.Notification__Content},e.children),n.a.createElement("div",{className:H.a.Notification__CloseBtn},"X"))},g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).toggleNotificationHandler=function(e){setTimeout((function(){r.setState({ShowNotification:!1})}),6e3),r.setState({ShowNotification:!0,NotificationContent:e})},r.state={SuperHero:null,IsPresentInMylist:!1,IsPresentInFavlist:!1,NotificationContent:"",ShowNotification:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://www.superheroapi.com/api.php/10219177700206566/"+this.props.match.params.id).then((function(t){e.setState({SuperHero:t.data})}))}},{key:"shouldComponentUpdate",value:function(e,t){return!this.state.SuperHero||(e.match.params.id!==this.state.SuperHero.id||t.IsPresentInFavlist!==this.state.IsPresentInFavlist||t.IsPresentInMylist!==this.state.IsPresentInMylist)}},{key:"componentDidUpdate",value:function(){var e=this;v.a.get("https://www.superheroapi.com/api.php/10219177700206566/"+this.props.match.params.id).then((function(t){e.setState({SuperHero:t.data})}))}},{key:"render",value:function(){var e=this,t=-1;this.state.SuperHero&&(t=this.props.Mylist.findIndex((function(t){return t.id===e.state.SuperHero.id})));var a=-1;this.state.SuperHero&&(a=this.props.FavoriteList.findIndex((function(t){return t.id===e.state.SuperHero.id})));var r=this.state.SuperHero,i=null;return this.state.SuperHero&&(i=n.a.createElement("div",{className:h.a.SuperHero},this.state.ShowNotification?n.a.createElement(N,{show:this.state.ShowNotification},this.state.NotificationContent):null,n.a.createElement("div",{className:h.a.SuperHero___Image},n.a.createElement("img",{src:this.state.SuperHero.image.url,alt:this.state.SuperHero.name})),n.a.createElement("div",{className:h.a.SuperHero__Info},n.a.createElement("div",{className:h.a.Name},n.a.createElement("div",null,this.state.SuperHero.name),-1===t?n.a.createElement("button",{onClick:function(){e.toggleNotificationHandler(r.name+" Successfully Added to MyList"),e.setState({IsPresentInMylist:!0}),e.props.onAddToMyList(r)}},"Add to MyList ",n.a.createElement("i",{class:"fas fa-plus-circle"})):null,-1===a?n.a.createElement("i",{class:"far fa-heart",onClick:function(){e.setState({IsPresentInFavlist:!0}),e.toggleNotificationHandler(r.name+" Successfully Added to Favorite SuperHeroes List"),e.props.addToFavList(r)}}):n.a.createElement("i",{class:"fas fa-heart",style:{color:"red"},onClick:function(){e.setState({IsPresentInFavlist:!1}),e.toggleNotificationHandler(r.name+" Successfully Removed from  Favorite SuperHeros List"),e.props.removeFromFavList(r.id)}})),n.a.createElement("div",{className:h.a.SuperHero__Info__PowerStats},n.a.createElement("div",{className:h.a.Heading},"PowerStats"),n.a.createElement("div",{className:h.a.PowerStatsList},n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-brain"}),"Intelligence:",r.powerstats.intelligence),n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-dumbbell"}),"strength:",r.powerstats.strength),n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-battery-three-quarters"}),"power:",r.powerstats.power),n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-fist-raised"}),"Combat:",r.powerstats.Combat),n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-running"}),"speed:",r.powerstats.speed),n.a.createElement("div",null,n.a.createElement("i",{class:"fas fa-heart"}),"durability:",r.powerstats.durability))),n.a.createElement("div",{className:h.a.PublisherName},r.biography.publisher)),n.a.createElement("div",{className:h.a.MoreInfo},n.a.createElement("div",null,n.a.createElement("span",null,"Full Name")," :",r.biography["full-name"]),"-"!==r.biography["place-of-birth"]?n.a.createElement("div",null,n.a.createElement("span",null,"Place of Birth "),":",r.biography["place-of-birth"]):null,"-"!==r.biography["first-appearance"]?n.a.createElement("div",null,n.a.createElement("span",null,"First Appearance")," :",r.biography["first-appearance"]):null))),i}}]),a}(n.a.Component),y=Object(S.b)((function(e){return{Mylist:e?e.Mylist:[],FavoriteList:e?e.FavoriteList:[]}}),(function(e){return{onAddToMyList:function(t){e(function(e){return{type:"ADD_SUPERHERO_TO_MYLIST",SuperHero:e}}(t))},addToFavList:function(t){e(function(e){return{type:"ADD_SUPERHERO_TO_FAVLIST",SuperHero:e}}(t))},removeFromFavList:function(t){e(d(t))}}}))(g),b=a(21),F=a(8),L=a.n(F);var M=function(e){var t=null;return e.SearchResult&&e.SearchResult.length>0&&!e.ShowResult?t=e.SearchResult.map((function(t){return n.a.createElement(p.b,{key:t.id,to:{pathname:"/SuperHero/"+t.id},className:L.a.Result},n.a.createElement("li",{onClick:e.toggle},t.name))})):e.SearchResult&&0===e.SearchResult.length&&!e.SearchResult&&(t=n.a.createElement("li",null,"No Result Found")),n.a.createElement("div",{className:L.a.NavigationBar},n.a.createElement("div",{className:L.a.NavTabs},n.a.createElement(p.c,{exact:!0,to:"/",className:L.a.NavTab,activeClassName:L.a.Active_NavTab},"Home"),n.a.createElement(p.c,{exact:!0,to:"/FavoriteList",className:L.a.NavTab,activeClassName:L.a.Active_NavTab},"FavoriteList")),n.a.createElement("div",{className:L.a.SearchResult},n.a.createElement("input",{type:"text",name:"SearchResult",onChange:e.change}),n.a.createElement("button",{onClick:e.click,disabled:""===e.SearchText},"Search Your Favourite SuperHero"),n.a.createElement("div",{className:L.a.SearchResultBox},n.a.createElement("ul",{className:L.a.SearchResultList},t))))},R=a(25),I=a.n(R);var O=function(e){return n.a.createElement("div",{className:I.a.SuperHeroCard},n.a.createElement("div",{className:I.a.SuperHeroCard__Name},n.a.createElement("div",null,e.Hero.name),n.a.createElement("div",null,e.Mylist?n.a.createElement("i",{class:"fas fa-minus-circle",onClick:function(){e.toggleNotification(e.Hero.name+" Successfully Removed from MyList"),e.remove(e.Hero.id)}}):null,e.Favlist?n.a.createElement("i",{class:"fas fa-heart",style:{color:"white"},onClick:function(){e.toggleNotification(e.Hero.name+" Successfully Removed from Favorite SuperHeroes List"),e.remove(e.Hero.id)}}):null)),n.a.createElement("div",{className:I.a.SuperHeroCard__Img},n.a.createElement("img",{src:e.Hero.image.url,onClick:function(){return e.click(e.Hero.id)}})))},w=a(26),C=a.n(w);var T=function(e){var t;return t=e.Heros.map((function(t){return n.a.createElement(O,{key:t.id,Hero:t,click:e.click,remove:e.remove,Mylist:!0,toggleNotification:e.toggleNotification})})),n.a.createElement("div",{className:C.a.Mylist__Cnt},n.a.createElement("div",{className:C.a.Mylist__Cnt__Heading},n.a.createElement("h3",null,"My List of SuperHeros")),n.a.createElement("div",{className:C.a.Mylist},t))},j=a(27),k=a.n(j),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:k.a.FavList},n.a.createElement("div",{className:k.a.FavListHeading},"Favorite SuperHeros List"),this.props.FavoriteList.map((function(t){return n.a.createElement(O,{Hero:t,toggleNotification:e.props.toggleNotification,key:t.id,click:e.props.click,Favlist:!0,remove:e.props.OnRemoveFromFavList})})),0===this.props.FavoriteList.length?n.a.createElement("div",{className:k.a.EmptyFavList},"No Favorite Heroes to Show"," "):null)}}]),a}(r.Component),A=Object(S.b)((function(e){return{FavoriteList:e?e.FavoriteList:[]}}),(function(e){return{OnRemoveFromFavList:function(t){e(d(t))}}}))(P),x=a(43),B=a.n(x),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onSearchChangeHandler=function(e){var t=e.target.value;v.a.get("https://www.superheroapi.com/api.php/10219177700206566/search/"+r.state.SearchText).then((function(e){var a=Object(b.a)(r.state.SearchResult);e.data.results&&e.data.results.length>0&&(a=e.data.results),r.setState({SearchResult:a,SearchText:t,ShowResult:!1})})).catch((function(e){console.log(e)}))},r.onSubmitSearchHandler=function(){v.a.get("https://www.superheroapi.com/api.php/10219177700206566/search/"+r.state.SearchText).then((function(e){console.log(e),r.setState({SearchText:"",ShowResult:!0,SearchResult:e.data.results})})).catch((function(e){console.log(e)}))},r.onSuperHeroInfoHandler=function(e){r.props.history.push("/SuperHero/"+e)},r.onRemoveFromMyListHandler=function(e){r.props.onRemoveFromMyList(e)},r.ontoggleSearchResult=function(){r.setState({ShowResult:!0})},r.toggleNotificationHandler=function(e){setTimeout((function(){r.setState({showNotification:!1})}),6e3),r.setState({showNotification:!0,NotificationContent:e})},r.state={SearchText:"",SearchResult:[],ShowResult:!1,showNotification:!1,NotificationContent:""},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchMyList()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:B.a.MainPage},this.state.showNotification?n.a.createElement(N,{show:this.state.showNotification},this.state.NotificationContent):null,n.a.createElement(M,{toggle:this.ontoggleSearchResult,ShowResult:this.state.ShowResult,SearchResult:this.state.SearchResult,change:this.onSearchChangeHandler,click:this.onSubmitSearchHandler,SearchText:this.state.SearchText}),n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/SuperHero/:id",component:y}),n.a.createElement(m.a,{exact:!0,path:"/FavoriteList",render:function(){return n.a.createElement(A,{click:e.onSuperHeroInfoHandler,toggleNotification:e.toggleNotificationHandler})}}),n.a.createElement(m.a,{path:"/",render:function(){return n.a.createElement(T,{toggleNotification:e.toggleNotificationHandler,Heros:e.props.Mylist,click:e.onSuperHeroInfoHandler,remove:e.onRemoveFromMyListHandler})}})))}}]),a}(r.Component),D=Object(S.b)((function(e){return console.log("state is ",e),{Mylist:e?e.Mylist:[]}}),(function(e){return{onFetchMyList:function(){return e((function(e){v.a.get("https://www.superheroapi.com/api.php/10219177700206566/search/batman").then((function(t){console.log("result data is ",t.data),e({type:"FETCH_MYLIST_DEFAULT_ITEMS_FAIL",MyList:t.data.results})})).catch((function(t){console.log(t),e(function(e){return{type:"FETCH_MYLIST_DEFAULT_ITEMS_FAIL",error:e}}(t))}))}))},onRemoveFromMyList:function(t){return e({type:"REMOVE_SUPERHERO_FROM_MYLIST",SuperHeroId:t})}}}))(U),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(m.a,{to:"/",component:D})))}}]),a}(n.a.Component),V=a(44),Z=a(20),G=a(9),X={Mylist:[],FavoriteList:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MYLIST_DEFAULT_ITEMS_FAIL":return Object(G.a)(Object(G.a)({},e),{},{Mylist:t.MyList});case"ADD_SUPERHERO_TO_MYLIST":var a=Object(b.a)(e.Mylist);return a.push(t.SuperHero),Object(G.a)(Object(G.a)({},e),{},{Mylist:a});case"REMOVE_SUPERHERO_FROM_MYLIST":var r=e.Mylist.filter((function(e){return e.id!==t.SuperHeroId}));return Object(G.a)(Object(G.a)({},e),{},{Mylist:r});case"ADD_SUPERHERO_TO_FAVLIST":var n=Object(b.a)(e.FavoriteList);return n.push(t.SuperHero),Object(G.a)(Object(G.a)({},e),{},{FavoriteList:n});case"REMOVE_SUPERHERO_FROM_FAVLIST":var i=e.FavoriteList.filter((function(e){return e.id!==t.SuperHeroId}));return Object(G.a)(Object(G.a)({},e),{},{FavoriteList:i})}},z=Object(Z.c)(Q,Object(Z.a)(V.a));o.a.render(n.a.createElement(S.a,{store:z},n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null))),document.getElementById("root"))},8:function(e,t,a){e.exports={NavigationBar:"NavigationBar_NavigationBar__3u_ao",SearchResult:"NavigationBar_SearchResult__16KHQ",NavTabs:"NavigationBar_NavTabs__32VSE",Result:"NavigationBar_Result__2srum",NavTab:"NavigationBar_NavTab__2rZXQ",Active_NavTab:"NavigationBar_Active_NavTab__16BvQ",SearchResultList:"NavigationBar_SearchResultList__1REk7"}}},[[45,1,2]]]);
//# sourceMappingURL=main.eccef550.chunk.js.map