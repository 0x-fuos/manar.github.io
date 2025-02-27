// تحديد تاريخ عيد الميلاد (غير هذا التاريخ إلى تاريخ عيد ميلاد حبيبتك)
// التنسيق: new Date(السنة, الشهر-1, اليوم, الساعة, الدقيقة)
// ملاحظة: الشهر يبدأ من 0 (يناير) إلى 11 (ديسمبر)
const birthdayDate = new Date(2025, 2, 1, 0, 0); // مثال: 28 فبراير 2025 الساعة 12:00 صباحاً

// مصفوفة الرسائل التي ستظهر كل ساعة
const hourlyMessages = [
    "كل ساعة تمر تزداد فيها حبي لك.",
    "لا أستطيع الانتظار لأحتفل معك بيومك المميز.",
    "قلبي ينبض بحبك في كل لحظة.",
    "أنتِ أجمل هدية حصلت عليها في حياتي.",
    "كل ساعة تجعلني أتذكر كم أنت مميزة في حياتي.",
    "أنتظر بشوق اللحظة التي أراكِ فيها سعيدة في عيد ميلادك.",
    "أحبك بقدر النجوم في السماء، لا تعد ولا تحصى.",
    "وجودك في حياتي نعمة أشكر الله عليها كل يوم.",
    "أنتِ سبب ابتسامتي وسعادتي.",
    "لن أنسى أبداً اليوم الذي دخلتِ فيه حياتي.",
    "أنتِ الحلم الذي تحقق في حياتي.",
    "حبي لك يزداد مع كل نبضة قلب.",
    "عيناك هما أجمل ما رأيت في حياتي.",
    "كل ساعة تجعلني أتذكر كم أنا محظوظ بوجودك.",
    "أنتِ ملكة قلبي وعقلي.",
    "أتمنى أن أكون سبباً في سعادتك دائماً.",
    "أحلم بيوم ميلادك منذ فترة طويلة.",
    "أنتِ أجمل ما في الكون بالنسبة لي.",
    "أحبك بعمق البحار وارتفاع السماء.",
    "كل ساعة تمضي تزيد من شوقي للاحتفال معك.",
    "أنتِ نبض قلبي ونور حياتي.",
    "معك أشعر بالسعادة الحقيقية.",
    "لا توجد كلمات كافية لوصف حبي لك."
];

// نص الملاحظة الذي سيظهر بعد العد التنازلي
const noteText = `حبيبتي، 

في كل عام يمر، أجد نفسي أكثر امتناناً لوجودك في حياتي. أنتِ تضيئين أيامي وتملئين قلبي بالحب والسعادة.

ميلادك هو أجمل يوم في السنة بالنسبة لي، لأنه اليوم الذي جاءت فيه أجمل هدية إلى هذا العالم.

أتمنى لك عاماً مليئاً بالصحة والسعادة والنجاح. أعدك أن أكون بجانبك دائماً، في كل خطوة من خطوات حياتك.

أحبك إلى الأبد.`;

// النص النهائي الذي سيظهر بعد الملاحظة
const finalMessage = `حبيبتي الغالية،

لا أعرف من أين أبدأ لأخبرك كم أنتِ مميزة بالنسبة لي. منذ اليوم الأول الذي التقينا فيه، عرفت أنك مختلفة. عرفت أن قلبي سيكون لك إلى الأبد.

في كل صباح، أستيقظ وأشكر الله على وجودك في حياتي. ابتسامتك تملأ يومي بالبهجة، وصوتك هو أجمل لحن أسمعه.

أحب طريقتك في التفكير، أحب كيف تهتمين بالتفاصيل الصغيرة، أحب ضحكتك التي تضيء العالم من حولي.

في عيد ميلادك، أتمنى أن أستطيع أن أمنحك كل السعادة التي تستحقينها. أتمنى أن أكون دائماً سبباً لابتسامتك.

مهما تغير العالم من حولنا، سيبقى حبي لك ثابتاً كالجبال. أعدك أن أحبك كل يوم أكثر من اليوم الذي سبقه.

كل عام وأنتِ بخير، كل عام وأنتِ حبيبة قلبي، كل عام وأنتِ أجمل ما في حياتي.

أحبك حباً لا حدود له.`;

// متغيرات للعناصر
let countdownSection, celebrationSection, noteSection, finalSection;
let daysEl, hoursEl, minutesEl, secondsEl, messageEl;
let lastHourLogged = -1;
let countdownInterval;

// عندما تحمل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // الحصول على العناصر
    countdownSection = document.getElementById('countdown-section');
    celebrationSection = document.getElementById('celebration-section');
    noteSection = document.getElementById('note-section');
    finalSection = document.getElementById('final-section');
    
    daysEl = document.getElementById('days');
    hoursEl = document.getElementById('hours');
    minutesEl = document.getElementById('minutes');
    secondsEl = document.getElementById('seconds');
    messageEl = document.getElementById('message-text');
    
    // إعداد النصوص
    document.getElementById('note-text').textContent = noteText;
    document.getElementById('final-message').innerHTML = finalMessage;
    
    // إعداد الأزرار
    document.getElementById('show-note-btn').addEventListener('click', showNote);
    document.getElementById('continue-btn').addEventListener('click', showFinalMessage);
    
    // بدء العد التنازلي
    startCountdown();
});

// دالة بدء العد التنازلي
function startCountdown() {
    updateCountdown(); // تحديث فوري أول مرة
    
    countdownInterval = setInterval(() => {
        updateCountdown();
    }, 1000);
}

// دالة تحديث العد التنازلي
function updateCountdown() {
    const now = new Date();
    const difference = birthdayDate - now;
    
    // إذا انتهى العد التنازلي
    if (difference <= 0) {
        clearInterval(countdownInterval);
        startCelebration();
        return;
    }
    
    // حساب الوقت المتبقي
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // تحديث العناصر
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    // إذا مرت ساعة جديدة، أظهر رسالة جديدة
    const currentHour = now.getHours();
    if (currentHour !== lastHourLogged) {
        lastHourLogged = currentHour;
        showHourlyMessage();
    }
}

// دالة إظهار رسائل كل ساعة
function showHourlyMessage() {
    // اختيار رسالة عشوائية
    const randomIndex = Math.floor(Math.random() * hourlyMessages.length);
    messageEl.textContent = hourlyMessages[randomIndex];
    
    // إظهار الرسالة مع تأثير
    const messageBox = document.getElementById('hourly-message');
    messageBox.classList.remove('show');
    
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 100);
}

// دالة بدء الاحتفال
function startCelebration() {
    // إخفاء قسم العد التنازلي وإظهار قسم الاحتفال
    countdownSection.classList.remove('active');
    setTimeout(() => {
        celebrationSection.classList.add('active');
        createConfetti();
        createHearts();
    }, 1000);
}

// دالة إنشاء الـ Confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff4081', '#7c4dff', '#00bcd4', '#ffeb3b', '#76ff03'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 5) + 's';
        confettiContainer.appendChild(confetti);
    }
}

// دالة إنشاء القلوب
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const colors = ['#ff4081', '#e91e63', '#f50057'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heartsContainer.appendChild(heart);
    }
}

// دالة إظهار الملاحظة
function showNote() {
    celebrationSection.classList.remove('active');
    setTimeout(() => {
        noteSection.classList.add('active');
    }, 1000);
}

// دالة إظهار الرسالة النهائية
function showFinalMessage() {
    noteSection.classList.remove('active');
    setTimeout(() => {
        finalSection.classList.add('active');
    }, 1000);
}
