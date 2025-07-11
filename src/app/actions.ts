
"use server";

import { suggestLandValue } from "@/ai/flows/suggest-land-value";
import { z } from "zod";

const SuggestLandValueInputSchema = z.object({
  state: z.string().min(1, "State is required"),
  county: z.string().min(2, "County is required"),
  acreage: z.coerce.number().positive("Acreage must be a positive number"),
});

export type ValuationResultState = {
  message: string;
  result?: {
    estimatedValueRange: string;
    confidenceLevel: string;
  };
  errors?: {
    state?: string[];
    county?: string[];
    acreage?: string[];
  };
};

export async function getLandValue(
  prevState: ValuationResultState,
  formData: FormData
): Promise<ValuationResultState> {
  const validatedFields = SuggestLandValueInputSchema.safeParse({
    state: formData.get("state"),
    county: formData.get("county"),
    acreage: formData.get("acreage"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { state, county, acreage } = validatedFields.data;

  try {
    const result = await suggestLandValue({ state, county, acreage });
    return {
      message: "Success!",
      result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
