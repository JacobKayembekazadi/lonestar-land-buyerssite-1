
"use server";

import { suggestLandValue, SuggestLandValueInput } from "@/ai/flows/suggest-land-value";
import { z } from "zod";

const SuggestLandValueInputSchema = z.object({
  state: z.string().min(1, "State is required"),
  county: z.string().min(2, "County is required"),
  acreage: z.coerce.number().positive("Acreage must be a positive number"),
  phone: z.string().optional(),
  propertyType: z.string().optional(),
  sellingTimeline: z.string().optional(),
  additionalInfo: z.string().optional(),
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
    phone?: string[];
    propertyType?: string[];
    sellingTimeline?: string[];
    additionalInfo?: string[];
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
    phone: formData.get("phone"),
    propertyType: formData.get("propertyType"),
    sellingTimeline: formData.get("sellingTimeline"),
    additionalInfo: formData.get("additionalInfo"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await suggestLandValue(validatedFields.data);
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
