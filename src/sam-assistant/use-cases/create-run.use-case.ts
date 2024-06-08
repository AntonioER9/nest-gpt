import OpenAI from 'openai';


interface Options {
  threadId: string;
  assistantId?: string;
}



export const createRunUseCase = async (openai: OpenAI, options: Options) => {

  const { threadId, assistantId = 'asst_9UObig0ZrQKieu4KEWOaOpro' } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    // instructions; // OJO! Sobre escribe el asistente
  });

  console.log({ run });

  return run;

}