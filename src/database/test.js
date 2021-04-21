const dataBase = require('./db')
const createProffy = require('./createProffy')


dataBase.then(async (db)=>{
    //inserir dados

    proffyValue = {
        name:"Mayk Brito", 
        avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp:"48955500000", 
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        
    }

    classValue = {
        subject:1,
        cost:"20",
       // o proffy id vira pelo bando de dados 
    }

    classScheduleValues = [
        //class_id vira pelo bando de dados, apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220 
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220 
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos 
    
    //todos os proffys 
    const selctedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selctedProffys)

    //consultar as classes de um determinado professor 
    // e trazer junto os dados do professor 
    const selectClassesAndProffys =await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha por exemplo é das 8 as 18 
    // o horario do time_from (8) precisa ser menor ou igual ao horario solicitado 
    // o time _to precisa ser acima 
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "1300"

    `)

   //console.log(selectClassesSchedules)
})