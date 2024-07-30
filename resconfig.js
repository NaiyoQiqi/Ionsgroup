// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 4 Juli 2024 JAM 00:00 WIB
// WEBSITE : autoresbot.com
// VERSION : 3.2
// =============================================


const path=require("path"),fs=require("fs"),chalk=require("chalk"),moment=require("moment-timezone");

const config = {
    botDestination  : 'group', // group |  private | both
    region       	: 'malaysia',
    resbot_version  : 'Evelyn',
    apikey_resbot   : 'APIKEY_GRATIS', 
    apikeyProdia    : '953c5de9-f0f5-4596-bf9c-5f03f70f46d6', // apikey ambil di https://app.prodia.com
    nomorsuperOwner : '6289601671818',
    grup            : 'https://chat.whatsapp.com/E65VXQ2kYupCI1dEF2yxSc',
    email           : 'evelyn@ionsgroup.site',
    ig           	: '@Nyokki.ho',
    ownername       : 'NaiyouQiqi',
    botname         : 'IonsGroup',
    packname        : 'IonsGroup',
    sleep_game      : 60000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 10 menit setiap setelah claim
    MoneyMenangGame : 20,
    ratelimiter 	: 1, // detik
    prefix_custom   : ['#','!','.'],
    dalamdetik		: 1, // ini adalah waktu couldown dalamdetik
    chatmasuk 		: 1, // ini adalah jumlah chat maxsimum {dalamdetik}
    prefix 			: true,
    anticall        : false, // true = aktif || false = tidak aktif
    publik 			: true,
    audio_menu      : false,
    autoread 		: false,
    antitoxic 		: true,
    savekontak		: {
    format   	: 'Buyer @urutan - @tanggal @bulan @tahun',
    mulai 		: '1',
    },
    author          : `𝙵𝚎𝚕𝚒𝚌𝚒𝚊𝙵𝚎𝚋𝚋𝚢𝚞𝚝𝚊𝚛𝚒`,
    allmenu         : 'https://telegra.ph/file/6d25de614f92de742a88f.jpg',
    typeWelcome 	: '1', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    icon_on			: '🟢', 
	icon_off		: '🔴',
    game 			: {
        tebakangka   : 'https://telegra.ph/file/81a1aa13c00d36a1f2b75.jpg',
        tebaklontong : 'https://telegra.ph/file/f20bec6cbc011da4ac25d.jpg',
        tebakkalimat : 'https://telegra.ph/file/9624ca315002d0898bcee.jpg',
        tebaklirik   : 'https://telegra.ph/file/ec6362c91aaf837a6ec77.jpg',
        tebakkata    : 'https://telegra.ph/file/4cd10be17fd6c13303453.jpg',
        tebakbendera : 'https://telegra.ph/file/d982a966ba17ee035807c.jpg',
        tebakgambar  : 'https://telegra.ph/file/e9107d96769831a17ee21.jpg',
        tebaklagu    : 'https://telegra.ph/file/d96c459b9605d6fab4284.jpg'
    }
};



module.exports = config;
let file = path.resolve(__filename);
fs.watchFile(file,(()=>{fs.unwatchFile(file),console.log(`${chalk.greenBright.bold("UPDATE FILE "+file)} ${chalk.redBright.bold("PLEASE RESTART THIS SERVER")}`),delete require.cache[file],require(file)}));













/* 
---- PENJELASAN ------ 
 // 🟢 🔴
true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/autoresbot_com admin/owner autoresbot

*/
