/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx37273f0d8e8654eb',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '485136811820b9ddfa15acc819d38ad1',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '崽崽',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofIFn6hfD6lbt5vJ__Qn0hByEofo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'SPVyPWZPdxbuAZehpt8AKcZCEF-TNwz09ZXVBlcAn2g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-27',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '崽崽', year: '2000', date: '10-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-22' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0s4-FPjPmPbKzmUXCcZjYBZLXJeWhcYFTt0CkPEKuQQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofIFn6lFFOb-iDDRjJMJx5mrARLM',
    }
  ],

}

module.exports = USER_CONFIG

