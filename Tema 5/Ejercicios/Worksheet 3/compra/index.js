    function editProduct() {
        nuevo = prompt("Introduce el nuevo nombre del producto");
        if (nuevo != null) {
            product_div.innerHTML = product_div.innerHTML.replace(product_name, nuevo);
            localStorage.setItem("list", nuevo);
        }
    }

    function addProduct(e) {
        product_name = document.getElementsByName('product')[0].value;

        product_div = document.createElement('div');
        product_div.style.width = '40vw';
        edit_img = document.createElement('img');
        edit_img.src = 'editar.png';
        trash_img = document.createElement('img');
        trash_img.src = 'basura.png';
        trash_img.onclick = () => { product_div.remove() };
        edit_img.onclick = () => { editProduct() };
        div = document.createElement('div');

        div.appendChild(edit_img);
        div.appendChild(trash_img);

        product_div.innerHTML = product_name;
        product_div.classList.add('product');
        product_div.appendChild(div);
        shopping_list_div.appendChild(product_div);
        //guardamos el producto en el localstorage
        localStorage.setItem("list", product_name);

    }
    window.onload = () => {
        shopping_list_div = document.getElementById('products')
        add_btn = document.getElementById('add_img');
        add_btn.onclick = addProduct;
        clear_btn = document.getElementById('clear');
        clear_btn.onclick = () => {
            products = document.getElementsByClassName('products');
            console.log(products);
            for (product of products) {
                console.log(product);
                product.remove();
            }
        }
        if(localStorage.getItem("list") != null){
            product_div = document.createElement('div');
            product_div.style.width = '40vw';
            edit_img = document.createElement('img');
            edit_img.src = 'editar.png';
            trash_img = document.createElement('img');
            trash_img.src = 'basura.png';
            trash_img.onclick = () => { product_div.remove() };
            edit_img.onclick = () => { editProduct() };
            div = document.createElement('div');
    
            div.appendChild(edit_img);
            div.appendChild(trash_img);
    
            product_div.innerHTML = localStorage.getItem("list");
            product_div.classList.add('product');
            product_div.appendChild(div);
            shopping_list_div.appendChild(product_div);
        }
    }
