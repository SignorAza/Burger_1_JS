let menu = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    light: {
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    cheeseburger: {
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    dburger: {
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
}


let burgerBtns = document.querySelectorAll('.wrapper__list-btn'),
    cartBtn = document.querySelector('.wrapper__navbar-btn'),
    cartList = document.querySelector('.wrapper__navbar-basket'),
    cartClose = document.querySelector('.wrapper__navbar-close'),
    cartAmount = document.querySelector('.warapper__navbar-count'),
    cartTotalPrice = document.querySelector('.wrapper__navbar-totalprice'),
    cartListItem = document.querySelector('.wrapper__navbar-checklist'),
    emp = document.querySelector('.empty'),
    tex = document.querySelector('.text');
burgerBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        addAmount(this)
            
    })
})

// burgerBtns.addEventListener('click', () => cartList.classList('active') )
    
function addAmount(btn) {
    // closest() - метод который позволяет подключатся к указаному ближайшему родителю
    // getAttribute() - метод который  позволяет получать данные любого указаного атрибута
    let parent = btn.closest('.wrapper__list-card');
    let id = parent.getAttribute('id')
    menu[id].amount++
    basket()
}


cartBtn.addEventListener('click', () => cartList.classList.add('active'))
cartBtn.addEventListener('click', () => tex.classList.add('active'))
cartClose.addEventListener('click', () => cartList.classList.remove('active'))
cartClose.addEventListener('click', () => tex.classList.remove('active'))

function basket() {
    let korzinka = []
    for(let key in menu) {
        let burger = menu[key]
        let productBurger = document.querySelector(`#${key}`)
        let productCount = productBurger.querySelector('.wrapper__list-count')
        if(burger.amount > 0) {
            korzinka.push(burger)
            productCount.classList.add('active')
            productCount.innerHTML = burger.amount
        }else {
            productCount.classList.remove('active')
            productCount.innerHTML = ''
        }
    }
    
    let allCount = totalAmount()
    
    if(allCount > 0) {
        cartAmount.classList.add('active')
        cartAmount.innerHTML = allCount
        cartListItem.classList.add('active')
        emp.innerHTML = ''
    }else {
        cartAmount.classList.remove('active')
        cartListItem.classList.remove('active')
        emp.innerHTML = 'Ваша корзинка снова пуста'
    }
    
    cartListItem.innerHTML = ''
    
    korzinka.forEach((burger) => {
        cartListItem.innerHTML += createBurger(burger)
    })
    
    cartTotalPrice.innerHTML = totalSumBurger()
    
}

function totalSumBurger() {
    let sum = 0;
    for(let key in menu) {
        sum += menu[key].totalSum
    }
    return sum + 'сумм'
}


function totalAmount() {
    let total = 0;
    for(let key in menu) {
        total += menu[key].amount
    }
    return total
}


function createBurger(burger) {
    return `<div class="nav__item" id="${burger.name.toLowerCase()}-item">
    <div class="nav__item-left">
        <img src="${burger.img}" alt="">
        <div class="nav__item-info">
            <p>${burger.name}</p>
            <p>${burger.totalSum} сум</p>
        </div>
    </div>
    <div class="nav__item-right">
        <button data-symbol="-"  class="nav__item-btn">-</button>
        <output class="nav__item-count">${burger.amount}</output>
        <button data-symbol="+"  class="nav__item-btn">+</button>
    </div>
</div>`
}


window.addEventListener('click', (event) => {
    if(event.target.classList.contains('nav__item-btn')) {
        let dataValue = event.target.getAttribute('data-symbol')
        let parentBurger = event.target.closest('.nav__item')
        if(parentBurger) {
            let id = parentBurger.getAttribute('id').split('-')[0]
            if(dataValue == '-') menu[id].amount--
            else if(dataValue == '+') menu[id].amount++
            basket()
        }
    }
})




let one = {
name: 'Aziz',
age : 23
}



let two = Object.assign({}, one);


two.name = 'something intersting';


console.log(two.name);

console.log(one.name);


