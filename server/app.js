const express = require('express')
const app = new express()
const Shop = require('./model/shop')
const Kind = require('./model/kind')
const User = require('./model/user')
const Car = require('./model/car')
const Ads = require('./model/address')
const fs = require('fs')
var bodyParser = require('body-parser')
const multer = require('multer')
// const cors = require('cors')
// app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use('/uploads', express.static('uploads'))

app.use(bodyParser.json())


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

var upload = multer({
  storage: storage
})



app.post('/user/login', function (req, res) {
  // req.session.token='加密算法生成随机token'
  // const data={"code":20000,"data":{"roles":["editor"],"token":req.session.token,"introduction":"I am a super administrator","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","name":"Super Admin"}}
  const data = {
    "code": 20000,
    "data": {
      "token": "asasasasas",
      "orangiseid": 'wwwwwwww',
      "introduction": "I am a super administrator",
      "avatar": "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2020-09-22/7afe3efb3e8fb391539e4e821e9ece28.jpg",
      "name": "Super Admin"
    }
  }
  res.json(data)
})
app.get('/user/info', function (req, res) {
  const data = {
    "code": 20000,
    "data": {
      "roles": ["editor"],
      "introduction": "I am a super administrator",
      "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      "name": "Super Admin"
    }
  }
  res.json(data)
})
app.post('/user/logout', function (req, res) {
  res.json({
    "code": 20000,
    "message": "success"
  })
})


//获取所有分类
app.get('/shop/getkind', (req, res) => {
  Kind.find().then(mon => {
    if (mon) {
      res.json({
        code: 20000,
        Kindlist: mon
      })
    }
  })
})

//上传图片
app.post('/shop/upload', upload.single('avatar'), function (req, res, next) {
  console.log(req.file)
  if (req.file) {
    res.json({
      code: 20000,
      imgUrl: req.file.path
    })
  }
})

// //添加商品
app.post('/shop/addshop', (req, res) => {
  const shop = new Shop(req.body);
  shop.save().then(mon => {
    if (mon) {
      res.json({
        code: 20000,
        msg: '添加成功'
      })
    }
  })
})


// 获取商品列表
app.get('/shop/getlist', async (req, res) => {
  const page = req.query.page || 1;
  const pagesize = req.query.pagesize || 3;
  const start = Number((page) - 1) * Number(pagesize);
  const nums = Number(pagesize);
  const total = await Shop.find();
  const result = await Shop.find().skip(start).limit(nums).populate('Kind');
  res.json({
    code: 20000,
    list: result,
    total: total.length
  })
})


//删除商品
app.delete('/shop/delshop/:id', (req, res) => {
  Shop.findByIdAndDelete(req.params.id).then(mon => {
    if (mon) {
      var filepath = mon.imgUrl;
      fs.unlink(filepath, (err) => {
        if (err) {
          console.log(err)
        }
      })
      res.json({
        code: 20000,
        msg: '删除数据成功'
      })
    }
  })
})




//获取对应id的商品信息
app.get('/shop/getthisshop/:id', async (req, res) => {
  var id = req.params.id;
  var result = await Shop.findById(id);
  var Kinds = await Kind.find();
  var thisKind = {};
  for (var i = 0; i < Kinds.length; i++) {
    if (String(result.kind) == String(Kinds[i]._id)) {
      thisKind = Kinds[i];
    }
  }
  res.json({
    code: 20000,
    list: result,
    Kindlist: Kinds,
    thisKind
  })
})


// //修改对应id的生鲜信息
app.put('/shop/putshop', (req, res) => {
  // console.log(req.body)
  var beforeimg = null;
  Shop.findById(req.body.shopid).then(mon => {
    beforeimg = mon.imgUrl;
    Shop.findByIdAndUpdate(req.body.shopid, req.body).then(aaa => {
      if (req.body.imgUrl != beforeimg) {
        fs.unlink(beforeimg, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
    })
    res.json({
      code: 20000,
      msg: '数据修改成功'
    })

  })
})



//前台

//获取全部分类
app.get('/kind/getkind', (req, res) => {
  Kind.find().then(mon => {
    if (mon) {
      res.json({
        code: 200,
        Kindlist: mon
      })
    }
  })
})


//获取全部商品信息
app.get('/kind/all', (req, res) => {
  Shop.find().populate('kind').exec(function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.json({
        code: 200,
        list: doc
      })
    }
  })
})


//获取对应id的商品信息
app.get('/main/getthis/:id', (req, res) => {
  Shop.findById(req.params.id).populate('kind').exec(function (err, doc) {
    if (err) {
      console.log(err)
    } else {
      res.json({
        code: 200,
        list: doc
      })
    }
  })
})

//上传用户头像
app.post('/login/upload', upload.single('avatar'), function (req, res, next) {
  if (req.file) {
    res.json({
      code: 200,
      imgUrl: req.file.path
    })
  }
})





//注册
app.post('/mine/zhuce', (req, res) => {
  console.log(req.body)
  User.find({
    username: req.body.username,
  }).then(mon => {
    // console.log(mon)
    if (mon == "") {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
        imgUrl: req.body.imgUrl
      })
      user.save().then(aaa => {
        if (aaa) {
          var car = new Car({
            username: req.body.username,
            list: []
          })
          car.save().then(aaa => {
            if (aaa) {
              var ads = new Ads({
                username: req.body.username,
                list: []
              })
              ads.save().then(bbb => {
                if (bbb) {
                  res.json({
                    code: 200,
                    success: 1,
                    msg: '用户创建成功'
                  })
                }
              })
            }
          })
        }
      })
    } else {
      res.json({
        code: 200,
        success: 0,
        msg: '用户名已存在'
      })
    }
  })
})

//验证登录
app.post('/mine/login', (req, res) => {
  User.find({
    username: req.body.username,
    password: req.body.password
  }).then(mon => {
    if (mon != "") {
      res.json({
        code: 200,
        success: 1,
        msg: '登录成功'
      })
    } else {
      res.json({
        code: 200,
        success: 0,
        msg: '用户名或密码错误'
      })
    }
  })
})
app.get('/mine/gettouxiang', (req, res) => {
  User.findOne({
    username: req.query.username
  }).then(mon => {
    if (mon) {
      res.json({
        code: 200,
        list: mon
      })
    }
  })
})

//添加收货地址接口
app.post('/mine/addads', (req, res) => {
  Ads.updateOne({
    username: req.body.username
  }, {
    $push: {
      list: {
        id: req.body.obj.id,
        name: req.body.obj.name,
        addressDetail: req.body.obj.addressDetail,
        areaCode: req.body.obj.areaCode,
        city: req.body.obj.city,
        country: req.body.obj.country,
        county: req.body.obj.county,
        isDefault: req.body.obj.isDefault,
        postalCode: req.body.obj.postalCode,
        tel: req.body.obj.tel,
        province: req.body.obj.province,
      }
    }
  }, function (err, res) {
    if (err) {
      return console.log(err)
    }
  }).then(mon => {
    res.json({
      code: 200,
      msg: '数据添加成功'
    })
  })
})

//获取当前收货地址
app.get('/mine/getthisads',(req,res)=>{
  // console.log(req.query)
  Ads.findOne({
    username:req.query.username
  }).then(mon=>{
    // console.log(mon.list)
    var data={}
    for(var i =0;i<mon.list.length;i+=2){
      if(mon.list[i].id==Number(req.query.id)){
        data=mon.list[i]
      }
    }
    res.json({
      code:200,
      data
    })
  })
})


//修改收货地址接口
app.put('/mine/putads', (req, res) => {
  Ads.updateOne({
    username: req.body.username,
    'list.id': req.body.obj.id
  }, {
    $set: {
      'list.$': {
        id: req.body.obj.id,
        name: req.body.obj.name,
        addressDetail: req.body.obj.addressDetail,
        areaCode: req.body.obj.areaCode,
        city: req.body.obj.city,
        country: req.body.obj.country,
        county: req.body.obj.county,
        isDefault: req.body.obj.isDefault,
        postalCode: req.body.obj.postalCode,
        tel: req.body.obj.tel,
        province: req.body.obj.province,
      }
    }
  }, function (err, res) {
    if (err) {
      return
    }
  }).then(mon => {
    res.json({
      code: 200,
      msg: '地址修改成功'
    })
  })
})


//删除收货地址
app.delete('/mine/delads', (req, res) => {
  console.log(req.query)
  Ads.updateOne({
    username: req.query.username,
  }, {
    $pull: {
      list: {
        id: Number(req.query.id) 
      }
    }
  }, function (err, res) {
    if (err) {
      return
    }

  }).then(mon => {
    if(mon){
        res.json({
      code: 200,
      msg: '地址删除成功'
    })
    }
  
  })
})


//获取用户全部收货地址
app.get('/mine/allads',(req, res) => {
  // console.log(req.query)
  Ads.findOne({
    username: req.query.username
  }).then(mon => {
    // console.log(mon)
    res.json({
      code: 200,
      list: mon.list
    })
  })
})



//购物车数据修改接口
app.post('/shopping/add', (req, res) => {
  Car.findOne({
    username: req.body.username
  }).then(aaa => {
    flag = true;
    var pid = req.body.list[0].id;
    var num = req.body.list[0].num;
    console.log(req.body.list[0].id)
    console.log(num)
    for (var i = 0; i < aaa.list.length; i++) {
      if (req.body.list[0].id == aaa.list[i].id) {
        flag = false
      }
    }
    if (flag) {
      console.log("a")
      Car.updateOne({
        username: req.body.username
      }, {
        $push: {
          list: {
            id: pid,
            num: num
          }
        }
      }, function (err, res) {
        if (err) {
          return
        }
      }).then(mon => {
        res.json({
          code: 200,
          msg: '购物车添加成功'
        })
      })
    } else {
      if (num != 0) {
        console.log("b")
        Car.updateOne({
          username: req.body.username,
          'list.id': pid
        }, {
          $set: {
            'list.$': {
              id: pid,
              num: num
            }
          }
        }, function (err, res) {
          if (err) {
            return console.log(err)
          }

        }).then(mon => {
          res.json({
            code: 200,
            msg: '数据修改成功'
          })
        })
      } else {
        console.log("c")
        Car.updateOne({
          username: req.body.username
        }, {
          $pull: {
            list: {
              id: pid
            }
          }
        }, function (err, res) {
          if (err) {
            return console.log(err)
          }

        }).then(mon => {
          res.json({
            code: 200,
            msg: '数据删除成功'
          })
        })
      }
    }
  })
})


//获取购物车列表
app.get('/shopping/getlist', (req, res) => {
  console.log(req.query.username)
  Car.findOne({
    username: req.query.username
  }).then(mon => {
    var list = []
    for (var i = 0; i < mon.list.length; i++) {
      shop.findById(mon.list[i].id).then(aaa => {
        list.push(aaa)
      })
    }
    res.json({
      code: 200,
      list: list
    })
  })
})



app.listen(3000, '127.0.0.1')