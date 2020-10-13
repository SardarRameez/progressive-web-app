import { questionType, QuizType } from "../Types/dataTypes";

const shuffleArray=(array: any[])=>[...array].sort(()=>Math.random() - 0.5)
async function getData(amount:number , category:number , difficulty:string):Promise<QuizType[]>{
    const {results}=await (await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)).json()
    const response:QuizType[]=results.map((res:questionType)=>{
        return {
            question:res.question,
            answer:res.correct_answer,
            option:shuffleArray(res.incorrect_answers.concat(res.correct_answer)),
            category:res.category
        }
    })
    return response;
}

export default getData;