$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
               //  create.json.jbuilderのファイルにて変数を設定
      `<div class="message">
         <div class="message__upper-info">
           <div class="message__upper-info__talker">
             ${message.user_name}
           </div>
           <div class="message__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
           <p class="message__text__text">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="message__upper-info">
           <div class="message__upper-info__talker">
             ${message.user_name}
           </div>
           <div class="message__upper-info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="message__text">
           <p class="message__text__text">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')

//  submitボタンを押したあと、data-disable-with:２回目の投稿無効化がh生成されるhtmlに発生するので、removeAttrで除去する
 $('.form__submit').removeAttr('data-disable-with');

 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    // .messagesのhtmlをappendによってhtmlを生成
    $('.messages').append(html);
    // formのデータをリセットして空白にする
    $('form')[0].reset();
    // .messageのクラスにjQueryのanimateメソッドを利用し、自動スクロールを設定
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})
});