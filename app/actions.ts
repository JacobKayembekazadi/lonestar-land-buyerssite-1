
"use server";

import { suggestLandValue, SuggestLandValueInput } from "../src/ai/flows/suggest-land-value";
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

export type BuyerFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    location?: string[];
    lotSize?: string[];
    budget?: string[];
    additionalInfo?: string[];
  };
};

const BuyerFormSchema = z.object({
  name: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  location: z.string().min(2, { message: "Location is required." }),
  lotSize: z.string().min(1, { message: "Lot size is required." }),
  budget: z.string().min(1, { message: "Budget is required." }),
  additionalInfo: z.string().optional(),
});

export async function findLandDeals(
  prevState: BuyerFormState,
  formData: FormData
): Promise<BuyerFormState> {
  const validatedFields = BuyerFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    lotSize: formData.get("lotSize"),
    budget: formData.get("budget"),
    additionalInfo: formData.get("additionalInfo"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // In a real application, you would now take this data and
  // find matching land deals, email the user, etc.
  // For this example, we'll just return a success message.

  return {
    message: "Success!",
  };
}

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
