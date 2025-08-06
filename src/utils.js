import Toastify from 'toastify-js'
import axios from "axios";

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
  
async function createMan(){
  const res = await axios.get("https://randomuser.me/api/")
  const g = res.data.results[0]
  if (g.gender !== 'female')
    return g.login.username
  return createMan()
}
 async function getComment(instructor , i){
  const receive = await generateText(`You are a helpful assistant that acts as a student giving a personal opinion about a driving school instructor ${instructor}. Your response should sound like a learner who has taken driving sessions and is sharing honest, casual feedback about the instructor's teaching style, behavior, and effectiveness.` ,"" , 40 );
  const text = receive[0].message.content
  const image =  `https://randomuser.me/api/portraits/men/${i*10}.jpg`
  const username = await createMan() 
  return {text , username , image}
}
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
  
  export  async function getComments(instructor , n = 5){
    const temp = []
    for(let i = 1 ; i <= n ; i++){ 
      const c = await getComment(instructor , i)
      temp.push(c)
    }
    return temp
  }

  