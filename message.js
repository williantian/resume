!function () {
    var view = document.querySelector('section.message')

    var model = {
        //获取数据
      fetch: function(){
        var query = new AV.Query('Message');
        return query.find()//promise对象
      },
      save: function(name, content){
          //创建数据
        var Message = AV.Object.extend('Message');
        var message = new Message();
        return message.save({   ///prommise对象
            'name': name,
            'content': content
        })
      }
    }
    var controller = {
        view: null,
        messageList: null,
        init: function () {
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'y9pqCDHVvvruKF9QLYeJi7sJ-gzGzoHsz';
            var APP_KEY = 'dARBPSrnnmCr7DuECVL3hyMq';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        loadMessages: function () {
                model.fetch().then((messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`//一起展示name和content
                        //为了不适用全局变量
                        this.messageList.append(li)
                        //现在DOM升级支持append和appendChild两个API
                    })
                })
        },
        bindEvents: function () {
            //监听form的submit
            this.form.addEventListener('submit', (e)=> {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
           model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`//一起展示name和content
                //attributes 曾出错写成attribute
                let messageList = document.querySelector('#messageList')
                //为了不适用全局变量
                messageList.append(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }

    }

    controller.init(view)
}.call()




//从储存地方取出信息

/*
    var TestObject = AV.Object.extend('message');
    var testObject = new TestObject();
    testObject.save({
    'content': content
    }).then(function(object) {
    console.log(object)
}) */
