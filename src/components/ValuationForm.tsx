"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getLandValue, type ValuationResultState } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, BotMessageSquare, BarChart } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  state: z.string().min(1, { message: "Please select a state." }),
  county: z.string().min(2, { message: "County is required." }),
  acreage: z.coerce.number().positive({ message: "Acreage must be a positive number." }),
});

type FormData = z.infer<typeof formSchema>;

const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export function ValuationForm() {
  const initialState: ValuationResultState = { message: "" };
  const [state, formAction] = useFormState(getLandValue, initialState);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, control, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { state: 'Texas' }
  });

  if (state.message === "Success!" && state.result) {
    return (
      <Card className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl space-y-6">
        <CardContent className="p-0">
           <Alert>
             <BotMessageSquare className="h-4 w-4" />
             <AlertTitle className="font-bold text-lg text-primary">Valuation Estimate</AlertTitle>
             <AlertDescription className="text-base text-foreground mt-4 space-y-4">
                <div>
                    <p className="font-semibold text-muted-foreground">Estimated Value Range</p>
                    <p className="text-2xl font-bold">{state.result.estimatedValueRange}</p>
                </div>
                <div>
                    <p className="font-semibold text-muted-foreground">Confidence Level</p>
                    <p>{state.result.confidenceLevel}</p>
                </div>
                <p className="text-sm text-muted-foreground pt-4">*This is an automated estimate and not a formal offer. A LoneStar Land Buyers representative will contact you with a firm cash offer.</p>
             </AlertDescription>
           </Alert>
        </CardContent>
      </Card>
    );
  }
  
  return (
      <form action={formAction} className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register("name")} className="mt-1" />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...register("email")} className="mt-1" />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="state">State</Label>
             <Select name="state" defaultValue="Texas" onValueChange={(value) => setValue('state', value, { shouldValidate: true })}>
              <SelectTrigger id="state" className="mt-1">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {usStates.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors.state && <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>}
            {state.errors?.state && <p className="text-red-600 text-sm mt-1">{state.errors.state[0]}</p>}
          </div>
          <div>
            <Label htmlFor="county">County</Label>
            <Input id="county" {...register("county")} className="mt-1" />
            {errors.county && <p className="text-red-600 text-sm mt-1">{errors.county.message}</p>}
             {state.errors?.county && <p className="text-red-600 text-sm mt-1">{state.errors.county[0]}</p>}
          </div>
          <div>
            <Label htmlFor="acreage">Acreage (Approx.)</Label>
            <Input id="acreage" type="number" {...register("acreage")} className="mt-1" />
            {errors.acreage && <p className="text-red-600 text-sm mt-1">{errors.acreage.message}</p>}
            {state.errors?.acreage && <p className="text-red-600 text-sm mt-1">{state.errors.acreage[0]}</p>}
          </div>
        </div>
        
        {state.message && state.message !== "Success!" && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        <div>
           <Button type="submit" disabled={isSubmitting} className="w-full bg-cta text-cta-foreground font-bold py-4 px-6 text-lg hover:bg-cta/90 transition-colors shadow-lg h-14">
            {isSubmitting ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'Calculate My Offer'}
          </Button>
        </div>
      </form>
  );
}
