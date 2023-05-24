import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/salam.mp3";
	conn.sendFile(m.chat, vn, "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(assalam(ualaikum)?|(salamualaiku|(sa(lamu|m)liku|sala))m)$/i;
handler.command = new RegExp();

export default handler;
