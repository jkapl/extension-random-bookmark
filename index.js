const myBookmarks = [];
let selectedBookmark = '';

chrome.bookmarks.getTree((bookmarks) => {
  console.log(bookmarks);
  getUrls(bookmarks);
  console.log(myBookmarks);
  selectedBookmark = getBookmark(myBookmarks);
  console.log(selectedBookmark)
  chrome.tabs.create({url: selectedBookmark, active: true})
})


function getUrls (nodeArr) {
  for (let i =0; i < nodeArr.length; i++) {
    if (nodeArr[i].children) {
      getUrls(nodeArr[i].children)    
    } else {
      myBookmarks.push(nodeArr[i].url)
    }
  }
}

function getBookmark(bookmarks) {
  return bookmarks[Math.floor(Math.random() * bookmarks.length)]
}