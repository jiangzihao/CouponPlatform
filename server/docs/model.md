# 优惠券发放平台数据库设计方案

## User

```javascript
{
    uid: Number,
    username: String,
    password: MD5(String),
    isMerchant: Boolean
}
```

## CouponInfo

```javascript
{
    ciid: Number,
    name: String,
    description: String,
    belongsTo: Number,  // uid
    createTime: Date,
    outDated: Date
}
```

## Coupon
```javascript
{
    cid: Number,
    createdBy: Number, // ciid
    belongsTo: Number, // uid
    used: Boolean,
    createTime: Date
}
```

