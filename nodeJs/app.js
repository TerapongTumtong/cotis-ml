const axios = require('axios')
const mysql = require('mysql');
const line = require('@line/bot-sdk');
const { parse } = require('querystring');
const config = {
    channelAccessToken: "eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
    channelSecret: "71b71d2638e28c464cc1b716f555751b",
};

const qs = require('qs');

const line_location = { "type": "text", "text": "แสดงที่อยู่ของคุณ", "quickReply": { "items": [{ "type": "action", "action": { "type": "location", "label": "Location" } }] } }
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=`
};


const client = new line.Client(config);
var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function (entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const sendLineMsg = async (req) => {
    try {
        let data = JSON.parse(req).data;
        let headers = { 'Authorization': JSON.parse(req).token };
        let url = 'https://api.line.me/v2/bot/message/multicast';
        await axios.post(url, data, { headers: headers })
            .then((res) => {
                console.log(`GET: sendLineMsg `, res);
            })
            .catch((error) => {
                console.error(`Error : sendLineMsg `, error)
            })
    } catch (errors) {
        console.error(errors);
    }
}

const sendLineMsgin = async (req) => {
    try {
        let data = req.data;
        let headers = { 'Authorization': req.token };
        let url = 'https://api.line.me/v2/bot/message/multicast';
        await axios.post(url, data, { headers: headers })
            .then((res) => {
                console.log(`GET: sendLineMsg `, res);
            })
            .catch((error) => {
                console.error(`Error : sendLineMsg `, error)
            })
    } catch (errors) {
        console.error(errors);
    }
}

const switchMenu = async (req) => {
    try {
        let data = null;
        let headers = { 'Authorization': JSON.parse(req).token };
        let url = 'https://api.line.me/v2/bot/user/' + JSON.parse(req).userId + '/richmenu/' + JSON.parse(req).menuId;
        await axios.post(url, data, { headers: headers })
            .then((res) => {
                console.log(`GET: switchMenu `, res);
            })
            .catch((error) => {
                console.error(`Error : switchMenu1 `, error)
            })
    } catch (errors) {
        console.error(errors);
    }
}
const flow123 = async (userid, oneOrZero2) => {
    if (oneOrZero2 == 1) {
        reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "image",
                        "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/AAA.png",
                        "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/AAA.png"
                    }
                ]
            }
        }
        await sendLineMsgin(reqq);
    }
    if (oneOrZero2 == 2) {
        reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "image",
                        "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/vvvv.png",
                        "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/vvvv.png"
                    }
                ]
            }
        }
        await sendLineMsgin(reqq);
        reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "image",
                        "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/das.png",
                        "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/das.png"
                    }
                ]
            }
        }
        await sendLineMsgin(reqq);
    }

    if (oneOrZero2 == 3) {
        reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "image",
                        "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/bbb.png",
                        "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/bbb.png"
                    }
                ]
            }
        }
        await sendLineMsgin(reqq);
        reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "image",
                        "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/ccc.png",
                        "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/ccc.png"
                    },                    {
                        "type": "text", // ①
                        "text": "คุณลูกค้าต้องการให้แจ้งหากมีการเปลี่ยนสถานะหรือไม่ค่ะ!",
                        "quickReply": { // ②
                            "items": [
                                {
                                    "type": "action",
                                    "action": {
                                        "type": "message",
                                        "label": "ต้องการ",
                                        "text": "ต้องการแจ้งผลการเปลี่ยนสถานะ"
                                    }
                                },
                                {
                                    "type": "action", // ④
                                    "action": {
                                        "type": "message",
                                        "label": "ไม่ต้องการ",
                                        "text": "ยกเลิกการเตือน"
                                    }
                                }
                            ]
                        }
                    }
                    
                ]
            }
        }
        await sendLineMsgin(reqq);
    }
}
const flowEnd123 = async (userid, oneOrZero2) => {
    if (oneOrZero2 == 1 || oneOrZero2 == 2 ) {
      let  reqq = {
            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
            "userId": userid,
            "data": {
                "to": [
                    userid
                ],
                "messages": [
                    {
                        "type": "text", // ①
                        "text": "คุณลูกค้าต้องการให้แจ้งหากมีการเปลี่ยนสถานะหรือไม่ค่ะ!",
                        "quickReply": { // ②
                            "items": [
                                {
                                    "type": "action",
                                    "action": {
                                        "type": "message",
                                        "label": "ต้องการ",
                                        "text": "ต้องการแจ้งผลการเปลี่ยนสถานะ"
                                    }
                                },
                                {
                                    "type": "action", // ④
                                    "action": {
                                        "type": "message",
                                        "label": "ไม่ต้องการ",
                                        "text": "ยกเลิกการเตือน"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
        await sendLineMsgin(reqq);
    }
}






var server = http.createServer(function (req, res) {
    let response = {};
    res.setHeader('Access-Control-Allow-Origin', "*", 'http://localhost:4000', 'https://localhost:4000', "https://d3uc9t7bjwxv55.cloudfront.net", "https://liff.line.me/1661053996-BRKLDMaj", "https://liff.line.me/1661053996-qZXnM4oG", "https://liff.line.me/1661053996-ypbnDgve", "https://liff.line.me/1661053996-BRKLDMaj", "https://liff.line.me/1661053996-KeMl8b24", "https://liff.line.me/1661053996-a3PKR2wk");
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    if (req.method === 'POST') {
        var request = '';
        let body = '';
        req.on('data', function (data) {

            request += data
            body += data.toString();




        })

        req.on('end', async function () {
            console.log(`GET: req.url `, req.url);

            if (req.url === '/') {

                res.writeHead(200, 'OK', { "Content-Type": "text/plain" });
                res.end(response);
            } else if (req.url === '/api/test') {
              


                console.log(`GET: sendLineMsg `);
                res.writeHead(200, 'OK', { "Content-Type": "text/plain" });
                res.end("received GET test.");
            }
            else if (req.url === '/api/hook') {
                let postData = JSON.parse(JSON.stringify(body));
                console.log("postData @@@@@@B :" + JSON.stringify(postData));
                let mainString = JSON.stringify(postData)
                let oneOrZero2 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
                let userid=""
                if (mainString.includes("userId")) {
                    let us = mainString.indexOf('userId') + 11;
                    let ue = mainString.indexOf('replyToken') - 6;
                     userid = mainString.substring(us, ue);

                    }
                    if (mainString.includes("ดอกเบี้ยต่ำ")) {
                                          
                    }
                    if (mainString.includes("ค่างวดน้อย")) {

                    }
                    if (mainString.includes("วงเงินสูง")) {
                        
                    }


                if (mainString.includes("เข้าสู่ Roofsaver")) {
                      reqq = {
                        "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                        "userId": userid,
                        "data": {
                            "to": [
                                userid
                            ],
                            "messages": [
                                {
                                    "type": "flex",
                                    "altText": "Summary",
                                    "contents": 
                                    {
                      "type": "bubble",
                      "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                          {
                            "type": "text",
                            "text": "ที่ปรึกษาทางการเงินทุกอย่าง"
                          },
                          {
                            "type": "text",
                            "text": "เกี่ยวกับบ้าน ไม่ว่าจะเป็น"
                          },
                          {
                            "type": "text",
                            "text": "> แนะนำโปโมชั่นที่เหมาะกับคุณ"
                          },
                          {
                            "type": "text",
                            "text": "> ประเมินราคาบ้านเบื้องต้น"
                          },
                          {
                            "type": "text",
                            "text": "> ติดตามสถานะการสมัคร"
                          },
                          {
                            "type": "separator",
                            "margin": "sm"
                          },
                          {
                            "type": "button",
                            "action": {
                              "type": "uri",
                              "label": "ค้นหา โปรโมชั่นเลย",
                              "uri": "https://liff.line.me/1661053996-ob21KOkQ"
                            },
                            "color": "#0384fc",
                            "style": "primary"
                          }
                        ]
                      }
                    }
                                }
                                                             

                            ]
                        }
                    }
                    await sendLineMsgin(reqq);
                    //--2--//
                    reqq = {
                        "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                        "userId": userid,
                        "data": {
                            "to": [
                                userid
                            ],
                            "messages": [
                                {
                                    "type": "text", // ①
                                    "text": "คุณกำลังหาโปรโมชั่นแบบไหนอยู่ครับ",
                                    "quickReply": { // ②
                                        "items": [
                                            {
                                                "type": "action", //1
                                                    "type": "message",
                                                    "label": "ดอกเบี้ยต่ำ",
                                                    "text": "ดอกเบี้ยต่ำ"
                                                }
                                            ,
                                            {
                                                "type": "action", // 2
                                                "action": {
                                                    "type": "message",
                                                    "label": "ค่างวดน้อย",
                                                    "text": "ค่างวดน้อย"
                                                }
                                            },
                                            {
                                                "type": "action", // 3
                                                "action": {
                                                    "type": "message",
                                                    "label": "วงเงินสูง",
                                                    "text": "วงเงินสูง"
                                                }
                                            }
                                        ]
                                    }
                                }
                                                             

                            ]
                        }
                    }
                    await sendLineMsgin(reqq);
                    //---3---//
                    
                   //--2--//
                   reqq = {
                    "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                    "userId": userid,
                    "data": {
                        "to": [
                            userid
                        ],
                        "messages": [
                            {
                                "type": "text", // ①
                                "text": "ให้เราเลือกให้",
                                "quickReply": { // ②
                                    "items": [
                                     {
                                            "type": "action", //1
                                            "action": {
                                              "type": "uri",
                                              "label": "ให้เราแนะนำ",
                                              "uri": "https://liff.line.me/1661053996-ypbnDgve"
                                            }
                                        }
                                    
                                    ]
                                }
                            }
                                                         

                        ]
                    }
                }
                await sendLineMsgin(reqq);
                }
                if (mainString.includes("แคมเปญที่สมัคร")) {
                    reqq = {
                        "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                        "userId": userid,
                        "data": {
                            "to": [
                                userid
                            ],
                            "messages": [
                                {
                                    "type": "image",
                                    "originalContentUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/campain.png",
                                    "previewImageUrl": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/campain.png"
                                }
                            ]
                        }
                    }
                    await sendLineMsgin(reqq);

                }
                if (mainString.includes("ติดต่อพนักงานดูแลสินเชื่อ")) {


                    let reqq = {
                        "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                        "userId": userid,
                        "data": {
                            "to": [
                                userid
                            ],
                            "messages": [{
                                "type": "text",
                                "text": "รอสักครู่...เรากำลังติดต่อพนักงานดูแลสินเชื่อให้ค่ะ"
                            }]
                        }
                    }
                    await sendLineMsgin(reqq);

                        let data = qs.stringify({
                            'message': 'มีลูกค้ากำลังรอติดต่อจากคุณ ชื่อ นาย ลูกค้า ทำกำไร เบอร์โทร: 0919999999 ธนาคาร: ทิสโก้ แคมเปล: สินเชื่อบ้านแลกเงิน สามารถดูรายละเอียดเพิ่มเติมได้ที่ www.tiscoml.com' 
                          });
                          let config = {
                            method: 'post',
                            maxBodyLength: Infinity,
                            url: 'https://notify-api.line.me/api/notify',
                            headers: { 
                              'Authorization': 'Bearer PZI0ijP24xWZpPognDausFcV92CiTlwkqfXZgLPWZ9G', 
                              'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            data : data
                          };
                          
                          axios.request(config)
                          .then((response) => {
                            console.log(JSON.stringify(response.data));
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                 }
                if (mainString.includes("ติดต่อสอบถาม")) {

                      reqq = {
                        "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                        "userId": userid,
                        "data": {
                            "to": [
                                userid
                            ],
                            "messages": [
                                {
                                    "type": "text", // ①
                                    "text": "คุณลูกค้าต้องการติดต่อสอบถามเรื่องใดค่ะ",
                                    "quickReply": { // ②
                                        "items": [
                                            {
                                                "type": "action", //1
                                                "action": {
                                                  "type": "uri",
                                                  "label": "หาบ้านแลกเงิน",
                                                  "uri": "https://liff.line.me/1661053996-ypbnDgve"
                                                }
                                            },
                                            {
                                                "type": "action", // 2
                                                "action": {
                                                    "type": "message",
                                                    "label": "ประเมินราคาบ้าน",
                                                    "text": "ประเมินราคาบ้าน"
                                                }
                                            },
                                            {
                                                "type": "action", // 3
                                                "action": {
                                                    "type": "message",
                                                    "label": "ติดตามสถานะ",
                                                    "text": "ติดตามสถานะ"
                                                }
                                            },
                                            {
                                                "type": "action", // 3
                                                "action": {
                                                    "type": "message",
                                                    "label": "ติดต่อเจ้าหน้าที่",
                                                    "text": "ติดต่อพนักงานดูแลสินเชื่อ"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                    await sendLineMsgin(reqq);
                }
                if (mainString.includes("แสดงสถานะล่าสุด")) {
                    await flow123(userid, oneOrZero2)
                    await flowEnd123(userid, oneOrZero2)
                }
                if (mainString.includes("ประเมินราคาบ้าน")) {
                        reqq = {
                            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                            "userId": userid,
                            "data": {
                                "to": [
                                    userid
                                ],
                                "messages": [
                                    { "type": "text", "text": "แสดงที่อยู่ของคุณ", "quickReply": { "items": [{ "type": "action", "action": { "type": "location", "label": "Location" } }] } }
                                ]
                            }
                        }
                        await sendLineMsgin(reqq);
                }

                if (mainString.includes("ประเทศไทย") || (mainString.includes("Thailand"))) {

                    if (mainString.includes("userId")) {
                        let us = mainString.indexOf('userId') + 11;
                        let ue = mainString.indexOf('replyToken') - 6;
                        let userid = mainString.substring(us, ue)


                        reqq = {
                            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                            "userId": userid,
                            "data": {
                                "to": [
                                    userid
                                ],
                                "messages": [{
                                    "type": "text",
                                    "text": "ราคาพื้นที่บางเขนของคุณอยู่ที่ประมาณ 500,500 ต่อตารางวา"
                                },{
                                    "type": "text",
                                    "text": "หากต้องการประเมินโดยละเอียดสามารถกด 'ประเมินโดยละเอียด' ได้เลยค่ะ "
                                },
                                {
                                    "type": "flex",
                                    "altText": "Summary",
                                    "contents": {
                                        "type": "bubble",
                                        "body": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "image",
                                                    "url": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/333.png",
                                                    "margin": "0px",
                                                    "align": "start",
                                                    "gravity": "top",
                                                    "size": "full",
                                                    "aspectMode": "fit"
                                                }
                                            ]
                                        },
                                        "footer": {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "button",
                                                    "style": "primary",
                                                    "margin": "xxl",
                                                    "action": {
                                                        "type": "uri",
                                                        "label": "ประเมินโดยละเอียด",
                                                        "uri": "https://liff.line.me/1661053996-BRKLDMaj"
                                                    },
                                                    "color": "#1783DC"
                                                }
                                            ]
                                        }
                                    }
                                }]
                            }
                        }
                        await sendLineMsgin(reqq);




                    }


                }

                if (mainString.includes("ติดตามสถานะ")) {
                    let oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
                        if (oneOrZero == 1) {

                            reqq = {
                                "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                                "userId": userid,
                                "data": {
                                    "to": [
                                        userid
                                    ],
                                    "messages": [{
                                        "type": "text",
                                        "text": "รอสักครู่นะค่ะ เรากำลังตรวจสอบสถานะอยู่ค่ะ"
                                    }]
                                }
                            }
                            await sendLineMsgin(reqq);
                            //สถานะขอสินเชื่อ

                            await flow123(userid, oneOrZero2);
                            await flowEnd123(userid, oneOrZero2);



                        } else {
                            //flow 2
                            reqq = {
                                "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                                "userId": userid,
                                "data": {
                                    "to": [
                                        userid
                                    ],
                                    "messages": [{
                                        "type": "text",
                                        "text": "รบกวนกรอกเบอร์โทรศัพท์เพื่อใช้ในการตรวจสอบสถานะด้วยค่ะ"
                                    },
                                    {
                                        "type": "flex",
                                        "altText": "Summary",
                                        "contents": {
                                            "type": "bubble",
                                            "body": {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "image",
                                                        "url": "https://sbu-laal-laml.s3.ap-southeast-1.amazonaws.com/api/login.png",
                                                        "margin": "0px",
                                                        "align": "start",
                                                        "gravity": "top",
                                                        "size": "full",
                                                        "aspectMode": "fit"
                                                    }
                                                ]
                                            },
                                            "footer": {
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [
                                                    {
                                                        "type": "button",
                                                        "style": "primary",
                                                        "margin": "xxl",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "เข้าสู่ระบบ",
                                                            "uri": "https://liff.line.me/1661053996-KeMl8b24"
                                                        },
                                                        "color": "#1783DC"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                    ]
                                }
                            }
                            await sendLineMsgin(reqq);
                        }
                }
                if (mainString.includes("ต้องการแจ้งผลการเปลี่ยนสถานะ")) {



                        reqq = {
                            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                            "userId": userid,
                            "data": {
                                "to": [
                                    userid
                                ],
                                "messages": [{
                                    "type": "text",
                                    "text": "ยินดีค่ะเราจะทำการแจ้งเตือนทุกครั้งที่มีการเปลี่ยนแปลงสถานะ"
                                }]
                            }
                        }
                        await sendLineMsgin(reqq);


                        reqq = {
                            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                            "userId": userid,
                            "data": {
                                "to": [
                                    userid
                                ],
                                "messages": [{
                                    "type": "text",
                                    "text": "หากต้องการยกเลิกสามารถพิมพ์ 'ยกเลิกการเตือน' เพื่อยกเลิกการเตือนได้เลยค่ะ "
                                }]
                            }
                        }
                        await sendLineMsgin(reqq);
                    
                }
                if (mainString.includes("ยกเลิกการเตือน")) {


                        reqq = {
                            "token": "Bearer eVzQQbp6xcKhc9LNPSPwf3K1TgQ8Fp6Hgi8FKl8o4WSQNWrpJF7V5/suwjESd74m/0LtwWgThB7xNzvDfQCJ5eYKj6Ibu0OumCE69To5/PTEHrlG9o3S8sGCHTLhfviMPQsQFExdMWaKqD5l5f8EjAdB04t89/1O/w1cDnyilFU=",
                            "userId": userid,
                            "data": {
                                "to": [
                                    userid
                                ],
                                "messages": [{
                                    "type": "text",
                                    "text": "ได้เลยค่ะ หากต้องการติดตามสถานะ สามารถกดที่เมนู หรือติดต่อที่เบอร์ 089-999-9999 ได้เลยค่ะ"
                                }]
                            }
                        }
                        await sendLineMsgin(reqq);
            }
                res.end("received POST hook.");
            }

            else if (req.url === '/api/switchMenu') {

                await switchMenu(request);
                console.log(`GET: switchMenu `);
                res.writeHead(200, 'OK', { "Content-Type": "text/plain" });
                res.end("received GET switchMenu.");
            } else if (req.url === '/api/sendLineMsg') {

                await sendLineMsg(request);
                console.log(`GET: sendLineMsg `);
                res.writeHead(200, 'OK', { "Content-Type": "text/plain" });
                res.end("received GET sendLineMsg.");
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