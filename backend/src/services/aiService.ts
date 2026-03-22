import { Configuration, OpenAIApi } from 'openai';

class AIService {
    private openai: OpenAIApi;

    constructor(apiKey: string) {
        const configuration = new Configuration({
            apiKey: apiKey,
        });
        this.openai = new OpenAIApi(configuration);
    }

    public async analyzeTradingPatterns(data: any): Promise<any> {
        const prompt = `Analyze the following trading data: ${JSON.stringify(data)}`;
        try {
            const response = await this.openai.createCompletion({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 150,
            });
            return response.data.choices[0].text;
        } catch (error) {
            console.error('Error analyzing trading patterns:', error);
            throw error;
        }
    }
}

export default AIService;
