
   
    
     var arrayPrd = JSON.parse(localStorage.getItem('array'));
    listProduct = arrayPrd.map(item => {
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
