// let tabItem = document.getElementsByClassName('tab-item'),
//     contentItem = document.getElementsByClassName('content-item');

// for (let i = 0; i < tabItem.length; i++) {
//     tabItem[i].onclick = function () {
//         for (let j = 0; j < tabItem.length; j++) {
//             tabItem[j].className = 'tab-item';
//             contentItem[j].className = 'content-item';
//         };
//         tabItem[i].className = 'tab-item cur';
//         contentItem[i].className = 'content-item active';
//     }
// }

//下面尝试着来封装一下插件吧
// ; (function () {
//     //第一步：获取属性
//     let Tab = function (opt) {
//         this.tabs = document.getElementsByClassName(opt.tabItem);
//         this.pages = document.getElementsByClassName(opt.contentItem);
        
//         //方法调用传参
//         this.btnClick(opt.tabItem, opt.contentItem, opt.cur, opt.active);
//     }

//     //第二步：将相关方法放在原型上
//     Tab.prototype = {
//         btnClick(tabItem, contentItem, cur, active) {
//             let tabs = this.tabs;
//             let pages = this.pages;
//             for (let i = 0; i < tabs.length; i++) {
//                 tabs[i].onclick = function () {
//                     for (let j = 0; j < tabs.length; j++) {
//                         tabs[j].className = tabItem;
//                         pages[j].className = contentItem;
//                     }
//                     tabs[i].className = tabItem + ' ' + cur;
//                     pages[i].className = contentItem + ' ' + active;
//                 }
//             }
//         }
//     }

//     //将其挂载到window就行了
//     window.Tab = Tab;
// })();

//下面让我们再次来尝试封装一下这个插件
; (function () {
    //第一步：获取到属性
    function Tab(opt) {
        this.tabs = document.getElementsByClassName(opt.tabItem);
        this.pages = document.getElementsByClassName(opt.contentItem);
        
        this.btnClick(opt.tabItem, opt.contentItem, opt.cur, opt.active);
    }

    //将相关方法挂载到它的原型上面
    Tab.prototype = {
        btnClick(tabItem, contentItem, cur, active) {
            let tabs = this.tabs,
                pages = this.pages;
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].onclick = function () {
                    for (let j = 0; j < tabs.length; j++) {
                        tabs[j].className = tabItem;
                        pages[j].className = contentItem;
                    }
                    tabs[i].className = tabItem + ' ' + cur;
                    pages[i].className = contentItem + ' ' + active;
                }
            }
        }
    }

    //最后便是挂载到全局的window上面
    window.Tab = Tab;
})();