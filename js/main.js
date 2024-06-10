var inputBookMarkName = document.getElementById("bookmarkName");
var inputBookMarkUrl = document.getElementById("bookmarkUrl");
var contentBody = document.getElementById("contentBody");
var bookmarkArr = [];

function addBookMark() {

    if (inputBookMarkName.value == '') {
        alert("please enter the bookmark name")
        return;
    }
    if (inputBookMarkName.value.length < 3) {
        alert("the bookmark name less than 3 letters")
        return;
    }

    if (inputBookMarkUrl.value == '') {
        alert("please enter the bookmark Url")
        return;
    }

    if(regExCheck(inputBookMarkUrl.value) == false)
        {
            alert("wrong url entery")
        }

    var bookmark = {
        bookMarkName: inputBookMarkName.value,
        bookMarkUrl: inputBookMarkUrl.value
    };
    bookmarkArr.push(bookmark);
    
    displayItem();
    
    
    // console.log(bookmarkArr);
}

function deleteItem(index)
{
    bookmarkArr.splice(index,1);
    displayItem();
}
function displayItem()
{
    var rows ='';
    for(let i = 0; i < bookmarkArr.length; i++)
    {
        rows += `
           <tr>
           <td><label for="">${i}</label></td>
           <td><label for="">${bookmarkArr[i].bookMarkName}</label></td>
           <td> <a href="${bookmarkArr[i].bookMarkUrl}" target="_blank" class="btn btn-success">Visit</a></td>
           <td> <button onclick="deleteItem(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`;
    }
    contentBody.innerHTML = rows;
}
function regExCheck(url) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const regex = new RegExp(expression);

    if (url.match(regex)) {
        return true;
    } else {
       return false;
    }
}
