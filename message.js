
var APP_ID = 'y9pqCDHVvvruKF9QLYeJi7sJ-gzGzoHsz';
var APP_KEY = 'dARBPSrnnmCr7DuECVL3hyMq';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


let myForm = document.querySelector('#postMessageForm')

//监听form的submit

myForm.addEventListener('submit', function(e){
    e.preventDefault()

   let content = myForm.querySelector('input[name=content]').value
   let name = myForm.querySelector('input[name=name]').value
   var Message = AV.Object.extend('Message');
   var message = new Message()
   message.save({
    'name': name,
    'content': content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`//一起展示name和content
    //attributes 曾出错写成attribute
    let messageList = document.querySelector('#messageList')
    //为了不适用全局变量
    messageList.append(li)
    
  }).then(()=>{
     
    myForm.querySelector('input[name=content]').value = ''
  })
})
//从储存地方取出信息
var query = new AV.Query('Message');
query.find().then(function (messages) {
  let array = messages.map((item)=> item.attributes )
  array.forEach((item)=>{
      let li = document.createElement('li')
      li.innerText = `${item.name}: ${item.content}`//一起展示name和content
      let messageList = document.querySelector('#messageList')
      //为了不适用全局变量
      messageList.append(li)
      cosole.log(3)
      
  })
}, function (error) {
  alert('提交失败 请待会再试')
})
/*
    var TestObject = AV.Object.extend('message');
    var testObject = new TestObject();
    testObject.save({
    'content': content
    }).then(function(object) {
    console.log(object)
}) */ 
