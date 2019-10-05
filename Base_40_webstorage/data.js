var items = [];

//创建商品数据
function createItemsData(number) {
    for (let i = 0; i < number; i++) {
        items.push(
            {
                id: i,
                title: "item" + i,
                price: i
            }
        );
    }
    return items;
}
//获取商品数据
function getItemsData() {
    return items;
}

//创建商品元素
function createItemElement(id, title, price) {
    var ele = document.createElement("div");
    ele.setAttribute("class", "item");
    ele.setAttribute("index", id);
    var innerHtml = '<div class="title">' + title + '</div>' +
        '<div class="price">' + price + '</div>' +
        '<div class="buyBtn">加入购物车</div>';
    ele.innerHTML = innerHtml;
    ele.lastChild.addEventListener("click", addToCart);
    return ele;
}
//更新商品条目界面
function updateItemsInterface() {
    var itemsData = getItemsData();
    var length = itemsData.length;
    var container = document.getElementsByClassName("itemlist")[0];

    //先清除元素
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    //再加入元素
    for (let i = 0; i < length; i++) {
        container.appendChild(
            createItemElement(
                itemsData[i].id,
                itemsData[i].title,
                itemsData[i].price
            )
        );
    }
}

//初始化local storage
function initialLocalStorage() {
    if (localStorage.getItem("cartObject") == null) {
        var cartObject = {
            'cartData': [],
            'enable': true
        }
        localStorage.setItem("cartObject", JSON.stringify(cartObject));
        return true;
    }
    return false;
}

//获取购物车数据
function getCartData() {

    var cartObj = JSON.parse(localStorage.getItem("cartObject"));
    return cartObj.cartData;
}

//设置购物车数据

function setCartData(data) {
    var cartObj = JSON.parse(localStorage.getItem("cartObject"));
    cartObj.cartData = data;
    localStorage.setItem("cartObject", JSON.stringify(cartObj))
}

//查找某id的物品在购物车中的位置

function findCartItemIndex(itemId) {
    //不在则返回-1，存在则返回它在数组中的下标
    var cartData = getCartData();
    if (cartData.length == 0) {
        //购物车为空
        return -1;
    }
    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id == itemId) {
            return i;
        }
    }
    return -1;
}
//添加一个物品进入购物车，写入localstorage，并通知界面更新。
function addToCart(event) {
    //获取是点击了哪个货物
    var ele = event.target.parentNode;
    var itemId = ele.getAttribute("index");

    //获取cartData数组
    var cartData = getCartData();

    //如果之前没添加过，那么就创建一个对象加入进去
    var itemIndex = findCartItemIndex(itemId);
    if (itemIndex == -1) {
        cartData.push({
            id: itemId,
            title: items[itemId].title,
            price: items[itemId].price,
            number: 1
        });
        console.log(cartData.length);
    }
    //如果之前添加过，那么直接修改Num值。
    else {
        cartData[itemIndex].number++;
    }

    //修改本地存储
    setCartData(cartData);
    //通知界面更新
    updateCartInterface();
}

//从购物车中删除一个物品
function deleteFromCart(event) {
    //获取是点击了哪个货物
    var ele = event.target.parentNode;
    var itemId = ele.getAttribute("index");
    //获取购物车数据
    var cartData = getCartData();
    //找到要删除的购物车item在数组中的位置
    var itemIndex = findCartItemIndex(itemId);
    //删除该项目
    cartData.splice(itemIndex, 1);
    //修改本地存储
    setCartData(cartData);
    //通知界面更新
    updateCartInterface();

}

//从购物车中减少一个物品的数量
function subtractFromCart(event) {
    //获取是点击了哪个货物
    var ele = event.target.parentNode;
    var itemId = ele.getAttribute("index");
    //获取购物车数据
    var cartData = getCartData();
    //找到要减少数量的购物车item在数组中的位置
    var itemIndex = findCartItemIndex(itemId);
    if (cartData[itemIndex].number == 1) {
        //如果数量等于1，相当于删除
        cartData.splice(itemIndex, 1);
    }
    else {
        //否则减一
        cartData[itemIndex].number--;
    }
    //修改本地存储
    setCartData(cartData);
    //通知界面更新
    updateCartInterface();

}

//创建shoppingcart item元素

function createCartItemElement(no, title, price, number) {
    var ele = document.createElement("div");
    ele.setAttribute("class", "cartitem");
    ele.setAttribute("index", no);
    var innerHtml =
        '<span>' + title + '</span>' +
        '<span>' + "$" + price + '</span>' +
        '<span>' + "数量：" + number + '</span>' +
        '<span class="clearBtn">×</span>' +
        '<span class="subBtn">-</span>';
    ele.innerHTML = innerHtml;
    ele.lastChild.previousSibling.addEventListener("click", deleteFromCart);
    ele.lastChild.addEventListener("click",subtractFromCart);
    return ele;

}

//读取本地数据实现界面更新
function updateCartInterface() {
    //读取localstorage里的数据
    var cartData = getCartData();
    //先清除cart里的所有内容
    var shoppingCartEle = document.getElementsByClassName("shoppingCart")[0];
    while (shoppingCartEle.hasChildNodes()) {
        shoppingCartEle.removeChild(shoppingCartEle.lastChild);
    }

    //初始化购物车头部外观
    var ele = document.createElement("div");
    ele.setAttribute("class", "line");
    shoppingCartEle.append(ele);
    var ele = document.createElement("div");
    ele.setAttribute("class", "carticon iconfont icon-iconset0308");
    shoppingCartEle.append(ele);
    var ele = document.createElement("div");
    ele.setAttribute("class", "cartblock");
    shoppingCartEle.append(ele);

    //再插入新的cart item
    for (x in cartData) {
        var itemData = cartData[x];
        var itemEle = createCartItemElement(
            itemData.id,
            itemData.title,
            itemData.price,
            itemData.number
        );
        shoppingCartEle.append(itemEle);

    }
}

