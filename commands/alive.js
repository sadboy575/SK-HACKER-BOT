const settings = require("../settings");
async function aliveCommand(_0x6dc584, _0x5d3062, _0x976e8a) {
  try {
    const _0x5037a9 = "𓆩𓆪SK--𝖡𝖮𝖳V1💀\n\n✨ *Version:* 𝑣" + settings.version + "  \n🟢 *Status:* 𝑶𝒏𝒍𝒊𝒏𝒆  \n🌍 *Mode:* 𝑷𝒖𝒃𝒍𝒊𝒄  \n\n🌟 *Features:*  \n🔹 𝐆𝐫𝐨𝐮𝐩 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭  \n🔹 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 🔗 𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐨𝐧  \n🔹 𝐅𝐮𝐧 🎭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬  \n🔹 𝐀𝐧𝐝 𝐌𝐨𝐫𝐞... 🚀  \n\n💠 𝑻𝒚𝒑𝒆 *.menu* 𝒇𝒐𝒓 𝒇𝒖𝒍𝒍 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒍𝒊𝒔𝒕";
    await _0x6dc584.sendMessage(_0x5d3062, {
      'text': _0x5037a9,
      'contextInfo': {
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363400756938989@newsletter",
          'newsletterName': "SK HACKER𝐑....!!™",
          'serverMessageId': -0x1
        }
      }
    }, {
      'quoted': _0x976e8a
    });
  } catch (_0x1f790c) {
    console.error("Error in alive command:", _0x1f790c);
    await _0x6dc584.sendMessage(_0x5d3062, {
      'text': "SK-BOTV1Bot is alive and running!"
    }, {
      'quoted': _0x976e8a
    });
  }
}
module.exports = aliveCommand;