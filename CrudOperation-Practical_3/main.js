const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
async function readformData(){
    let array = JSON.parse(localStorage.getItem("data")) ?? [];
    formData = {};
    formData['product_id'] = Math.floor(Math.random() * 1000)
    formData['ProductName'] = document.getElementById('productName').value
    formData['ProductPrice'] = document.getElementById('productPrice').value
    formData['Image'] = await convertBase64(document.getElementById('Image').files[0]);
    formData['description'] = document.getElementById('description').value
   
    array.push(formData)
    localStorage.setItem("data", JSON.stringify(array));
    displayData();
}
window.onload = displayData();
function displayData(){
    let obj = JSON.parse(localStorage.getItem("data")) ?? [];
    let data = '';
    let filterData = '<option class="text-dark" value="all">ALL</option>';
    obj.forEach((product) =>{
        data += ` <div class="card m-2 col-lg-3 col-md-6 col-sm-12 col-8" >
      
        <img class="card-img-top mt-3"" src="${product.Image}" alt="Card image cap" style="width:100%; height:60%" >
        <div class="card-body">
          <h5 class="card-title Card-text">${product.ProductName}</h5>
          <p class="card-text Card-text">${product.ProductPrice}</p>
          <p class="card-text Card-text">${product.description}</p>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#update-product-modal" onclick="updateProduct(${product.product_id})">update </button>
          <button class="btn-danger btn " onclick="deleteProduct(${product.product_id})">Delete</button>
        </div>
      </div>`

        filterData += `<option class="text-dark" value="${product.product_id}">${product.product_id}(${product.ProductName})</option>`
      
    })
    document.getElementById('filter-select-input').innerHTML = filterData;
    document.getElementById('products-display').innerHTML = data;
}
function displayData1(products){
    let obj = products
    let data = '';

    obj.forEach((product) =>{
        data += ` <div class="card m-2 col-lg-3 col-md-6 col-sm-12 col-8">
        <img class="card-img-top mt-3"" src="${product.Image}" alt="Card image cap ">
        <div class="card-body">
          <h5 class="card-title Card-text">${product.ProductName}</h5>
          <p class="card-text Card-text">${product.ProductPrice}</p>
          <p class="card-text Card-text">${product.description}</p>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#update-product-modal" onclick="updateProduct(${product.product_id})">update </button>
          <button class="btn-danger btn " onclick="deleteProduct(${product.product_id})">Delete</button>
        </div>
      </div>`

     
      
    })

    document.getElementById('products-display').innerHTML = data;
}

 
function deleteProduct(indx){
  
    let array = JSON.parse(localStorage.getItem("data")) ?? [];
    array = array.filter((ele)=>indx!==ele.product_id )

    localStorage.setItem("data", JSON.stringify(array));
    displayData();
}

function    updateProduct(pid){ console.log("update",document.getElementById("update-productName"));
    let array = JSON.parse(localStorage.getItem("data")) ?? [];
    const elem = array.filter((ele)=>pid===ele.product_id );
   
    (document.getElementById("update-productName")).value=elem[0].ProductName;
    (document.getElementById("update-productPrice")).value=elem[0].ProductPrice;
    (document.getElementById('update-description')).value=elem[0].description;
    





  
    (document.getElementById('hiddentproductid')).value=elem[0].product_id;

}
 async function updateData(){
    const id =(document.getElementById('hiddentproductid')).value
   
    let imagess = null;
    if(document.getElementById('update-Image').files[0]){
        imagess= await convertBase64(document.getElementById('update-Image').files[0]);
    }
    let array = JSON.parse(localStorage.getItem("data")) ?? [];
    array = array.map((ele)=>{
        formData={}
        if(ele.product_id===parseInt(id)){
          
            if(imagess!==null){
                ele.Image = imagess;
            }
             ele.ProductName=(document.getElementById('update-productName')).value
             ele.ProductPrice=(document.getElementById('update-productPrice')).value
             ele.description = (document.getElementById('update-description')).value
        }
        
        return ele;

    })
    
    formData['product_id'] = Math.floor(Math.random() * 1000)
    localStorage.setItem("data", JSON.stringify(array));
    displayData();

}

function filterProducts(filterValue){
    let filteredProducts;
    products = JSON.parse(localStorage.getItem("data")) ?? [];
    if(filterValue == '' || filterValue == 'all'){
        filteredProducts = products;
    }else{
        filteredProducts = products.filter((product) => product.product_id == filterValue);
    }

    displayData1(filteredProducts);
}
function searchProducts(){
    const search_val = document.querySelector('#serachProductText').value;
 
    let sortedItem=[];
    let products = JSON.parse(localStorage.getItem("data")) ?? [];
    let regex = new RegExp(search_val, "i")
    for (let element of products) {
        const item = element;
        if (regex.test(item.ProductName) ) {
            sortedItem.push(element);
        }
    }
  
    displayData1(sortedItem);
}


const select = document.getElementById('hiddentproductid')
document.querySelector('#filter-select-input').addEventListener('input',filterproduct)


function filterproduct(){
    const filterinput = document.querySelector('#filter-select-input')
    const filter = filterinput.value.toLowerCase();
    const listitem =  document.querySelectorAll('.filter-select-input')

listitem.forEach((item)=>{
    let text = item.textContent
    if(text.toLowerCase().includes(filter.toLowerCase())){
        item.style.displayData = '';

    }
    else{
        item.style.display = "none";
    }
})
}






function sortProducts(sortValue){
    
    let SortProducts=JSON.parse(localStorage.getItem("data")) ?? [];;
    

    if(sortValue==='ProductName'){
   
        SortProducts=SortProducts.sort((a,b)=>a.ProductName.localeCompare(b.ProductName))
    }
    else if(sortValue==='ProductId'){
       
        SortProducts=SortProducts.sort((a,b)=>a.product_id-b.product_id)

    }
    else if(sortValue==='hl'){
        SortProducts=SortProducts.sort((a,b)=>b.ProductPrice-a.ProductPrice)
    }
    else{
        SortProducts=SortProducts.sort((a,b)=>a.ProductPrice-b.ProductPrice)

    }

    localStorage.setItem("data", JSON.stringify(SortProducts));

    displayData();
}