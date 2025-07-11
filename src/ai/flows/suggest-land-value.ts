
'use server';

/**
 * @fileOverview Provides an estimated value range for land based on user-submitted details.
 *
 * - suggestLandValue -  A function that takes land details and returns an estimated value range.
 * - SuggestLandValueInput - The input type for the suggestLandValue function.
 * - SuggestLandValueOutput - The return type for the suggestLandValue function.
 */

import {ai} from '../genkit';
import {z} from 'genkit';

const SuggestLandValueInputSchema = z.object({
  state: z.string().describe('The state where the land is located.'),
  county: z.string().describe('The county where the land is located.'),
  acreage: z.number().describe('The acreage of the land.'),
  propertyType: z.string().optional().describe('The type of property (e.g., Vacant Lot, Farm & Ranch).'),
  sellingTimeline: z.string().optional().describe('How quickly the user wants to sell (e.g., ASAP, 1-3 Months).'),
  additionalInfo: z.string().optional().describe('Any additional notes from the user about the land or their situation.'),
});
export type SuggestLandValueInput = z.infer<typeof SuggestLandValueInputSchema>;

const SuggestLandValueOutputSchema = z.object({
  estimatedValueRange: z
    .string()
    .describe(
      'An estimated value range for the land based on the provided details.'
    ),
  confidenceLevel: z
    .string()
    .describe(
      'A description of how confident the model is in its estimated value range.'
    ),
});
export type SuggestLandValueOutput = z.infer<typeof SuggestLandValueOutputSchema>;

export async function suggestLandValue(
  input: SuggestLandValueInput
): Promise<SuggestLandValueOutput> {
  return suggestLandValueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestLandValuePrompt',
  input: {schema: SuggestLandValueInputSchema},
  output: {schema: SuggestLandValueOutputSchema},
  prompt: `You are an expert in land valuation in the United States. A user will provide details about a plot of land. You will return an estimated value range for the land, as well as a confidence level for your estimate.

Core Details:
State: {{{state}}}
County: {{{county}}}
Acreage: {{{acreage}}}

Additional Context:
Property Type: {{{propertyType}}}
Selling Timeline: {{{sellingTimeline}}}
User Notes: {{{additionalInfo}}}

Analyze all the provided information to give the most accurate valuation possible. Respond in a calm, helpful tone.
`,
});

const suggestLandValueFlow = ai.defineFlow(
  {
    name: 'suggestLandValueFlow',
    inputSchema: SuggestLandValueInputSchema,
    outputSchema: SuggestLandValueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
