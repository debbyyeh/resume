$(document).ready(function () {
  $('.working p').click(function (event) {
    // 動態加入active樣式
    $(this).toggleClass('active')
    //    找到父層裡面要出現的元素
    $(this).parent().find('div').slideToggle()

    //    別人的內容收起來
    $(this).parent().siblings().find('div').slideUp()
    //    移除別人的樣式
    $(this).parent().siblings().find('p').removeClass('active')
  })
})
