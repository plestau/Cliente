function addProduct(e) {
    product_name = document.getElementsByName('product')[0].value;

    product_div = document.createElement('div');
    product_div.style.width = '40vw';
    pencil_img = document.createElement('img');
    pencil_img.src = 'editar.png';
    trash_img = document.createElement('img');
    trash_img.src = 'basura.png';
    trash_img.onclick = () => { product_div.remove() };
    div = document.createElement('div');

    div.appendChild(pencil_img);
    div.appendChild(trash_img);

    product_div.innerHTML = product_name;
    product_div.classList.add('product');
    product_div.appendChild(div);
    shopping_list_div.appendChild(product_div);



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
    };
}
