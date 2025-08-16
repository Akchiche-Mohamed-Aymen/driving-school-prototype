import Toastify from 'toastify-js'
import axios from "axios";
export function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const TIME = 3000
export const showTost = (text , bg , className)=>{
    Toastify({
        text,
        duration: TIME,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: false,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bg,
          color : "white",
          width: "fit-content",
          padding : "4px" , 
          close: true,
        }, className
      }).showToast();
  }

  export const trainers = [
    {
      fullName: "Amir sayah",
      username: "Amir_fitness",
      password: "123456", // Just placeholder
      phone: "0550123456",
      accountType: "trainer",
      wilaya: "Algiers",
      school: "El Amir Driving School",
      experience: "5",
      price: 500,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      fullName: "Yacine Bouzid",
      username: "yacinepro",
      password: "123456",
      phone: "0777987654",
      accountType: "trainer",
      wilaya: "Oran",
      school: "Bouzid Auto-Moto School",
      experience: "3",
      price: 450,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      fullName: "Aymen Cherif",
      username: "Aymen_ch",
      password: "123456",
      phone: "0567891234",
      accountType: "trainer",
      wilaya: "Constantine",
      school: "Cherif Driving Academy",
      experience: "6",
      price: 600,
      image: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    {
      fullName: "Mohamed Lamine",
      username: "lamine_trainer",
      password: "123456",
      phone: "0654789541",
      accountType: "trainer",
      wilaya: "Tlemcen",
      school: "Lamine Driving Institute",
      experience: "4",
      price: 470,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      fullName: "Anouar Bensaid",
      username: "Anouar_b",
      password: "123456",
      phone: "0798765432",
      accountType: "trainer",
      wilaya: "Annaba",
      school: "Nour Conduct School",
      experience: "2",
      price: 400,
      image: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];
  

const comments = [
  {
    text: "The instructor was patient and calm—made me feel confident behind the wheel.",
    username: "hassan_92",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "Great lesson structure! Clear, concise, and very helpful.",
    username: "youssef_driver",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "Explained everything so well. I passed my test thanks to him!",
    username: "amine_fitness",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    text: "Very professional and encouraging throughout the session.",
    username: "karim_pro",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    text: "Helped me stay calm during parallel parking. Excellent!",
    username: "rashid_park",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    text: "Great feedback and corrections, feel more confident now.",
    username: "samir_learning",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    text: "Explained the rules of the road clearly—super helpful!",
    username: "bilal_rules",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    text: "Very calming and patient even when I made mistakes.",
    username: "omar_student",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    text: "Best instructor ever—kind, professional, and supportive.",
    username: "younes_safe",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    text: "Tons of helpful tips for tricky maneuvers. Loved it!",
    username: "nadir_skills",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    text: "Made me feel at ease and improved my confidence dramatically.",
    username: "faisal_calm",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    text: "Very knowledgeable and practical advice. Highly recommend!",
    username: "karim_safe",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    text: "Patient and considerate; great coach behind the wheel.",
    username: "mazin_care",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    text: "Helped me with confidence on highways. Great teaching style.",
    username: "yassine_road",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    text: "Felt supported at every step. Excellent instructor!",
    username: "adel_support",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    text: "Clearly explained all the traffic rules and signals.",
    username: "mohamed_rules",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    text: "Very calm and kind—even during my mistakes.",
    username: "zakaria_calm",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    text: "Helped me pass with easy practice and feedback.",
    username: "imad_practice",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    text: "Patiently repeated instructions until I understood everything.",
    username: "adil_patient",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    text: "Very encouraging and professional from start to finish.",
    username: "ismail_pro",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    text: "Really helped me stay calm during stressful moments.",
    username: "tarek_calm",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    text: "Loved the thoughtful and structured lessons.",
    username: "rida_structure",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    text: "Kind, patient, and thorough in every lesson.",
    username: "ali_thorough",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    text: "Made difficult maneuvers easy with clear guidance.",
    username: "mounir_guides",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    text: "One of the best instructors I've ever had.",
    username: "sami_best",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    text: "Very patient and encouraging every step of the way.",
    username: "omar_patient",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    text: "Feedback was spot on—improved my driving skills fast.",
    username: "hicham_feedback",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
  {
    text: "Nice pacing, very supportive, and easygoing.",
    username: "mounaim_easy",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    text: "Helped me overcome my nerves behind the wheel.",
    username: "mohsen_relax",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    text: "Explained everything clearly—great confidence booster!",
    username: "salah_clear",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    text: "Encouraging and calm instructor—great experience.",
    username: "yahia_calm",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    text: "Loved how patient and kind he was during lessons.",
    username: "mustapha_kind",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Clear directions, great tips on parking.",
    username: "fadel_parking",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "Very calm, made me feel relaxed driving.",
    username: "issam_relaxed",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "Professional and supportive—really helped me.",
    username: "reda_supportive",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    text: "His guidance made tricky moves easy.",
    username: "karim_guided",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    text: "Very friendly and helpful in all lessons.",
    username: "ahmed_friendly",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    text: "Calm, consistent, and encouraging instructor.",
    username: "omar_consistent",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    text: "Helped me with confidence when driving in traffic.",
    username: "hamza_traffic",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    text: "Clear instructions and lots of encouragement.",
    username: "ihab_clear",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    text: "Such a calming presence behind the wheel.",
    username: "fouad_calm",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    text: "Thanks to him, I passed my test on first try!",
    username: "rafik_pass",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    text: "Very patient even when I made repetitive errors.",
    username: "sami_repeat",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    text: "Friendly, helpful, and very knowledgeable.",
    username: "nabil_help",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "Encouraging, clear, and made driving less stressful.",
    username: "adil_lessstress",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Glad I had him as my instructor—very supportive.",
    username: "mohamed_support",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "He explained everything in a calm and friendly manner.",
    username: "youssef_calm",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    text: "Felt very supported and informed throughout.",
    username: "larbi_support",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    text: "Excellent communication—made things easy to learn.",
    username: "ahmed_learn",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    text: "Highly recommend—very calm and professional.",
    username: "yassin_reco",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  }
];

  export function generateText(system , content , m = 1000) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          "https://openrouter.ai/api/v1/chat/completions", // Correct OpenRouter endpoint
          {
            model: "gpt-3.5-turbo", // Specify your desired model
            messages: [
              { role: 'system', content: system },
              {
                role: "user",
                content,
              },
            ],
            max_tokens: m,
          },
          {
            headers: {
              Authorization:
                "Bearer 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", // Replace with your actual OpenRouter API key
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          resolve(response.data.choices);
        })
        .catch((err) => reject(err));
    });
  }
  
  export function getComments(n = 5) {
    const temp = [];
    const indexes = new Set();
    const length = comments.length;
  
    while (indexes.size < n) {
      const c = getRandomInt(0, length); // random index
      if (!indexes.has(c)) {
        indexes.add(c);
        temp.push(comments[c]);
      }
    }
    return temp;
  }
  
  