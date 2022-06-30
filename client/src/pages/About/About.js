import "./About.css";
import Logos from "../Logos/Logos.js";
import { useEffect, useContext } from "react";
import { myContext } from "../../context/language.js";
import React from "react";

const MainPage = () => {

  const { lang} = useContext(myContext);

  let about = {
    sites: [
      {
        name: "Ynet",
        img: "../../assets/sites//ynet.png",
        link: "https://www.ynet.co.il/",
      },
      {
        name: "Jansatta",
        img: "../../assets/sites/jansatta.png",
        link: "https://www.jansatta.com/",
      },
      {
        name: "Themoscowtimes",
        img: "../../assets/sites/moscow_times.png",
        link: "https://www.themoscowtimes.com/",
      },
      {
        name: "Panet",
        img: "../../assets/sites/panet.png",
        link: "https://www.panet.co.il/",
      },
      {
        name: "Albayan",
        img: "../../assets/sites/albayan.png",
        link: "https://www.albayan.ae/",
      },
      {
        name: "Deutsche_Welle",
        img: "../../assets/sites/dw.jpg",
        link: "https://www.dw.com/",
      },
    ],

    team: {
      en: [
        {aboutUs: "Abou Us"},
        {
          name: "Avishai",
          img: "./images/user.png",
          text: "We are 6 group members who met through a programming bootcamp. Our values & identities stem from different roots of religions & cultures together with our other class mates. So, this week’s mission was to find an idea that represents & connects us all on a deeper level.",
        },
        { name: "Dmitry", img: "./images/user.png" },
        { name: "Amir", img: "./images/user.png" },
        { name: "Matan", img: "./images/user.png" },
        { name: "Eden", img: "./images/user.png" },
        { name: "Sarona", img: "./images/user.png" },
      ],
      he: [
        {aboutUs: "קצת עלינו"},
        {
          name: "אבישי",
          img: "./images/user.png",
          text: " אנחנו שישה חברי קבוצה שנפגשו דרך הבוטקאמפ לתכנות של עמותת תפוחת הערכים והזהויות שלנו נובעים משורשים שונים של דתות ותרבויות. המשימה של השבוע היתה למצוא רעיון שמייצג ומחבר את כולנו ברמה עמוקה יותר.",
        },
        { name: "דימטרי", img: "./images/user.png" },
        { name: "עמיר", img: "./images/user.png" },
        { name: "מתן", img: "./images/user.png" },
        { name: "עדן", img: "./images/user.png" },
        { name: "שרונה", img: "./images/user.png" },
      ],
      ar: [
        {aboutUs: "معلومات عنا"},
        {
          name: "Avishai",
          img: "./images/user.png",
          text: "ايس ، أمير جلبوعنحن ستة أعضاء في مجموعة التقينا من خلال المعسكر التدريبي لبرمجة جمعيتنا للقيم والهويات المنبثقة عن الجذور المختلفة للأديان والثقافات. كانت مهمة هذا الأسبوع هي العثور على فكرة تمثلنا وتربطنا جميعًا على مستوى أعمق.",
        },
        { name: "Dmitry", img: "./images/user.png" },
        { name: "Amir", img: "./images/user.png" },
        { name: "Matan", img: "./images/user.png" },
        { name: "Eden", img: "./images/user.png" },
        { name: "Sarona", img: "./images/user.png" },
      ],
      ru: [
        {aboutUs: "о нас"},
        {
          name: "Avishai",
          img: "./images/user.png",
          text: "Мы шесть членов группы, которые встретились на буткемпе для программирования нашей ассоциации ценностей и идентичностей, происходящих из разных корней религий и культур. Задача этой недели состояла в том, чтобы найти идею, которая представляет и объединяет нас всех на более глубоком уровне.",
        },
        { name: "Dmitry", img: "./images/user.png" },
        { name: "Amir", img: "./images/user.png" },
        { name: "Matan", img: "./images/user.png" },
        { name: "Eden", img: "./images/user.png" },
        { name: "Sarona", img: "./images/user.png" },
      ],
    },
    intro: {
      en: [
        "200 years ago, the biggest news of the day was, the visit of some new person to the village, Or new royal order.  A trip between counties could take months… years.",
        "However, these days,  the world is a “small spot” in an elephant's packet, where you can Jump in by a single click ….touch … call, And cross continents in a number of hours.  So, it is good ..  , necessary!To be up to date, and get  the ‘hottest news cakes” of our “small spot ”",
        "The Israeli community is very diverse and speaks many languages We discovered some need for community and we delivered this application",
        "The application display for users, a number of the latest news  from the world's news Websites from different countries and languages The application allows to users read the news in different languages And all ways to be up to date, and knows what app around the world",
        "Don't forget to take a look, before you take your next fly ",
      ],

      ru: [
        "200 лет назад самой большой новостью дня был визит какого-то нового человека в деревню, или новый королевский орден.  Поездка между округами может занять месяцы... годы.",
        "Тем не менее, в наши дни мир представляет собой «маленькое пятно» в пакете слона, куда вы можете прыгнуть одним щелчком мыши ... касанием ... звонком, и пересекайте континенты за несколько часов.  Так что, это хорошо..  необходимый! Быть в курсе событий и получать «самые горячие новостные торты» нашего «маленького пятна».",
        "Израильское сообщество очень разнообразно и говорит на многих языках Мы обнаружили некоторую потребность в сообществе, и мы предоставили это приложение",
        "Дисплей приложения для пользователей, ряд последних новостей из мировых новостей Сайты из разных стран и языков Приложение позволяет пользователям читать новости на разных языках И всеми способами быть в курсе, и знает, какое приложение по всему миру ",
        "Не забудьте взглянуть, прежде чем лететь следующим рейсом ",
      ],

      he: [
        "לפני 200 שנה, החדשות הגדולות ביותר של היום היו, ביקורו של אדם חדש כלשהו בכפר, או מסדר מלכותי חדש.  טיול בין מחוזות יכול להימשך חודשים... שנים.",
        "עם זאת, בימים אלה, העולם הוא 'נקודה קטנה' בחבילה של פיל, שבו אתה יכול לקפוץ פנימה על ידי קליק אחד ....touch ... להתקשר, ולחצות יבשות תוך מספר שעות. אז זה טוב .. הכרחי! כדי להיות מעודכן, ולקבל את 'עוגות החדשות החמות ביותר' של המקום הקטן שלנו.",
        "הקהילה הישראלית מגוונת מאוד ודוברת שפות רבות גילינו צורך מסוים בקהילה והעברנו את היישום הזה",
        "תצוגת היישום למשתמשים, מספר חדשות אחרונות מאתרי החדשות בעולם ממדינות ושפות שונות האפליקציה מאפשרת למשתמשים לקרוא את החדשות בשפות שונות וכל הדרכים להיות מעודכנים, ויודעת איזו אפליקציה ברחבי העולם ",
        "אל תשכחו להעיף מבט, לפני שאתם לוקחים את הזבוב הבא שלכם ",
      ],
      ar: [
        "قبل 200 عام ، كانت أكبر أخبار اليوم ، زيارة شخص جديد إلى القرية ، أو أمر ملكي جديد.  قد تستغرق الرحلة بين المقاطعات شهورا ... اعوام.",
        "ومع ذلك ، في هذه الأيام ، العالم هو 'بقعة صغيرة' في حزمة الفيل ، حيث يمكنك القفز بنقرة واحدة ....thuch ... اتصل ، وعبر القارات في عدد من الساعات. لذلك ، إنه أمر جيد .. ضروري! لتكون على اطلاع دائم ، والحصول على 'أهم كعك الأخبار' من 'بقعة صغيرة' لدينا .",
        "المجتمع الإسرائيلي متنوع جدا ويتحدث العديد من اللغات اكتشفنا بعض الحاجة للمجتمع وقدمنا هذا التطبيق",
        "يعرض التطبيق للمستخدمين، عددا من آخر الأخبار من المواقع الإخبارية العالمية من مختلف الدول واللغات ويتيح التطبيق للمستخدمين قراءة الأخبار بلغات مختلفة وجميع الطرق لتكون محدثة، ويعرف ما التطبيق حول العالم ",
        "لا تنس إلقاء نظرة ، قبل أن تأخذ طائرتك التالية ",
      ],
    },
  };

  const getLang = () => {
    let team = "";
    let intro = "";
    if (about) {
        if (lang === "he") {
          team = about.team.he;         
          intro = about.intro.he;
        }
        if (lang === "en") {
          team = about.team.en;
          intro = about.intro.en;
        }
        if (lang === "ru") {
          team = about.team.ru;
          intro = about.intro.ru;
        }
        if (lang === "ar") {
          team = about.team.ar;
          intro = about.intro.ar;
        }
        return {team, intro};
    }
  }
  const {team, intro} = getLang(); 

  useEffect(() => {}, []);

  return (
    <div className="main-container">
      <div className="logos-container">
        <Logos logoName1="Ynet" logoName2="Albayan" logoName3="Panet" className="display" />
      </div>
      <div className="content">
        <div className="intro">{intro}</div>
        <div className="aboutUs">
            <h1>{team[0].aboutUs}</h1>
            <h2>{team[1].text}</h2>
        <div className="team-member" >           
         <a rel="noreferrer" href="https://www.linkedin.com/in/avishai-peretz-1828621aa/" target="_blank"><h3>Team Leader - {team[1].name} <div className="linkedin"></div></h3></a>
        </div>
            <h3 className="team-member">Back-End - {team[4].name}</h3>
            <h3 className="team-member">Back&Front - {team[3].name}</h3>                          
        <div className="team-member" >           
         <a rel="noreferrer" href="https://www.linkedin.com/in/dmitri-denysyuk-058b19219" target="_blank"><h3>Front&Back - {team[2].name} <div className="linkedin"></div></h3></a>
        </div>
        <div className="team-member" >           
         <a rel="noreferrer" href="https://www.linkedin.com/in/sharona-tokatli/" target="_blank"><h3>Front-End - {team[6].name} <div className="linkedin"></div></h3></a>
        </div>
        <div  className="team-member" >           
         <a rel="noreferrer" href="https://www.linkedin.com/in/eden-kricheli-2677b4236/" target="_blank"><h3>Front-End - {team[5].name} <div className="linkedin"></div></h3></a>
        </div>
        </div>
        <a rel="noreferrer" href="https://github.com/mtn4/Hackathon" target="_blank" ><div className="github"></div></a>
      </div>
      <div className="logos-container">
        <Logos logoName1="Themoscowtimes" logoName2="Jansatta" logoName3="dw" className="display"/>
      </div>
    </div>
  );
};

export default MainPage;
