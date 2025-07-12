
"use client";

import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { findLandDeals, type BuyerFormState } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, BotMessageSquare } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  location: z.string().min(2, { message: "Location is required." }),
  lotSize: z.string().min(1, { message: "Lot size is required." }),
  budget: z.string().min(1, { message: "Budget is required." }),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const lotSizes = ["Under 1 acre", "1-5 acres", "5-20 acres", "20-100 acres", "100+ acres"];
const budgets = ["Under $50,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,000 - $500,000", "$500,000+"];


export function BuyerForm() {
  const initialState: BuyerFormState = { message: "" };
  const [state, formAction] = useActionState(findLandDeals, initialState);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, control, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  if (state.message === "Success!") {
    return (
      <Card className="bg-background border-primary text-foreground p-8 rounded-lg space-y-6 shadow-xl">
        <CardHeader className="p-0 mb-4 text-center">
            <BotMessageSquare className="h-12 w-12 mx-auto text-primary" />
            <CardTitle className="font-bold text-2xl text-primary mt-2">We're On It!</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
           <Alert variant="default" className="bg-card border-none text-left">
             <AlertDescription className="text-base text-foreground mt-4 space-y-6">
                <p>Thank you for submitting your request. We are now searching for off-market land deals that match your criteria. An Axelson John representative will be in touch with you shortly with your personalized list of properties.</p>
             </AlertDescription>
           </Alert>
        </CardContent>
      </Card>
    );
  }
  
  return (
      <form action={formAction} className="bg-card border border-border text-foreground p-8 md:p-12 rounded-lg space-y-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} className="mt-2" placeholder="e.g. Jane Doe" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...register("email")} className="mt-2" placeholder="jane.doe@example.com" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
           <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" type="tel" {...register("phone")} className="mt-2" placeholder="(555) 123-4567" />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Label htmlFor="location">Desired Location (County or Area)</Label>
            <Input id="location" {...register("location")} className="mt-2" placeholder="e.g. Travis County" />
            {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>}
          </div>
          <div>
            <Label htmlFor="lotSize">Lot Size</Label>
            <Select name="lotSize" onValueChange={(value) => setValue('lotSize', value, { shouldValidate: true })}>
              <SelectTrigger id="lotSize" className="mt-2">
                <SelectValue placeholder="Select lot size" />
              </SelectTrigger>
              <SelectContent>
                {lotSizes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.lotSize && <p className="text-red-600 text-sm mt-1">{errors.lotSize.message}</p>}
          </div>
          <div>
            <Label htmlFor="budget">Budget</Label>
            <Select name="budget" onValueChange={(value) => setValue('budget', value, { shouldValidate: true })}>
              <SelectTrigger id="budget" className="mt-2">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget.message}</p>}
          </div>
        </div>

        <div>
            <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
            <Textarea id="additionalInfo" {...register("additionalInfo")} className="mt-2" placeholder="Tell us more about what you're looking for..." />
        </div>
        
        {state.message && state.message !== "Success!" && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        <div>
           <Button type="submit" disabled={isSubmitting} className="w-full bg-cta text-cta-foreground font-bold py-4 px-6 text-lg h-14">
            {isSubmitting ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'Find My Deals'}
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">By submitting this form, you agree to our privacy policy and consent to be contacted about your property.</p>
      </form>
  );
}
