import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/gak mau.mp3";
	conn.sendFile(m.chat, vn, "gak mau.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(sini|ngentod|ngentot|ngent*t|ngent*d|ewek|ewe|colmekin)$/i;
handler.command = new RegExp();

export default handler;