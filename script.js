// تحديد تاريخ عيد الميلاد (غير هذا التاريخ إلى تاريخ عيد ميلاد حبيبتك)
// التنسيق: new Date(السنة, الشهر-1, اليوم, الساعة, الدقيقة)
// ملاحظة: الشهر يبدأ من 0 (يناير) إلى 11 (ديسمبر)
const birthdayDate = new Date(2025, 1, 28, 13, 09); // مثال: 28 فبراير 2025 الساعة 12:00 صباحاً

// مصفوفة الرسائل التي ستظهر كل ساعة
const hourlyMessages = [
    "كل لحظة تمضي تذكرني كم أن وجودكِ في حياتي نعمة لا تقدر بثمن.",
    "لا أستطيع الانتظار لأحتفل بيومكِ المميز وأرى السعادة في عينيكِ.",
    "أنتِ أجمل هدية حصلت عليها، ولم أتخيل يومًا أن تكون الحياة كريمة معي بهذا الشكل.",
    "حبي لكِ لا يُقاس بالوقت، بل يزداد مع كل نبضة قلب.",
    "لا توجد كلمات تكفي لوصف ما أشعر به تجاهكِ، لكنني متأكد أن حبي لكِ لا يعرف النهاية.",
    "معكِ أشعر بالسعادة الحقيقية، كما لو أن العالم بأسره أصبح أكثر إشراقًا.",
    "أحبكِ بعمق البحار واتساع السماء، بلا حدود ولا قيود.",
    "عيناكِ تحملان بريقًا لا يشبه شيئًا آخر، كأنهما ترويان لي قصصًا لا تنتهي.",
    "أنتِ الحلم الذي أصبح حقيقة، والواقع الذي لم أتخيل أنه سيكون بهذه الروعة.",
    "في عيد ميلادكِ، أتمنى أن أكون سببًا في فرحتكِ كما كنتِ دائمًا سببًا في سعادتي.",
    "لن أنسى اليوم الذي دخلتِ فيه حياتي، لأنه اليوم الذي تغير فيه كل شيء.",
    "أنتِ الابتسامة التي لا تفارقني، والسعادة التي أجدها في أبسط اللحظات معكِ.",
    "كل ساعة تمر تجعلني أدرك كم أنا محظوظ لأنكِ جزء من عالمي."
];

// نص الملاحظة الذي سيظهر بعد العد التنازلي
const noteText = `حبيبتي،

كل لحظة تمضي تُثبت لي أن وجودك في حياتي ليس مجرد صدفة، بل أعظم هبة منحها لي الزمن. أنتِ أكثر من مجرد نور في أيامي، أنتِ المعادلة التي تعيد التوازن لواقعي، والصوت الذي ينساب في فكري ليحملني نحو آفاق لا يدركها غيري.

ميلادك ليس مجرد تاريخ، بل نقطة في الزمن حيث وُلد معنى أعمق للحياة. في هذا اليوم، لم يأتِ إلى العالم شخصٌ عادي، بل شخص قادر على تغيير المسارات، وإعادة تشكيل المفاهيم.

أتمنى لكِ عاماً يتناغم مع طموحاتك، بقدر ما يتناغم قلبي معكِ. أعدكِ أن أبقى بجانبك، ليس كظلٍ يتبعكِ، بل كقوة خفية تدفعكِ إلى الأمام، كصوتٍ داخلي يُذكّركِ دائماً بقدرتكِ على تجاوز كل شيء.

أحبكِ إلى ما يتجاوز الأبد.

.`;

// النص النهائي الذي سيظهر بعد الملاحظة
const finalMessage = `حبيبتي،

لا حاجة للتكلف في الحديث عنكِ، فأنتِ ببساطة الشيء الأكثر طبيعية وجمالًا في حياتي. منذ اللحظة الأولى التي التقيتكِ فيها، عرفت أنني أمام شخص مختلف، شخص لا يحتاج إلى التصنع ليكون مميزًا. أنتِ المرح الذي يجعل الأيام أخف، والضحكة التي تكسر رتابة العالم، والبساطة التي تمنح الأشياء معناها الحقيقي.

كل يوم يبدأ بكِ هو امتداد لجمال وجودك. صوتكِ ليس مجرد لحن، بل إيقاع يجعل كل شيء أكثر متعة. طريقتكِ العفوية في الحياة، التفاصيل الصغيرة التي تهتمين بها دون تفكير، الضحكة التي تضيء كل شيء حولكِ… كلها تجعلني أدرك كم أنا محظوظ لأنكِ هنا.

في عيد ميلادكِ، لا أملك إلا أن أتمنى أن تبقي كما أنتِ: مشرقة، مليئة بالطاقة، قادرة على تحويل أي لحظة عادية إلى ذكرى لا تُنسى. وأعدكِ أن أكون دائمًا هنا، لنضحك معًا، لنعيش الحياة كما يجب أن تُعاش، ولنصنع من كل يوم مغامرة تستحق أن تُروى.

العالم يتغير، لكن هناك شيئًا واحدًا لا يتغير أبدًا: حبي لكِ. كل عام وأنتِ الأجمل، كل عام وأنتِ الأكثر حياة.

.`;

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
