
   
    
   
    
     var arrayPrd = JSON.parse(localStorage.getItem('array'));

    // khai báo Hàm render() 1 danh sách sản phẩm sang html cho thẻ html
     function render(arrayItem) {
        let listProduct = arrayItem.map(item => {
            return(  
                `<div class="item">
                            <div class="box_prd">
                                <div class="img-prd">
                                    <img src="${item.image}">
                                </div>
                                <div class="info_prd">
                                    <h2>${item.name}</h2>
                                    <h3>${item.price}<span>đ</span></h3>
                                    <button class="btn">THÊM VÀO GIỎ </button>
                                </div>
                            </div>
                        </div> `
                ) 
        });
        var htmlList = listProduct.join('');
        console.log(htmlList);
        document.querySelector('.prd .owl-carousel').innerHTML = htmlList;  
     }

    // gọi hàm render() để sử dụng , truyền mảng sản phẩm (arrayPrd) vào làm biến của hàm render()
    render(arrayPrd);


    

