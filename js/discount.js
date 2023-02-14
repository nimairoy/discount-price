
document.getElementById('button').addEventListener('click', function(){
    let price = Number(document.getElementById('inputPrice').value);
    let discount = Number(document.getElementById('discountPrice').value);
    const total = price - (price*discount/100);

    document.getElementById('inputPrice').value = "";
    document.getElementById('discountPrice').value = "";
    
    document.getElementById('displayInput').value = total.toFixed(2);
})