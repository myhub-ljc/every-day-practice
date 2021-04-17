let tabItem = document.getElementsByClassName('tab-item'),
    contentItem = document.getElementsByClassName('content-item');

for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].onclick = function () {
        for (let j = 0; j < tabItem.length; j++) {
            tabItem[j].className = 'tab-item';
            contentItem[j].className = 'content-item';
        };
        tabItem[i].className = 'tab-item active';
        contentItem[i].className = 'content-item active';
    }
}
