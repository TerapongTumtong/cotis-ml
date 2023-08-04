const axios = require('axios');
const mysql = require('mysql');
const line = require('@line/bot-sdk');
const { parse } = require('querystring');
const config = {
  channelAccessToken:
    'eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '71b71d2638e28c464cc1b716f555751b',
};

const qs = require('qs');

const line_location = {
  type: 'text',
  text: 'แสดงที่อยู่ของคุณ',
  quickReply: {
    items: [
      { type: 'action', action: { type: 'location', label: 'Location' } },
    ],
  },
};
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  Authorization: `Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=`,
};

const client = new line.Client(config);
var port = process.env.PORT || 3000,
  http = require('http'),
  fs = require('fs'),
  html = fs.readFileSync('index.html');

var log = function (entry) {
  fs.appendFileSync(
    '/tmp/sample-app.log',
    new Date().toISOString() + ' - ' + entry + '\n',
  );
};

const sendLineMsg = async (req) => {
  try {
    let data = JSON.parse(req).data;
    let headers = { Authorization: JSON.parse(req).token };
    let url = 'https://api.line.me/v2/bot/message/multicast';
    await axios
      .post(url, data, { headers: headers })
      .then((res) => {
        console.log(`GET: sendLineMsg `, res);
      })
      .catch((error) => {
        console.error(`Error : sendLineMsg `, error);
      });
  } catch (errors) {
    console.error(errors);
  }
};

const sendLineMsgin = async (req) => {
  try {
    let data = req.data;
    let headers = { Authorization: req.token };
    let url = 'https://api.line.me/v2/bot/message/multicast';
    await axios
      .post(url, data, { headers: headers })
      .then((res) => {
        console.log(`GET: sendLineMsg `, res);
      })
      .catch((error) => {
        console.error(`Error : sendLineMsg `, error);
      });
  } catch (errors) {
    console.error(errors);
  }
};

const switchMenu = async (req) => {
  try {
    let data = null;
    let headers = { Authorization: JSON.parse(req).token };
    let url =
      'https://api.line.me/v2/bot/user/' +
      JSON.parse(req).userId +
      '/richmenu/' +
      JSON.parse(req).menuId;
    await axios
      .post(url, data, { headers: headers })
      .then((res) => {
        console.log(`GET: switchMenu `, res);
      })
      .catch((error) => {
        console.error(`Error : switchMenu1 `, error);
      });
  } catch (errors) {
    console.error(errors);
  }
};
const flow123 = async (userid, oneOrZero2) => {
  if (oneOrZero2 == 1) {
    reqq = {
      token:
        'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
      userId: userid,
      data: {
        to: [userid],
        messages: [
          {
            type: 'flex',
            altText: 'Summary',
            contents: {
              type: 'bubble',
              hero: {
                type: 'image',
                url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_1.png',
                size: 'full',
                aspectRatio: '18:19',
                aspectMode: 'fit',
                offsetTop: 'none',
                offsetStart: 'none',
              },
              body: {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'message',
                      label: 'ติดต่อเจ้าหน้าที่',
                      text: 'ติดต่อพนักงานดูแลสินเชื่อ',
                    },
                    style: 'primary',
                    color: '#0384fc',
                    height: 'sm',
                  },
                ],
              },
            },
          },
        ],
      },
    };
    await sendLineMsgin(reqq);
  }
  if (oneOrZero2 == 2) {
    const randomNumber = Math.floor(Math.random() * 2);
    reqq = {
      token:
        'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
      userId: userid,
      data: {
        to: [userid],
        messages: [
          {
            type: 'flex',
            altText: 'Summary',
            contents: {
              type: 'bubble',
              hero: {
                type: 'image',
                url:
                  randomNumber === 0
                    ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_2.png'
                    : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_2-1.png',
                size: 'full',
                aspectRatio: '17:19',
                aspectMode: 'fit',
                offsetTop: 'none',
                offsetStart: 'none',
              },
              body: {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'message',
                      label: 'ติดต่อเจ้าหน้าที่',
                      text: 'ติดต่อพนักงานดูแลสินเชื่อ',
                    },
                    style: 'primary',
                    color: '#0384fc',
                    height: 'sm',
                  },
                ],
              },
            },
          },
        ],
      },
    };
    await sendLineMsgin(reqq);
  }

  if (oneOrZero2 == 3) {
    const randomNumber = Math.floor(Math.random() * 2);
    reqq = {
      token:
        'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
      userId: userid,
      data: {
        to: [userid],
        messages: [
          {
            type: 'flex',
            altText: 'Summary',
            contents: {
              type: 'bubble',
              hero: {
                type: 'image',
                url:
                  randomNumber === 0
                    ? 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_3.png'
                    : 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/tracking_3-2.png',
                size: 'full',
                aspectRatio: '15:19',
                aspectMode: 'fit',
                offsetTop: 'none',
                offsetStart: 'none',
              },
              body: {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'message',
                      label: 'ติดต่อเจ้าหน้าที่',
                      text: 'ติดต่อพนักงานดูแลสินเชื่อ',
                    },
                    style: 'primary',
                    color: '#0384fc',
                    height: 'sm',
                  },
                ],
              },
            },
          },
        ],
      },
    };
    await sendLineMsgin(reqq);
    if (randomNumber === 0) {
      reqq = {
        token:
          'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
        userId: userid,
        data: {
          to: [userid],
          messages: [
            {
              type: 'image',
              originalContentUrl:
                'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/ccc.png',
              previewImageUrl:
                'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/ccc.png',
            },
            {
              type: 'text', // ①
              text: 'ต้องการให้แจ้งหากมีการเปลี่ยนสถานะหรือไม่ครับ!',
              quickReply: {
                // ②
                items: [
                  {
                    type: 'action',
                    action: {
                      type: 'message',
                      label: 'ต้องการ',
                      text: 'ต้องการแจ้งผลการเปลี่ยนสถานะ',
                    },
                  },
                  {
                    type: 'action', // ④
                    action: {
                      type: 'message',
                      label: 'ไม่ต้องการ',
                      text: 'ยกเลิกการเตือน',
                    },
                  },
                ],
              },
            },
          ],
        },
      };
      await sendLineMsgin(reqq);
    }
  }
};
const flowEnd123 = async (userid, oneOrZero2) => {
  if (oneOrZero2 == 1 || oneOrZero2 == 2) {
    let reqq = {
      token:
        'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
      userId: userid,
      data: {
        to: [userid],
        messages: [
          {
            type: 'text', // ①
            text: 'ต้องการให้แจ้งหากมีการเปลี่ยนสถานะหรือไม่ครับ!',
            quickReply: {
              // ②
              items: [
                {
                  type: 'action',
                  action: {
                    type: 'message',
                    label: 'ต้องการ',
                    text: 'ต้องการแจ้งผลการเปลี่ยนสถานะ',
                  },
                },
                {
                  type: 'action', // ④
                  action: {
                    type: 'message',
                    label: 'ไม่ต้องการ',
                    text: 'ยกเลิกการเตือน',
                  },
                },
              ],
            },
          },
        ],
      },
    };
    await sendLineMsgin(reqq);
  }
};

var server = http.createServer(function (req, res) {
  let response = {};
  res.setHeader(
    'Access-Control-Allow-Origin',
    '*',
    'http://localhost:4000',
    'https://localhost:4000',
    'https://d3uc9t7bjwxv55.cloudfront.net',
    'https://liff.line.me/1661053996-BRKLDMaj',
    'https://liff.line.me/1661053996-qZXnM4oG',
    'https://liff.line.me/1661053996-ypbnDgve',
    'https://liff.line.me/1661053996-BRKLDMaj',
    'https://liff.line.me/1661053996-KeMl8b24',
    'https://liff.line.me/1661053996-a3PKR2wk',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS',
    'GET, POST, PUT, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'POST') {
    var request = '';
    let body = '';
    req.on('data', function (data) {
      request += data;
      body += data.toString();
    });

    req.on('end', async function () {
      console.log(`GET: req.url `, req.url);

      if (req.url === '/') {
        res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
        res.end(response);
      } else if (req.url === '/api/test') {
        console.log(`GET: sendLineMsg `);
        res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
        res.end('received GET test.');
      } else if (req.url === '/api/hook') {
        let postData = JSON.parse(JSON.stringify(body));
        console.log('postData @@@@@@B :' + JSON.stringify(postData));
        let mainString = JSON.stringify(postData);
        let oneOrZero2 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        let userid = '';
        if (mainString.includes('userId')) {
          let us = mainString.indexOf('userId') + 11;
          let ue = mainString.indexOf('replyToken') - 6;
          userid = mainString.substring(us, ue);
        }
        if (mainString.includes('ดอกเบี้ยต่ำ')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'flex',
                  altText: 'Summary',
                  contents: {
                    type: 'carousel',
                    contents: [
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main1.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main1.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main1.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'text',
                  text: 'ให้เราเลือกให้',
                  quickReply: {
                    items: [
                      {
                        type: 'action',
                        action: {
                          type: 'uri',
                          label: 'ให้เราแนะนำ',
                          uri: 'https://liff.line.me/1661053996-85PKey2w',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }

        if (mainString.includes('ค่างวดน้อย')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'flex',
                  altText: 'Summary',
                  contents: {
                    type: 'carousel',
                    contents: [
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main2.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main2.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main2.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'text',
                  text: 'ให้เราเลือกให้',
                  quickReply: {
                    items: [
                      {
                        type: 'action',
                        action: {
                          type: 'uri',
                          label: 'ให้เราแนะนำ',
                          uri: 'https://liff.line.me/1661053996-85PKey2w',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }
        if (mainString.includes('วงเงินสูง')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'flex',
                  altText: 'Summary',
                  contents: {
                    type: 'carousel',
                    contents: [
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main3.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main3.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                      {
                        type: 'bubble',
                        hero: {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/promotion-main3.png',
                          size: 'full',
                          aspectRatio: '20:13',
                          aspectMode: 'fit',
                        },
                        body: {
                          type: 'box',
                          layout: 'horizontal',
                          contents: [
                            {
                              type: 'button',
                              action: {
                                type: 'uri',
                                label: 'รายละเอียด',
                                uri: 'https://liff.line.me/1661053996-5l7ngqMJ',
                              },
                              color: '#0384fc',
                              style: 'primary',
                              height: 'sm',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: 'text',
                  text: 'ให้เราเลือกให้',
                  quickReply: {
                    items: [
                      {
                        type: 'action',
                        action: {
                          type: 'uri',
                          label: 'ให้เราแนะนำ',
                          uri: 'https://liff.line.me/1661053996-85PKey2w',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }

        if (mainString.includes('เข้าสู่ Roofsaver')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'flex',
                  altText: 'Welcome',
                  contents: {
                    type: 'bubble',
                    header: {
                      type: 'box',
                      layout: 'horizontal',
                      contents: [
                        {
                          type: 'text',
                          weight: 'bold',
                          position: 'absolute',
                          offsetTop: '30px',
                          contents: [
                            {
                              type: 'span',
                              text: 'ยินดีต้อนรับเข้าสู่ ',
                            },
                            {
                              type: 'span',
                              text: 'Roof',
                              color: '#1783DC',
                            },
                            {
                              type: 'span',
                              text: 'saver',
                            },
                          ],
                          offsetStart: 'xl',
                        },
                        {
                          type: 'image',
                          url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/images/Circle.png',
                          size: 'xxs',
                          align: 'end',
                        },
                      ],
                    },
                    body: {
                      type: 'box',
                      layout: 'vertical',
                      contents: [
                        {
                          type: 'text',
                          text: 'ที่ปรึกษาทางการเงินทุกอย่าง',
                        },
                        {
                          type: 'text',
                          text: 'เกี่ยวกับบ้าน ไม่ว่าจะเป็น',
                        },
                        {
                          type: 'text',
                          text: '> แนะนำโปโมชั่นที่เหมาะกับคุณ',
                        },
                        {
                          type: 'text',
                          text: '> ประเมินราคาบ้านเบื้องต้น',
                        },
                        {
                          type: 'text',
                          text: '> ติดตามสถานะการสมัคร',
                        },
                        {
                          type: 'separator',
                          margin: 'lg',
                        },
                        {
                          type: 'button',
                          action: {
                            type: 'uri',
                            label: 'ค้นหา โปรโมชั่นเลย',
                            uri: 'https://liff.line.me/1661053996-ob21KOkQ',
                          },
                          color: '#0384fc',
                          style: 'primary',
                          height: 'sm',
                        },
                      ],
                      paddingTop: 'xs',
                    },
                  },
                },
                {
                  type: 'text',
                  text: 'คุณกำลังหาโปรโมชั่นแบบไหนอยู่ครับ',
                  quickReply: {
                    items: [
                      {
                        type: 'action',
                        action: {
                          type: 'message',
                          label: 'ดอกเบี้ยต่ำ',
                          text: 'ดอกเบี้ยต่ำ',
                        },
                      },
                      {
                        type: 'action',
                        action: {
                          type: 'message',
                          label: 'ค่างวดน้อย',
                          text: 'ค่างวดน้อย',
                        },
                      },
                      {
                        type: 'action',
                        action: {
                          type: 'message',
                          label: 'วงเงินสูง',
                          text: 'วงเงินสูง',
                        },
                      },
                      {
                        type: 'action',
                        action: {
                          type: 'uri',
                          label: 'ให้เราแนะนำ',
                          uri: 'https://liff.line.me/1661053996-85PKey2w',
                        },
                      },
                    ]
                  }
                }
              ]
            },
          };
          await sendLineMsgin(reqq);
        }
        if (mainString.includes('แคมเปญที่สมัคร')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'image',
                  originalContentUrl:
                    'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/campain.png',
                  previewImageUrl:
                    'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/campain.png',
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }
        if (mainString.includes('ติดต่อพนักงานดูแลสินเชื่อ')) {
          let reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text',
                  text: 'เจ้าหน้าที่จะติดต่อกลับให้เร็วที่สุดครับ หรือสามารถติดต่อเจ้าหน้าที่ โทร. 02-6336222',
                },
              ],
            },
          };
          await sendLineMsgin(reqq);

          let data = qs.stringify({
            message:
              'มีลูกค้ากำลังรอติดต่อจากคุณ ชื่อ นาย ลูกค้า ทำกำไร เบอร์โทร: 0919999999 ธนาคาร: ทิสโก้ แคมเปล: สินเชื่อบ้านแลกเงิน สามารถดูรายละเอียดเพิ่มเติมได้ที่ www.tiscoml.com',
          });
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://notify-api.line.me/api/notify',
            headers: {
              Authorization:
                'Bearer PZI0ijP24xWZpPognDausFcV92CiTlwkqfXZgLPWZ9G',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
          };

          axios
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if (mainString.includes('ติดต่อสอบถาม')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text', // ①
                  text: 'เจ้าหน้าที่จะติดต่อกลับให้เร็วที่สุดครับ หรือสามารถติดต่อเจ้าหน้าที่ โทร. 02-6336222',
                },
              ],
            },
          };
          await sendLineMsgin(reqq);

          let data = qs.stringify({
            message:
              'มีลูกค้ากำลังรอติดต่อจากคุณ ชื่อ นาย ลูกค้า ทำกำไร เบอร์โทร: 0919999999 ธนาคาร: ทิสโก้ แคมเปล: สินเชื่อบ้านแลกเงิน สามารถดูรายละเอียดเพิ่มเติมได้ที่ www.tiscoml.com',
          });
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://notify-api.line.me/api/notify',
            headers: {
              Authorization:
                'Bearer PZI0ijP24xWZpPognDausFcV92CiTlwkqfXZgLPWZ9G',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
          };

          axios
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if (mainString.includes('แสดงสถานะล่าสุด')) {
          await flow123(userid, oneOrZero2);
          await flowEnd123(userid, oneOrZero2);
        }
        if (mainString.includes('ประเมินราคาบ้าน')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text',
                  text: 'แสดงที่อยู่ของคุณ',
                  quickReply: {
                    items: [
                      {
                        type: 'action',
                        action: { type: 'location', label: 'Location' },
                      },
                    ],
                  },
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }

        if (
          mainString.includes('ประเทศไทย') ||
          mainString.includes('Thailand')
        ) {
          if (mainString.includes('userId')) {
            let us = mainString.indexOf('userId') + 11;
            let ue = mainString.indexOf('replyToken') - 6;
            let userid = mainString.substring(us, ue);

            reqq = {
              token:
                'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
              userId: userid,
              data: {
                to: [userid],
                messages: [
                  {
                    type: 'text',
                    text: 'ราคาพื้นที่บางเขนของคุณอยู่ที่ประมาณ 500,500 ต่อตารางวา',
                  },
                  {
                    type: 'text',
                    text: "หากต้องการประเมินโดยละเอียดสามารถกด 'ประเมินโดยละเอียด' ได้เลยครับ ",
                  },
                  {
                    type: 'flex',
                    altText: 'Summary',
                    contents: {
                      type: 'bubble',
                      body: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'image',
                            url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/333.png',
                            margin: '0px',
                            align: 'start',
                            gravity: 'top',
                            size: 'full',
                            aspectMode: 'fit',
                          },
                        ],
                      },
                      footer: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'button',
                            style: 'primary',
                            margin: 'xxl',
                            action: {
                              type: 'uri',
                              label: 'ประเมินโดยละเอียด',
                              uri: 'https://liff.line.me/1661053996-BRKLDMaj',
                            },
                            color: '#1783DC',
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            };
            await sendLineMsgin(reqq);
          }
        }

        if (mainString.includes('ติดตามสถานะ')) {
          let oneOrZero = Math.random() >= 0.5 ? 1 : 0;
          if (oneOrZero == 1) {
            reqq = {
              token:
                'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
              userId: userid,
              data: {
                to: [userid],
                messages: [
                  {
                    type: 'text',
                    text: 'รอสักครู่นะครับ เรากำลังตรวจสอบสถานะอยู่ครับ',
                  },
                ],
              },
            };
            await sendLineMsgin(reqq);
            //สถานะขอสินเชื่อ

            await flow123(userid, oneOrZero2);
            await flowEnd123(userid, oneOrZero2);
          } else {
            //flow 2
            reqq = {
              token:
                'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
              userId: userid,
              data: {
                to: [userid],
                messages: [
                  {
                    type: 'text',
                    text: 'รบกวนกรอกเบอร์โทรศัพท์เพื่อใช้ในการตรวจสอบสถานะด้วยครับ',
                  },
                  {
                    type: 'flex',
                    altText: 'Summary',
                    contents: {
                      type: 'bubble',
                      body: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'image',
                            url: 'https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/login.png',
                            margin: '0px',
                            align: 'start',
                            gravity: 'top',
                            size: 'full',
                            aspectMode: 'fit',
                          },
                        ],
                      },
                      footer: {
                        type: 'box',
                        layout: 'vertical',
                        contents: [
                          {
                            type: 'button',
                            style: 'primary',
                            margin: 'xxl',
                            action: {
                              type: 'uri',
                              label: 'เข้าสู่ระบบ',
                              uri: 'https://liff.line.me/1661053996-KeMl8b24',
                            },
                            color: '#1783DC',
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            };
            await sendLineMsgin(reqq);
          }
        }
        if (mainString.includes('ต้องการแจ้งผลการเปลี่ยนสถานะ')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text',
                  text: 'ยินดีครับเราจะทำการแจ้งเตือนทุกครั้งที่มีการเปลี่ยนแปลงสถานะ',
                },
              ],
            },
          };
          await sendLineMsgin(reqq);

          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text',
                  text: "หากต้องการยกเลิกสามารถพิมพ์ 'ยกเลิกการเตือน' เพื่อยกเลิกการเตือนได้เลยครับ ",
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }
        if (mainString.includes('ยกเลิกการเตือน')) {
          reqq = {
            token:
              'Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=',
            userId: userid,
            data: {
              to: [userid],
              messages: [
                {
                  type: 'text',
                  text: 'ได้เลยครับ หากต้องการติดตามสถานะ สามารถกดที่เมนู หรือติดต่อที่เบอร์ 089-999-9999 ได้เลยครับ',
                },
              ],
            },
          };
          await sendLineMsgin(reqq);
        }
        res.end('received POST hook.');
      } else if (req.url === '/api/switchMenu') {
        await switchMenu(request);
        console.log(`GET: switchMenu `);
        res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
        res.end('received GET switchMenu.');
      } else if (req.url === '/api/sendLineMsg') {
        await sendLineMsg(request);
        console.log(`GET: sendLineMsg `);
        res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
        res.end('received GET sendLineMsg.');
      }
    });
  } else {
    res.writeHead(200);
    res.write(html);
    res.end();
    return;
  }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
