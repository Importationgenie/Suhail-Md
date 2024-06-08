const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349035569508";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_18_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRzemVHMkJXOWlybXM5V0ROZTNYZVh5U0tNOTVaWGdyMmVBL3dSdEZNUGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFmUEJuUFAtU0UtOGdkVWo1MG96ZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2YwMGYzNGMtNzk1MC00ZWYyLWJmYjYtNTBmZTk3NjU1NGUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDIyMixcbiAgICAgIDE5NCxcbiAgICAgIDE0MixcbiAgICAgIDI0NyxcbiAgICAgIDk4LFxuICAgICAgMjU1LFxuICAgICAgMjAwLFxuICAgICAgNTgsXG4gICAgICAxNjIsXG4gICAgICAyMTUsXG4gICAgICAxMjEsXG4gICAgICAyMzAsXG4gICAgICA0MixcbiAgICAgIDEyMSxcbiAgICAgIDQzLFxuICAgICAgMTUxLFxuICAgICAgMjQ0LFxuICAgICAgMTcxLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAxMjYsXG4gICAgICA4NSxcbiAgICAgIDIzNixcbiAgICAgIDgxLFxuICAgICAgNTUsXG4gICAgICAxOTAsXG4gICAgICA2MixcbiAgICAgIDEzNSxcbiAgICAgIDgyLFxuICAgICAgMTEyLFxuICAgICAgNzUsXG4gICAgICAxODYsXG4gICAgICAyOCxcbiAgICAgIDEyOSxcbiAgICAgIDIzOCxcbiAgICAgIDE0MixcbiAgICAgIDIyMixcbiAgICAgIDMwLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlJYNU1DUVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzU1Njk1MDg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRoZSBJbXBvcnRhdGlvbiBHZW5pZVwiLFxuICAgIFwibGlkXCI6IFwiMjI2OTA3ODUzNDQ3MjY0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVR4NTRJSEVLMnhrN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvMk5aSEFDT09ETUdTbXpCckQ3SGFmVVRVUWViOUJSd2ZtTG9XRjRsSVIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImluUWFVRGNKS2V1cXJjRkdVelcrelMreDlNMkpOMU9HVitsRHRySkE0dThvb1AwUFJhR1pxTmhpYm5oenZhZWRJbWI4S1Rja1RpVGFFYkk4b1Vob0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNoNC9yVkFqN0lmS3AxUC9GZTh2M0RUSFI1dXdGdWpueDk3VTRtWkVxYkRkYWo3bFVPK1M4c0pON0xkdVNZWkdWT2JYSXQrMjhWejQrT0JEZEcrRmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU1Njk1MDg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODg1MTA1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
