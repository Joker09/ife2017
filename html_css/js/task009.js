(function () {
  // 搜索指数排行
  window.addEventListener('load', function () {
    var data = [0.9, 0.8, 0.7, 0.65, 0.6, 0.54, 0.4, 0.3, 0.2, 0.1];
    var nodes = Array.from(document.querySelectorAll(".progress"));
    var w = nodes[0].offsetWidth;
    nodes.forEach(function (node, index) {
      node.style.borderLeftWidth = w * data[index] + "px";
    });
  });
})();

(function () { 
  // slider
  window.addEventListener('load', function () {
    var prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn'),
      slider = document.querySelector('.slider'),
      wrapper = slider.querySelector('ul'),
      items = Array.from(wrapper.querySelectorAll('li'));
    
    var itemWidth = items[0].offsetWidth,
      gap = parseInt(window.getComputedStyle(items[0]).marginRight),
      sliderWidth = slider.offsetWidth,
      initialLeft = parseInt(window.getComputedStyle(wrapper).left);
    
    // 初始化
    wrapper.style.width = items.length * (itemWidth + gap);
    var index = 0,
        offset =  Math.floor(sliderWidth/(itemWidth + gap)) ;

    function show(index) { 
      wrapper.style.left = (initialLeft - index * (itemWidth + gap)) + 'px';
    }
    function next() {
      if (index >= items.length - offset) {
        index = 0;
      } else { 
        index += 1;
      }
      show(index);
    }

    function prev() {
      index = index <= 0 ? items.length - offset : index - 1;
      show(index);
    }

    prevBtn.addEventListener('click', function () {
      prev();
    });
    nextBtn.addEventListener('click', function () {
      next();
    });
  });
})();

(function () {
  // tab
  window.addEventListener('load', function () {
    var tab = document.querySelector(".tabs"),
      tabs = Array.from(tab.querySelectorAll('li')),
      contents = Array.from(document.querySelectorAll('.content-inner .tabs-content'));
    tabs.forEach(function (item, i) { 
      item.index = i;
    })
    tab.addEventListener('click', function (e) {
      if (e.target.nodeName.toLowerCase() === 'li'){
        tabs.forEach(function (item) {
          item.classList.remove('active');
        })
        contents.forEach(function (item) {
          item.classList.remove('current');
        });
        contents[e.target.index].classList.add('current');
        e.target.classList.add('active');
      }
    })

  });
})();


(function () {
  // selcect
  window.addEventListener('load', function () {
    var select = Array.from(document.querySelectorAll('.select'));
    select.forEach(function (item,index, arr) { 
      var options = item.querySelector('.options'),
        optionsItem = Array.from(options.querySelectorAll('li')),
        placeHolder = item.querySelector('.placeholder');
      item.addEventListener('click', function () {
        if (window.getComputedStyle(options).display === 'block') {
          options.style.display = 'none';
        } else { 
          options.style.display = 'block';
        }
      });
      options.addEventListener('click', function (e) {
        e.stopPropagation();
        if(e.target.nodeName.toLowerCase() === 'li'){
          placeHolder.innerHTML = e.target.innerHTML;
          this.style.display = 'none';
        }
      });

    })
  });
})();

(function () {
  // 左侧menu 菜单展开
  window.addEventListener('load', function () {
    var menu = document.querySelector('.menu'),
      c = Array.from(menu.querySelectorAll('.haschild'));
    
    c.forEach(function (item, index, arr) {
      item.child = item.parentElement.querySelector('ul');
      if (item.child){ 
        item.addEventListener('click', function () {
          if (window.getComputedStyle(item.child).display === 'block') {
            item.child.style.display = 'none';
          } else { 
            item.child.style.display = 'block';
          }
        });
      }
    });
  });
})();