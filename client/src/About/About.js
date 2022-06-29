import "./About.css";
import Logos from "../Logos/Logos.js";

import { useState, useEffect, useContext } from "react";
import { myContext } from "../context/language.js";
import React from "react";
import ReactRoundedImage from "react-rounded-image";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const MainPage = () => {
  //  function About () {
  const { lang} = useContext(myContext);

  // he , ru , al , ar

  // ynet ,

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
        {
          name: "Avishai",
          img: "./images/user.png",
          text: "We are 6 group members who met through a programming bootcamp. Our values & identities stem from different roots of religions & cultures together with our other class mates. So, this week’s mission was to find an idea that represents & connects us all on a deeper level. Our team: Avishai Peretz, Dima Din, Sharona Tokatli, Eden Kricheli, Matan Waiss, Amir Gilboa.",
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
          team = about.team.en;
          intro = about.intro.he;
        }
        if (lang === "en") {
          team = about.team.en;
          intro = about.intro.en;
        }
        if (lang === "ru") {
          team = about.team.en;
          intro = about.intro.ru;
        }
        if (lang === "ar") {
          team = about.team.en;
          intro = about.intro.ar;
        }
        return {team, intro};
    }
  }
  const {team, intro} = getLang(); 

  useEffect(() => {}, []);

  const displayInfo = (info) => {
    let data = info.map((item, i) => <p key={i}>{item}</p>);
    return data;
  };

  const displaySites = (sites) => {
    let data = sites.map((item, index) => {
      return (
        <div key={item.name}>
          <a href={item.link}>
            <Fade left duration={2000}>
              <div className={` img ${item.name}`}></div>
            </Fade>
          </a>
        </div>
      );
    });
    return data;
  };

  const displayTeam = (team) => {
    let data = team.map((item, i) => {
      return (
        <div key={i} className="team-item">
          <Bounce left>
            <span>{item.name}</span>
            <ReactRoundedImage
              image={require(`${item.img}`)}
              roundedSize="10"
              imageWidth="100"
              imageHeight="100"
              roundedColor="#0000"
            />
          </Bounce>
        </div>
      );
    });
    return data;
  };

  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="main-container">
      <div className="logos-container">
        <Logos logoName1="Ynet" logoName2="Albayan" logoName3="Panet" />
      </div>
      <div className="content">
        <div className="intro">{intro}</div>
        <div className="aboutUs">
          {}
        </div>
      </div>
      <div className="logos-container">
        <Logos logoName1="Themoscowtimes" logoName2="Jansatta" logoName3="dw" />
      </div>
    </div>
  );
};

export default MainPage;
