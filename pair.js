const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Danny_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function KYPHER_XMD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Danny_Tech = Danny_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Danny_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Danny_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Danny_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Danny_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Danny_Tech.sendMessage(Pair_Code_By_Danny_Tech.user.id, { text: '' + b64data });

               let SAMSUNG_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃𝐊𝐘𝚸𝚮𝚵𝚪_𝚾𝚳𝐃
┃𝑆𝑢𝑐𝑐𝑒𝑠𝑓𝑢𝑙𝑙𝑦
┃𝐶𝑜𝑛𝑛𝑒𝑐𝑡𝑒𝑑
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
1️⃣ || 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 =  𓊈𒆜 _𝐊𝐘𝚸𝚮𝚵𝚪_𒆜𓊉
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
2️⃣ || WhatsApp Channel = https://whatsapp.com/channel/0029VanspvdLtOj55DG0t82Y
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
3️⃣ || check my YouTube channel on how to deploy
 *https://www.youtube.com/@Kypher_tech*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*𝐂𝚪𝚵𝚫𝚻𝚵𝐃 𝚩𝐘 𝐊𝐘𝚸𝚮𝚵𝚪*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Danny_Tech.sendMessage(Pair_Code_By_Danny_Tech.user.id,{text:SAMSUNG_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Danny_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SAMSUNG_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SAMSUNG_MD_PAIR_CODE()
});
module.exports = router
